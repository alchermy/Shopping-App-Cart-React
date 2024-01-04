import React from "react";
import "./Item.css";
import { useCart } from "../Context/CartContext";
import { MdDeleteForever } from "react-icons/md";


function Item({ id, name, price, image, quantity }) {
  const { formatMoney, removeItem, addQuantity , subQuantity} = useCart();
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="product">
        <p className="name">ชื่อสินค้า : {name}</p>
        <p className="price">ราคา :{formatMoney(price)} บาท</p>
      </div>
      <div className="quantity">
        <button onClick={()=> subQuantity(id)}>-</button>
        <input type="text" value={quantity} disabled />
        <button onClick={() => addQuantity(id)}>+</button>
      </div>
      <div className="total-price">{formatMoney(quantity * price)}</div>
      <button onClick={() => removeItem(id)}><MdDeleteForever/></button>
    </div>
  );
}

export default Item;
