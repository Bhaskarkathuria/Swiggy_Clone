import { useState } from "react";

const logedIn = ()=>{
  return false
}


const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://www.shutterstock.com/image-vector/rasoi-modern-restaurant-food-logo-260nw-1561552549.jpg"
    />
  </a>
);
const HeaderComponent = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLogedIn ? (
        <button
          onClick={() => {
            setIsLogedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLogedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default HeaderComponent