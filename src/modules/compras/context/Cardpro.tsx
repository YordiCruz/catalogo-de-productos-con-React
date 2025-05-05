import { ProductoCarrito } from '@/modules/productos/types/productotypes';
import React, { createContext, useContext, useState } from 'react'

//definimo el tipo de datos o los datos que se compartiran a los componentes hijos
interface Cardcontexttype {
   cartProducts: ProductoCarrito[]
   //exponemos el precio total
   preciototal: string
   //metodos que se van a compartir
   agregarProducto: (producto: ProductoCarrito) => void
   eliminarProducto: (productoid: number) => void
    actualizarCantidad: (productoid: number, cantidad: number) => void
    totalitems: number
}

export const Cardcontext = createContext<Cardcontexttype | undefined>(undefined);

interface todosproviderprops {
    children: React.ReactNode;
}

const Cardprovider = ({children}: todosproviderprops) => {
    
    const [cartProducts, setCartProducts] = useState<ProductoCarrito[]>([]);

    const preciototal = cartProducts.reduce((total, cartProducts) => {
        return total + cartProducts.price * cartProducts.quantity
    }, 0);
        
    const totalitems = cartProducts.reduce((totalitems, cartProducts) => {
        return totalitems + cartProducts.quantity
    }, 0);

    const agregarProducto = (producto: ProductoCarrito) => {
       const existeproducto = cartProducts.find(
        (cartProducts) => cartProducts.id === producto.id
    );
    if(existeproducto){
       const listaactualizada = cartProducts.map((cartProducts) => {
            if(cartProducts.id === producto.id){
               return{
                   ...cartProducts,
                   quantity: cartProducts.quantity + producto.quantity
               }
            }
            return cartProducts
        })
        setCartProducts(listaactualizada);
    }else{
        setCartProducts([...cartProducts, producto]);
    }
       
    }
    
    const eliminarProducto = (productoid: number) => {
        const listafiltrada = cartProducts.filter(
            (producto) => producto.id !== productoid
        );  
        setCartProducts(listafiltrada);
    }

    const actualizarCantidad = (productoid: number, cantidad: number) => {
        const listaactualizada = cartProducts.map((cartProducts) => {
            if(cartProducts.id === productoid){
                return{
                    ...cartProducts,
                    quantity: cantidad
                }
            }
            return cartProducts;
        })
        setCartProducts(listaactualizada);
    }
    
    
    //definimos el objeto que se va a compartir
     const contexto: Cardcontexttype ={
        totalitems,
        actualizarCantidad,
        preciototal: preciototal.toFixed(2),
        cartProducts,
        agregarProducto,
        eliminarProducto
     }
     //exportamos para otro componente
  return <Cardcontext value={contexto}>{children}</Cardcontext>
  
}

export default Cardprovider

//custom hook es un metodo que contiene hooks de react 
//en este caso nos permite reutilizar el codigo
export const useCard = () =>{
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const context = useContext(Cardcontext)
     if(!context){
        throw new Error ("Usecard debe de estar dentro de un Cardprovider")
     }
     return context;
}
