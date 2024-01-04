import React from "react";
import Item from "./Item";
import { useCart } from "../Context/CartContext";

function Cart() {
  const { products, total, formatMoney } = useCart();
  return (
    <div className="cart">
      <h1 style={{ textAlign: "center" }}>
        {products.length > 0
          ? `ยอดเงินรวม : ${formatMoney(total)} บาท `
          : "ไม่มีสินค้า"}
      </h1>
      {products.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Cart;
