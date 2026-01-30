# Hosting Website - Clean Architecture React TypeScript

A modern, production-ready hosting website built with **Clean Architecture** principles using React, TypeScript, and Tailwind CSS.

## 🏗️ Clean Architecture Structure

This project follows Clean Architecture principles with clear separation of concerns:

```
src/
├── domain/                 # Enterprise Business Rules (Innermost Layer)
│   ├── entities/          # Business entities with core logic
│   │   ├── HostingPlan.ts
│   │   └── DomainExtension.ts
│   └── repositories/      # Repository interfaces (ports)
│       └── IRepositories.ts
│
├── application/           # Application Business Rules
│   └── use-cases/        # Use cases orchestrate business logic
│       ├── HostingUseCases.ts
│       └── DomainUseCases.ts
│
├── infrastructure/        # Frameworks & Drivers (Outermost Layer)
│   ├── data/             # Data sources (mock, API, database)
│   │   └── MockData.ts
│   ├── repositories/     # Repository implementations
│   │   └── RepositoryImplementations.ts
│   └── di/               # Dependency Injection container
│       └── Container.ts
│
└── presentation/          # UI Layer
    ├── components/       # React components
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── DomainExtensions.tsx
    │   ├── FeaturedHosting.tsx
    │   ├── WebHostingFeatures.tsx
    │   └── HostingServices.tsx
    ├── pages/            # Page components
    │   └── HomePage.tsx
    ├── hooks/            # Custom React hooks
    │   ├── useHostingPlans.ts
    │   └── useDomainExtensions.ts
    └── App.tsx           # Main application component
```

## 🎯 Clean Architecture Principles

### 1. **Dependency Rule**
Dependencies point inward: Presentation → Application → Domain
- Domain layer has **zero dependencies**
- Infrastructure implements domain interfaces
- Presentation depends on application use cases

### 2. **Separation of Concerns**
- **Domain**: Pure business logic, entities, and interfaces
- **Application**: Use cases that orchestrate domain logic
- **Infrastructure**: External implementations (API, database)
- **Presentation**: UI components and user interactions

### 3. **Dependency Injection**
All dependencies are managed through the DI container, making the code:
- Testable (easy to mock dependencies)
- Maintainable (loose coupling)
- Flexible (easy to swap implementations)

## 🚀 Features

- ✅ **Clean Architecture** with clear layer separation
- ✅ **TypeScript** for type safety
- ✅ **React 18** with modern hooks
- ✅ **Tailwind CSS** for styling
- ✅ **React Router** for navigation
- ✅ **Dependency Injection** pattern
- ✅ **Repository Pattern** for data access
- ✅ **Use Case Pattern** for business logic
- ✅ **Custom Hooks** for state management
- ✅ **Responsive Design**
- ✅ **Mock Data** (easily replaceable with real API)

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## 🎨 Customization

### Adding New Features

#### 1. Add a new entity (Domain Layer):
```typescript
// src/domain/entities/YourEntity.ts
export interface YourEntity {
  id: string;
  name: string;
}
```

#### 2. Add repository interface (Domain Layer):
```typescript
// src/domain/repositories/IRepositories.ts
export interface IYourRepository {
  getAll(): Promise<YourEntity[]>;
}
```

#### 3. Add use case (Application Layer):
```typescript
// src/application/use-cases/YourUseCases.ts
export class GetYourEntitiesUseCase {
  constructor(private repository: IYourRepository) {}
  
  async execute(): Promise<YourEntity[]> {
    return await this.repository.getAll();
  }
}
```

#### 4. Implement repository (Infrastructure Layer):
```typescript
// src/infrastructure/repositories/RepositoryImplementations.ts
export class YourRepositoryImpl implements IYourRepository {
  async getAll(): Promise<YourEntity[]> {
    // Implementation here
  }
}
```

#### 5. Register in DI container:
```typescript
// src/infrastructure/di/Container.ts
private yourRepository = new YourRepositoryImpl();
getYourEntitiesUseCase = new GetYourEntitiesUseCase(this.yourRepository);
```

#### 6. Create custom hook (Presentation Layer):
```typescript
// src/presentation/hooks/useYourEntities.ts
export const useYourEntities = () => {
  const [entities, setEntities] = useState<YourEntity[]>([]);
  
  useEffect(() => {
    const fetch = async () => {
      const data = await container.getYourEntitiesUseCase.execute();
      setEntities(data);
    };
    fetch();
  }, []);
  
  return { entities };
};
```

### Replacing Mock Data with Real API

1. Create API client in `src/infrastructure/api/`
2. Update repository implementations to use the API client
3. No changes needed in domain, application, or presentation layers!

## 🧪 Testing Strategy

- **Domain Layer**: Test entities and business logic (unit tests)
- **Application Layer**: Test use cases with mocked repositories (unit tests)
- **Infrastructure Layer**: Test repository implementations (integration tests)
- **Presentation Layer**: Test components with mocked hooks (component tests)

## 📱 Pages Included

- **Home Page**: Complete landing page with all sections
- **Domain Search**: Search for available domains
- **Hosting Plans**: Display various hosting options
- **WordPress Hosting**: Featured hosting showcase
- **Navigation**: Full header with routing support

## 🎨 Design System

- **Colors**: Orange/Primary theme (customizable in tailwind.config.js)
- **Typography**: Space Grotesk for headings, Inter for body
- **Components**: Reusable, accessible components
- **Responsive**: Mobile-first design approach

## 🔧 Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Clean Architecture** - Software architecture

## 📖 Learning Resources

- [Clean Architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [React TypeScript Best Practices](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

This is a template project. Feel free to:
- Add more features following the architecture
- Improve existing components
- Add tests
- Enhance documentation

## 📄 License

MIT License - feel free to use this project for learning or production.

---

**Built with ❤️ using Clean Architecture principles**
