
import React, { useState } from 'react';
import shoes from './Shoes';
import './Home.css';
import './Cart.css';

const Home=()=>{
//     const [cartItems,Setcartitems]=useState([]);
//  const AddToCart=(item)=>{
//     Setcartitems((prevItems)=>{
//         const existingItem=prevItems.find((product)=>product.name===item.name);
//         if(existingItem){
//             return prevItems.map((product)=>product.name===item.name?{...product,quantity:product.quantity+1}:product);
              
//         }
//         else{
//             return[...prevItems,{...item,quantity:1}];
//         }
//     });
//  }

//  const updatecart=(name,quantity)=>{
//     Setcartitems((prevItems)=>{
//         return prevItems.map((product)=>product.name===name?{...product,quantity:product.quantity+quantity}:product).filter((product)=>product.quantity>0);
//     });
// }
//  }


// const total=cartItems.reduce((sum,product)=>sum+product.price*product.quantity,0);

const [cartItems, setCartItems] = useState([]);

const handleAddToCart = (product) => {
  const item = cartItems.find(item => item.id === product.id);
  if (item) {
    setCartItems(cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  } else {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }
};

const handleRemoveItem = (productId) => {
  const item = cartItems.find(item => item.id === productId);
  if (item.quantity === 1) {
    setCartItems(cartItems.filter(item => item.id !== productId));
  } else {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    ));
  }
};

const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return(
    

        <div className="main-container">
            <div className="Product-desc">
            {shoes.map(item => (
            <div key={item.id} className="product">
              <img src={item.Image} alt={item.name} />
              <div className="product-details">
                <h3>{item.name}</h3>
                <h4>Rs{item.price} <button className="add" onClick={ ()=>handleAddToCart(item)}>Add-to-cart</button></h4>
                
              
              </div>
            </div>
          ))}
            </div>
            <div className="cart">
        <h2>Cart</h2>
        <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              
              <td>{item.name}</td>
              <td>${item.price}</td>
             
              <td className="quantity">
                <button onClick={() =>  handleAddToCart(item)}>+</button>
                {item.quantity}
                <button onClick={() => handleRemoveItem(item.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="total">Total: ${total.toFixed(2)}</h3>
      </div>
        </div>
           
       
    )
}

export default Home