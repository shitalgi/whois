# 📁 Complete Project Structure

```
hosting-website/
│
├── 📄 package.json                      # Project dependencies and scripts
├── 📄 package-lock.json                 # Lock file for dependencies
├── 📄 tsconfig.json                     # TypeScript configuration
├── 📄 tsconfig.node.json                # TypeScript config for Node
├── 📄 vite.config.ts                    # Vite bundler configuration
├── 📄 tailwind.config.js                # Tailwind CSS configuration
├── 📄 postcss.config.js                 # PostCSS configuration
├── 📄 .eslintrc.cjs                     # ESLint configuration
├── 📄 .gitignore                        # Git ignore file
├── 📄 index.html                        # Entry HTML file
│
├── 📚 README.md                         # Main documentation
├── 📚 ARCHITECTURE.md                   # Clean Architecture guide
├── 📚 QUICKSTART.md                     # Quick start guide
│
└── 📁 src/                              # Source code
    │
    ├── 📄 main.tsx                      # Application entry point
    ├── 📄 index.css                     # Global styles with Tailwind
    ├── 📄 vite-env.d.ts                 # Vite type definitions
    │
    ├── 🏛️ domain/                       # DOMAIN LAYER (Core Business Logic)
    │   ├── 📁 entities/                 # Business entities
    │   │   ├── 📄 HostingPlan.ts        # Hosting plan entity
    │   │   └── 📄 DomainExtension.ts    # Domain extension entity
    │   │
    │   └── 📁 repositories/             # Repository interfaces (Ports)
    │       └── 📄 IRepositories.ts      # All repository interfaces
    │
    ├── 🎯 application/                  # APPLICATION LAYER (Use Cases)
    │   └── 📁 use-cases/                # Business use cases
    │       ├── 📄 HostingUseCases.ts    # Hosting-related use cases
    │       └── 📄 DomainUseCases.ts     # Domain search use cases
    │
    ├── 🔌 infrastructure/               # INFRASTRUCTURE LAYER (External Services)
    │   ├── 📁 data/                     # Data sources
    │   │   └── 📄 MockData.ts           # Mock data for development
    │   │
    │   ├── 📁 repositories/             # Repository implementations
    │   │   └── 📄 RepositoryImplementations.ts
    │   │
    │   └── 📁 di/                       # Dependency Injection
    │       └── 📄 Container.ts          # DI container with all dependencies
    │
    └── 🎨 presentation/                 # PRESENTATION LAYER (UI)
        │
        ├── 📄 App.tsx                   # Main App component with routing
        │
        ├── 📁 pages/                    # Page components
        │   └── 📄 HomePage.tsx          # Home page
        │
        ├── 📁 components/               # Reusable UI components
        │   ├── 📄 Header.tsx            # Header with navigation
        │   ├── 📄 Hero.tsx              # Hero section with search
        │   ├── 📄 DomainExtensions.tsx  # Domain extension cards
        │   ├── 📄 FeaturedHosting.tsx   # WordPress hosting feature
        │   ├── 📄 WebHostingFeatures.tsx # Web hosting details
        │   └── 📄 HostingServices.tsx   # Hosting services grid
        │
        └── 📁 hooks/                    # Custom React hooks
            ├── 📄 useHostingPlans.ts    # Hook for hosting plans
            └── 📄 useDomainExtensions.ts # Hook for domain extensions
```

---

## 📊 Layer Dependency Diagram

```
┌─────────────────────────────────────────────────────────┐
│                   PRESENTATION LAYER                     │
│                                                          │
│  Components, Pages, Hooks, State Management              │
│  (Depends on: Application Layer)                         │
└────────────────────┬─────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────┐
│                  APPLICATION LAYER                       │
│                                                          │
│  Use Cases, Business Logic Orchestration                 │
│  (Depends on: Domain Layer)                              │
└────────────────────┬─────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────┐
│                    DOMAIN LAYER                          │
│                                                          │
│  Entities, Repository Interfaces, Business Rules         │
│  (Depends on: NOTHING - Pure business logic)             │
└─────────────────────────────────────────────────────────┘
                     ↑
                     │
┌────────────────────┴─────────────────────────────────────┐
│                INFRASTRUCTURE LAYER                       │
│                                                          │
│  Repository Implementations, API Clients, DI Container    │
│  (Implements: Domain Interfaces)                          │
└─────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow Example: "Get Hosting Plans"

```
1. User clicks "View Plans" button
   │
   ↓
2. PRESENTATION: Component calls custom hook
   └─→ useHostingPlans()
       │
       ↓
3. Hook calls USE CASE through DI container
   └─→ container.getHostingPlansUseCase.execute()
       │
       ↓
4. APPLICATION: Use case calls repository interface
   └─→ hostingRepository.getHostingPlans()
       │
       ↓
5. INFRASTRUCTURE: Repository implementation fetches data
   └─→ HostingRepositoryImpl (calls API or returns mock data)
       │
       ↓
6. Data flows back through the layers
   └─→ USE CASE → HOOK → COMPONENT → USER SEES PLANS
```

---

## 📦 File Size Overview

- **Configuration files**: ~15 files
- **Domain layer**: 3 files (entities + interfaces)
- **Application layer**: 2 files (use cases)
- **Infrastructure layer**: 3 files (implementations)
- **Presentation layer**: 11 files (components + hooks)
- **Documentation**: 3 markdown files

**Total**: ~37 files (excluding node_modules)

---

## 🎯 Key Files to Start With

1. **`README.md`** - Start here for overview
2. **`QUICKSTART.md`** - Get running in 5 minutes
3. **`ARCHITECTURE.md`** - Understand the structure
4. **`src/presentation/pages/HomePage.tsx`** - See how components fit together
5. **`src/infrastructure/di/Container.ts`** - Understand dependency injection
6. **`src/domain/entities/HostingPlan.ts`** - See business entities
7. **`src/application/use-cases/HostingUseCases.ts`** - See use case pattern

---

## 🚀 Development Workflow

1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm run dev`
3. **Make changes**: Edit files in `src/`
4. **See changes**: Hot reload updates browser automatically
5. **Build for production**: `npm run build`
6. **Preview build**: `npm run preview`

---

## 📝 Notes

- All source files are TypeScript (`.ts`, `.tsx`)
- Styling uses Tailwind CSS utility classes
- State management uses React hooks
- Routing uses React Router v6
- No external state library needed (Redux, MobX, etc.)
- Mock data can be easily replaced with real API

---

**This structure ensures:**
✅ Separation of concerns
✅ Easy testing
✅ Maintainable code
✅ Scalable architecture
✅ Clear dependencies
✅ Production-ready setup
