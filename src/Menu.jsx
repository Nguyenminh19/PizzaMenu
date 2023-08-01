import React from "react";

const Pizza = ({ pizza }) => {
  return (
    <div className={`pizza ${pizza.soldOut > 0 ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.photoName} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </div>
  );
};

const Pizzas = ({ list }) => {
  return (
    <div className="pizzas">
      {list.map((pizza, index) => (
        <Pizza pizza={pizza} key={index} />
      ))}
    </div>
  );
};

const Menu = ({ pizzas }) => {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <Pizzas list={pizzas} />
    </div>
  );
};

export default Menu;
