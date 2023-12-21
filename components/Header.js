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
    </div>
  );
};

export default HeaderComponent