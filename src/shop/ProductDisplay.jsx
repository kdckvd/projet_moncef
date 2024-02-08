import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const desc = "disponible a la commande (10-15) jours ouvrables";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [color, setColor] = useState("Select Color");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity, // Use prequantity instead of quantity
      color: color,
      coupon: coupon,
    };
    
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    setQuantity(1);
    setColor("Select Color");
    setCoupon("");
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className='rating'>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          <i className='icofont-star'></i>
          <span> {ratingsCount} review </span>
        </p>
        <h4>{price} TND </h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      <div>
        
        <form onSubmit={handleAddToCart}>
          <div className='select-product color'>
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>gris</option>
              <option>blanc</option>
              <option>rouge</option>
              <option>bleu</option>
              <option>noir</option>
            </select>
            <i className='icofont-rounded-down'></i>
          </div>
          <div className='cart-plus-minus'>
            <div className='dec qtybutton' onClick={handleDecrease}>
              -
            </div>
            <input
              className='cart-plus-minus-box'
              type='text'
              name='qtybutton'
              id='qtybutton'
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
             />
            <div className='inc qtybutton' onClick={handleIncrease}>
              +
            </div>
          </div>
       
          <div className='discount-code mb-2'>
            <input
              type='text'
              placeholder='Enter Promo Code'
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          <ul>
          <button type='submit' className='lab-btn'>
            <span>Add to Cart</span>
          </button>
      

        <Link to="/cart-page" className='lab-btn bg-primary'>
          <span> Check Out </span>
        </Link>
        </ul>
      </form>
        
      </div>
    </div>
   
  );
};

export default ProductDisplay;
