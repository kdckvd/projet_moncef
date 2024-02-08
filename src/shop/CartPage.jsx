import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from '../assets/images/shop/del.png'
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems,setcartItems]=useState([]);
    useEffect(() =>{

        //fetch cart item from local storage
        const storedCartItems=JSON.parse(localStorage.getItem("cart")) || [];
        setcartItems(storedCartItems);
    },[])
        
        // calculate price
        const calculateTotalePrice=(item) => {
            return item.price * item.quantity;
        }
        //hundle quantity increase 
        const hundleIncrease =(item) => {
            item.quantity += 1;
            setcartItems([...cartItems]);

            //update local storage 
            localStorage.setItem("cart",JSON.stringify(cartItems));
        }
        const hundleDecrease =(item)=>{
            if (item.quantity >1 ){
                item.quantity -= 1;
                setcartItems([...cartItems]);
                //update local storage 
            localStorage.setItem("cart",JSON.stringify(cartItems));
            }
        };

        const hundleRemoveItem =(item) => {
            const updateCart= cartItems.filter((cartItem) =>cartItem.id !==item.id);
            setcartItems(updateCart); 
            updateLocalStorage(updateCart);
        }
        const updateLocalStorage=(cart) => {
                localStorage.setItem("cart",JSON.stringify(cart));
                    }
                    const cartSubtotal=cartItems.reduce((total,item) =>{
                        return total +calculateTotalePrice(item);
                     }, 0)
                     const orderTotal=cartSubtotal;


    
     return (
      <div>
        <PageHeader head={" SHOP CART"} cettepage={"cart page"}/>
        <div className='shop-cart padding-tb'>
            <div className='container'>
                <div className='section-wrapper'>
                     <div className='cart-top'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='cat-product'> Product</th>
                                    <th className='cat-price'> Price</th>
                                    <th className='cat-quantity'> Quantity</th>
                                    <th className='cat-toprice'> Total</th>
                                    <th className='cat-edit'> Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        cartItems.map((item,indx) =>(
                                            <tr key={indx}>
                                                <td className='product-item cat-product'>
                                                <div className='p-thumb'>
                                                         <Link to="/shop"> <img  src={item.img} alt=''/> </Link>
                                                    </div>
                                                    <div className='p-content'>
                                                        <Link to="/shop"> {item.name} </Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'> {item.price} TND </td>
                                                <td className='cat-quantity'>
                                                    <div className='cart-plus-minus'>
                                                        <div className='dec qtybutton' onClick={() =>hundleDecrease(item)}>-</div>
                                                        <input type='text' className='cart-plus-minus-box' name='qtybutton'value={item.quantity}/>
                                                        <div className='inc qtybutton' onClick={()=>hundleIncrease(item)}>+</div>

                                                    </div>
                                                </td>
                                                <td className='cat-toprice'> {calculateTotalePrice (item) } TND  </td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() =>hundleRemoveItem(item)}>
                                                        <img src={delImgUrl} />
                                                        </a> 
                                                 </td>
                                            </tr>
                                        ))
                                    }
                            </tbody>
                             
                        </table>

                     </div>

                     <div className='cart-bottom'>
                        
                        <div className='cart-checkout-box'>
                            <form className='coupon'>
                                <input className='cart-page-input-text' type="text" name='coupon' id='coupon' placeholder='Coupon code...' />
                                <input type='submit' value="Apply Coupon" />
                            </form>
                            <form className='cart-checkout'>
                                <input type="submit" value="update Cart"/>
                                <div>
                                    <CheckOutPage/>
                                </div>
                            </form>

                        </div>
                        <div className='shiping-box'>
                            <div className='row'>
                                <div className='col-md-6 col-12' >
                                    <div className='calculate-shiping'>
                                        <h3> Calculate Shiping</h3>
                                        <div className='outline-select'>
                                            <select>
                                                <option value="uk"> United Kingdom </option>
                                                <option value="fr"> France </option>
                                                <option value="tun"> Tunisia</option>

                                            </select>
                                            <span className='select-icon'>
                                                <i className='icofont-rounded-down'>  </i>
                                            </span>

                                        </div>
                                        <div className='outline-select shipping-select'>
                                        <select>
                                                <option value="uk"> New work </option>
                                                <option value="fr"> Paris </option>
                                                <option value="tun"> Tunisie</option>

                                            </select>
                                            <span className='select-icon'>
                                                <i className='icofont-rounded-down'>  </i>
                                            </span>
                                        </div>
                                        <input type="text" name='postalCode' id='postalCode' placeholder='Postocode/zip*'  className='cart-page-input-text' />
                                        <button type='submit'> Update Adress </button>

                                    </div>

                                </div>
                                <div className='col-md-6 col-12'> 
                                <div className='cart-overview'>
                                    <h3>Cart Totals</h3>
                                    <ul className='lab-ul'>
                                        <li>
                                            <span className='pull-left'>Cart Subtotal </span>
                                            <p className='pull-right'> {cartSubtotal} TND </p>
                                        </li>
                                        <li>
                                            <span className='pull-left'>Frais de port et de manutention </span>
                                            <p className='pull-right'>livraison gratuite</p>
                                        </li>
                                        <li>
                                            <span className='pull-left'> Total de la commande </span>
                                            <p className='pull-right'> {orderTotal.toFixed(2)} TND </p>
                                        </li>

                                    </ul>

                                </div>
                                
                                
                                 </div>

                            </div>

                        </div>


                     </div>


                </div>

            </div>

        </div>

       </div>
    
        )
          }

export default CartPage