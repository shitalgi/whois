# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Extract the project folder**

2. **Navigate to the project directory:**
```bash
cd hosting-website
```

3. **Install dependencies:**
```bash
npm install
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Open your browser:**
Navigate to `http://localhost:5173`

That's it! You should see the hosting website running.

---

## 🎯 Project Commands

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Check code for errors
```

---

## 📁 Project Structure Overview

```
hosting-website/
├── src/
│   ├── domain/              # Core business logic (no dependencies)
│   ├── application/         # Use cases (depends on domain)
│   ├── infrastructure/      # External services (implements domain)
│   └── presentation/        # React UI (depends on application)
│
├── public/                  # Static assets
├── index.html              # Entry HTML
├── package.json            # Dependencies
└── README.md              # Documentation
```

---

## 🛠️ Making Your First Change

### Change the Site Title

**File**: `index.html`
```html
<title>Your New Title Here</title>
```

### Change Primary Color

**File**: `tailwind.config.js`
```javascript
colors: {
  primary: {
    500: '#your-color-hex',
    600: '#your-darker-hex',
    // ...
  },
}
```

### Add a New Component

1. Create file in `src/presentation/components/YourComponent.tsx`
```typescript
import React from 'react';

const YourComponent: React.FC = () => {
  return (
    <div className="p-4">
      <h2>Your Component</h2>
    </div>
  );
};

export default YourComponent;
```

2. Import and use in `src/presentation/pages/HomePage.tsx`
```typescript
import YourComponent from '../components/YourComponent';

// Add to return statement
<YourComponent />
```

---

## 🎨 Customizing Styles

This project uses **Tailwind CSS**. Style components with utility classes:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
  Styled Component
</div>
```

Common patterns:
- `p-4` = padding
- `m-4` = margin
- `bg-blue-500` = background color
- `text-white` = text color
- `rounded-lg` = rounded corners
- `hover:bg-blue-600` = hover state

---

## 🔧 Common Tasks

### Add Mock Data

**File**: `src/infrastructure/data/MockData.ts`

```typescript
export const mockYourData = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
];
```

### Create a New Page

1. Create `src/presentation/pages/YourPage.tsx`
2. Add route in `src/presentation/App.tsx`:
```typescript
<Route path="/your-page" element={<YourPage />} />
```

### Connect to Real API

Replace mock repository in `src/infrastructure/repositories/`:

```typescript
export class HostingRepositoryImpl implements IHostingRepository {
  async getHostingPlans(): Promise<HostingPlan[]> {
    // Replace mock with real API call
    const response = await fetch('https://your-api.com/hosting-plans');
    return await response.json();
  }
}
```

---

## 📚 Learn More

- **Full README**: `README.md` - Complete documentation
- **Architecture Guide**: `ARCHITECTURE.md` - Clean Architecture explained
- **Tailwind Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev

---

## 🐛 Troubleshooting

### Port 5173 already in use
```bash
# Kill the process using the port
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

### Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

---

## 🎉 Next Steps

1. Explore the codebase
2. Read `ARCHITECTURE.md` to understand the structure
3. Modify components to match your design
4. Replace mock data with real API
5. Add your features following Clean Architecture patterns

---

**Happy Coding! 🚀**
