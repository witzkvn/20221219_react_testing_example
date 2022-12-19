import React, { useState } from "react";

const Cart = ({ cancel }: { cancel: () => void }) => {
  const [purchased, setPurchased] = useState(false);
  return (
    <div>
      <button onClick={() => setPurchased(true)}>Purchase</button>;
      <button onClick={cancel}>Cancel</button>;{purchased && <p>Thank you!</p>}
    </div>
  );
};

export default Cart;
