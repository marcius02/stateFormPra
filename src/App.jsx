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
        <h1>useState practice</h1>
        <p>
          <b>App.jsx</b> component incorporates three exercises (Registration Form, Shopping Cart, Todo List) along with an
          extra feature (Profile Editor) into a single component with four
          buttons to switch between them.
        </p>
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
