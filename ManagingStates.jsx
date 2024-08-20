import React from "react";

export default function App() {
  const [price, SetNewDiscount] = React.useState(100);
  function handleDiscountedChange(newPrice) {
    console.log(price);
    SetNewDiscount(newPrice);
  }
  return (
    <div>
      <p data-testid="price">${price}</p>
      <button onClick={() => handleDiscountedChange(75)}>
        Apply Discount
      </button>{" "}
      {SetNewDiscount}
    </div>
  );
}
