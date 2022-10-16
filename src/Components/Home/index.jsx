import React from 'react'
import { CartState } from '../../context/Context'
import SingleProduct from '../SingleProduct.jsx';


const Home = () => {
    const { 
      state: {products},
    } = CartState ();
    console.log (products);
  

  return (
    <div className='home'>
    <filters/>
    <div className='productContainer'>
      {products.map((prod) => {
        return <SingleProduct prod={prod} key= {prod.id}/>
      })}
    </div>
   </div>

  )
}

export default Home