# Clean Architecture Documentation

## What is Clean Architecture?

Clean Architecture is a software design philosophy that separates the application into layers with clear boundaries and dependencies flowing inward. This creates:

- **Testable** code (easy to mock and test)
- **Independent** of frameworks and UI
- **Independent** of databases and external services
- **Maintainable** and scalable codebase

## Layer Breakdown

### 1. Domain Layer (Core Business Logic) ⭐️
**Location**: `src/domain/`

**Purpose**: Contains the core business logic and rules. This layer is the heart of the application.

**Characteristics**:
- Zero dependencies on other layers
- Pure TypeScript/JavaScript
- Contains entities and business rules
- Defines interfaces (ports) for repositories

**Example Files**:
- `entities/HostingPlan.ts` - Business entity with methods
- `repositories/IRepositories.ts` - Repository interfaces

**When to modify**: When business rules change

---

### 2. Application Layer (Use Cases) 🎯
**Location**: `src/application/`

**Purpose**: Orchestrates the flow of data between layers. Contains application-specific business rules.

**Characteristics**:
- Depends only on Domain layer
- Implements use cases (user actions)
- No UI or database knowledge
- Calls repository interfaces

**Example Files**:
- `use-cases/HostingUseCases.ts` - Get hosting plans
- `use-cases/DomainUseCases.ts` - Search domains

**When to modify**: When user workflows change

---

### 3. Infrastructure Layer (External Services) 🔌
**Location**: `src/infrastructure/`

**Purpose**: Implements the interfaces defined in the domain layer. Handles external concerns.

**Characteristics**:
- Depends on Domain layer
- Implements repository interfaces
- Handles API calls, database, external services
- Contains mock data (for development)

**Example Files**:
- `repositories/RepositoryImplementations.ts` - Concrete implementations
- `data/MockData.ts` - Mock data source
- `di/Container.ts` - Dependency injection

**When to modify**: When data sources change (API, database)

---

### 4. Presentation Layer (UI) 🎨
**Location**: `src/presentation/`

**Purpose**: Everything related to the user interface.

**Characteristics**:
- Depends on Application layer
- React components
- Custom hooks
- State management
- User interactions

**Example Files**:
- `components/Header.tsx` - UI component
- `hooks/useHostingPlans.ts` - Custom hook
- `pages/HomePage.tsx` - Page component

**When to modify**: When UI changes

---

## Dependency Flow

```
Presentation → Application → Domain
     ↑              ↑
Infrastructure ────┘
```

**Key Rule**: Dependencies point INWARD
- Presentation can use Application
- Application can use Domain
- Infrastructure implements Domain interfaces
- Domain depends on NOTHING

---

## Benefits of This Architecture

### 1. **Testability**
Each layer can be tested independently:
```typescript
// Test use case with mock repository
const mockRepo = { getHostingPlans: jest.fn() };
const useCase = new GetHostingPlansUseCase(mockRepo);
```

### 2. **Flexibility**
Swap implementations without changing business logic:
```typescript
// Easy to switch from mock to real API
const repository = isDevelopment 
  ? new MockHostingRepository()
  : new APIHostingRepository();
```

### 3. **Maintainability**
Clear boundaries make it easy to find and fix issues:
- UI bug? Check Presentation layer
- Business logic issue? Check Domain/Application
- API problem? Check Infrastructure

### 4. **Scalability**
Add new features by following the same pattern:
1. Add entity (Domain)
2. Add use case (Application)
3. Implement repository (Infrastructure)
4. Create UI component (Presentation)

---

## Common Patterns Used

### 1. **Repository Pattern**
Abstracts data access behind an interface.

```typescript
// Domain defines interface
interface IHostingRepository {
  getHostingPlans(): Promise<HostingPlan[]>;
}

// Infrastructure implements it
class HostingRepositoryImpl implements IHostingRepository {
  async getHostingPlans(): Promise<HostingPlan[]> {
    return await fetch('/api/hosting-plans');
  }
}
```

### 2. **Use Case Pattern**
Each user action is a separate use case.

```typescript
// One use case = one user action
class GetHostingPlansUseCase {
  constructor(private repo: IHostingRepository) {}
  
  async execute(): Promise<HostingPlan[]> {
    return await this.repo.getHostingPlans();
  }
}
```

### 3. **Dependency Injection**
Dependencies are injected, not created.

```typescript
// Container manages all dependencies
class DIContainer {
  private hostingRepo = new HostingRepositoryImpl();
  getHostingPlansUseCase = new GetHostingPlansUseCase(this.hostingRepo);
}

export const container = new DIContainer();
```

### 4. **Custom Hooks (Presentation)**
React hooks connect UI to use cases.

```typescript
export const useHostingPlans = () => {
  const [plans, setPlans] = useState<HostingPlan[]>([]);
  
  useEffect(() => {
    const fetch = async () => {
      // Use case through DI container
      const data = await container.getHostingPlansUseCase.execute();
      setPlans(data);
    };
    fetch();
  }, []);
  
  return { plans };
};
```

---

## How to Add New Features

### Example: Adding a "Newsletter Subscription" feature

#### Step 1: Domain Layer
```typescript
// src/domain/entities/Newsletter.ts
export interface Newsletter {
  email: string;
  subscribed: boolean;
}

// src/domain/repositories/IRepositories.ts
export interface INewsletterRepository {
  subscribe(email: string): Promise<boolean>;
}
```

#### Step 2: Application Layer
```typescript
// src/application/use-cases/NewsletterUseCases.ts
export class SubscribeToNewsletterUseCase {
  constructor(private repo: INewsletterRepository) {}
  
  async execute(email: string): Promise<boolean> {
    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email');
    }
    return await this.repo.subscribe(email);
  }
  
  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
```

#### Step 3: Infrastructure Layer
```typescript
// src/infrastructure/repositories/RepositoryImplementations.ts
export class NewsletterRepositoryImpl implements INewsletterRepository {
  async subscribe(email: string): Promise<boolean> {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    return response.ok;
  }
}

// src/infrastructure/di/Container.ts
private newsletterRepo = new NewsletterRepositoryImpl();
subscribeToNewsletterUseCase = new SubscribeToNewsletterUseCase(this.newsletterRepo);
```

#### Step 4: Presentation Layer
```typescript
// src/presentation/hooks/useNewsletter.ts
export const useNewsletter = () => {
  const [loading, setLoading] = useState(false);
  
  const subscribe = async (email: string) => {
    setLoading(true);
    try {
      await container.subscribeToNewsletterUseCase.execute(email);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  return { subscribe, loading };
};

// src/presentation/components/NewsletterForm.tsx
const NewsletterForm = () => {
  const { subscribe, loading } = useNewsletter();
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await subscribe(email);
    if (success) alert('Subscribed!');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button disabled={loading}>Subscribe</button>
    </form>
  );
};
```

---

## FAQs

**Q: Why so many layers?**
A: Each layer has a single responsibility, making the code easier to understand, test, and maintain.

**Q: Isn't this over-engineering?**
A: For small projects, maybe. But as projects grow, this structure prevents them from becoming unmaintainable.

**Q: Can I skip layers?**
A: No! The power comes from respecting layer boundaries. Shortcuts break the architecture.

**Q: How do I know what goes where?**
A: Ask yourself:
- Is it business logic? → Domain
- Is it a user workflow? → Application
- Is it external (API/DB)? → Infrastructure
- Is it UI? → Presentation

**Q: What about small utilities?**
A: Shared utilities can go in `src/shared/` or within the layer that uses them most.

---

## Resources

- [Clean Architecture Book by Robert C. Martin](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)
- [Clean Architecture Blog Post](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html)

---

**Remember**: Clean Architecture is about separation of concerns and dependency management. Follow the rules, and your code will thank you! 🎉
