// import React, { useEffect, useState } from 'react'

// const Products = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products')
//         .then((response)=>response.json())
//         .then((data)=>{
//             console.log(data);
//             setProducts(data);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     }, [])
//   return (
//     <div className='products'>
//         {
//             products.map((product, index)=>{
//                 return(
//                     <div className='product'>

//                     </div>
//                 )
                
//             })
//         }
    
//     </div>
//   )
// }

// export default Products


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='products'>
      {products.map((product) => (
        <div key={product.id} className='product'>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <img src={product.image} alt={product.title} style={{width: '100px'}} />
        </div>
      ))}
    </div>
  );
};

export default Products;