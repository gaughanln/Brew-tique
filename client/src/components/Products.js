import React, { useEffect, useState } from 'react';

// from stevie
// import { useQuery } from '@apollo/react-hooks';
// import { GET_PRODUCTS } from '../../utils/queries';

const getProducts = () => {
  return ({
    data:[
    {
      id: 1,
      name: 'Light Roast',
      price: 10.99,
      image: '',
    },
    {
      id: 2,
      name: 'Medium Roast',
      price: 10.99,
      image: '',
    },
    {
      id: 3,
      name: 'Ultra Premium "you need this in your life" Dark Roast',
      price: 30.99,
      image: '',
    }
  ], loading: false})
}



const Products = (props) => {
const {cart, setCart} = props;
const {data, loading} = getProducts(); //replace this with the graphQl query
const [products, setProducts] = useState([])
 useEffect(() => {
  if (!loading) {
    setProducts(data)
  }})


  const addToCart = (product) => {
    setCart([...cart, product]);
  }




  return (
    <div>
      <h2>Products</h2>
      <div style={{display:"flex"}}>
        {products.map((product) => (
          <div key={product.id} style={{border: "1px solid black", margin: "0px 14px"}}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="waves-effect  btn-large brown-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
     </div>
    </div>
  );
};

export default Products;
