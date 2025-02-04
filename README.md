## 🚀 React Practical Exercises Challenge

### Objective

> Create four React components focusing on state management, form handling, and real-world scenarios. Each exercise should demonstrate practical use of React hooks and component design.

### Key Requirements

* Use the `spread operator` for state updates
* Implement `handler` functions for events
* Utilize object `destructuring` in your code

### Exercise Requirements

#### 1. Registration Form Component

**Specifications:**

- Create a registration form with fields:
  - Username
  - Email
  - Password
- Implement form validation
- Handle state management
- Show success message after registration

#### 2. Shopping Cart Component

**Specifications:**

- Develop a dynamic shopping cart interface
- Allow users to:
  - Add items
  - Adjust item quantities
  - Calculate total price
- Implement state management for cart items
- Display a list of added products

#### 3. Todo List with Categories

**Specifications:**

- Build a todo list application with:
  - Task input
  - Category selection
  - Completion tracking
- Features:
  - Add new todos
  - Mark todos as complete
  - Filter by category
  - Persist todo state

#### 4. Extra Challenge: Weather Dashboard

**Advanced Requirements:**

- Create a weather tracking application
- Integrate with a weather API (e.g., OpenWeatherMap)
- Allow users to:
  - Search cities
  - Display current weather
  - Show 5-day forecast
  - Handle loading and error states
- Implement responsive design
- Use `useEffect` for API calls
- Manage complex state with multiple data points

### Bonus Challenges

- Implement local storage to persist data
- Add form validation
- Create responsive designs
- Handle error states
- Create Postman Mock Server with mock data and use Axios to manage communication.
- Optimize performance with `useMemo` and `useCallback`

### Recommended Technologies

- React Hooks
- TypeScript (optional)
- Tailwind CSS or Material-UI for styling
- Axios for API calls

### Submission Guidelines

1. Create separate components for each feature
2. Use functional components
3. Implement proper state management
4. Add comments explaining your logic
5. Handle potential edge cases
6. Create pull-request to send

### Quick Start Template

```jsx
import React, { useState } from 'react';

export default function YourComponent() {
  const [state, setState] = useState(initialState);

  // Your implementation here
    retun (
        <>
  
        </>
    );

}

```

### Resources

- [React Official Documentation](https://react.dev/https://reactjs.org/docs/getting-started.html)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [React Hooks Documentation](https://react.dev/reference/react/hookshttps://reactjs.org/docs/hooks-intro.html)
- [albertprofe](https://albertprofe.dev/)

<mark>Happy Coding!</mark> 💻🚀

## `MultiFeatureApp` component

```jsx
import { useState } from "react";

// Import the components we created earlier
import ProfileEditor from "./ProfileEditor";
import RegisterForm from "./RegisterForm";
import ShoppingCart from "./ShoppingCart";
import TodoList from "./TodoList";

export default function MultiFeatureApp() {
  const [activeFeature, setActiveFeature] = useState("register");

  const renderActiveFeature = () => {
    switch (activeFeature) {
      case "register":
        return <RegisterForm />;
      case "cart":
        return <ShoppingCart />;
      case "todo":
        return <TodoList />;
      case "profile":
        return <ProfileEditor />;
      default:
        return <div>Select a feature</div>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setActiveFeature("register")}>
          Registration
        </button>
        <button onClick={() => setActiveFeature("cart")}>Shopping Cart</button>
        <button onClick={() => setActiveFeature("todo")}>Todo List</button>
        <button onClick={() => setActiveFeature("profile")}>
          Profile Editor
        </button>
      </div>
      <div>{renderActiveFeature()}</div>
    </div>
  );
}
```



This React component is like a control center for four different mini-apps:

1. A registration form
2. A shopping cart
3. A todo list
4. A profile editor

It has four buttons at the top. When you click a button, it shows the corresponding mini-app below.

The component uses React's `useState` to keep track of which mini-app (or "feature") is currently active. The `renderActiveFeature` function decides which mini-app to show based on which button was last clicked.

> This setup allows users to switch between different features easily, all within the same page. It's a bit like having a Swiss Army knife of React components!
