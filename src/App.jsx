import { useState } from "react";

// Import the components we created earlier
import ProfileEditor from "./ProfileEditor";
import RegisterForm from "./RegisterForm";
import ShoppingCart from "./ShoppingCart";
import ShoppingCartNoTotal from "./ShoppingCartNoTotal.";
import TodoList from "./TodoList";

 // Styling for the main container
const containerStyle = {
  width: "80%",
  margin: "50px auto", // Adds 50px margin to the top and centers horizontally
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
};

// Styling for the button container
const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between", // Space between buttons
  marginBottom: "20px", // Adds spacing below the buttons
  padding: "30px",
};

export default function MultiFeatureApp() {
  const [activeFeature, setActiveFeature] = useState("register");

  const renderActiveFeature = () => {
    switch (activeFeature) {
      case "register":
        return <RegisterForm />;
      case "cartnototal":
        return <ShoppingCartNoTotal />;
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
          <b>App.jsx</b> component incorporates three exercises (Registration
          Form, Shopping Cart, Todo List) along with an extra feature (Profile
          Editor) into a single component with four buttons to switch between
          them.
        </p>

         {/* Button Container */}
      <div style={buttonContainerStyle}>
        <button onClick={() => setActiveFeature("register")}>
          Registration
        </button>
        <button onClick={() => setActiveFeature("cart")}>Shopping Cart</button>
        <button onClick={() => setActiveFeature("cartnototal")}>
          Shopping Cart No Total
        </button>
        <button onClick={() => setActiveFeature("todo")}>Todo List</button>
        <button onClick={() => setActiveFeature("profile")}>
          Profile Editor
        </button>
        </div>
      </div>
      <div style={containerStyle}>{renderActiveFeature()}</div>
    </div>
  );
}
