import { createContext, useContext, useReducer } from 'react'
import { cartReducer } from './Reducers';


const Cart= createContext

const Context = ({ children }) => {

    const products = [
        {id:1 , title:"Vestido De Paracaídas Con Lazo En La Cintura", Image: "https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P4050-500x750.jpg", category:"vestidos", price:"20.000" ,inStock:([10]) },
        {id:2, Image:"https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P3518-500x750.jpg", title:"Vestido De Vacaciones - Patrulla", category:"vestidos",  price:"30.000" },
        {id:3, Image:"https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P4353-500x750.jpg", title:"Un Vestido Informal", category:"vestidos" , price:"10.000"},
        {id:4, Image:"https://imagenes.elpais.com/resizer/gmYm28EfIbdmOZHo2xNRgvx3YH8=/1200x0/filters:focal(209x290:219x300)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/2GOIWHMMHNFUNGKRSUACWF2YLI.png", title:"Mini Bolsa De Hombro Transversal Para Celulares + Ropa", category:"combos",  price:"25.000"},
      ];
      
      const [state, dispatch] = useReducer (cartReducer, {
        products: products,
        cart: [],
      });

  return (
    <Cart.Provider value={{ state, dispatch}}>{children}</Cart.Provider>
  )
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}