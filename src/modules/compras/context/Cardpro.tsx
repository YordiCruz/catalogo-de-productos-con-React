import { ProductoCarrito } from '@/modules/productos/types/productotypes';
import React, { createContext, useContext, useState } from 'react'

//definimo el tipo de datos o los datos que se compartiran a los componentes hijos
interface Cardcontexttype {
   cartProducts: ProductoCarrito[]
   //metodos que se van a compartir
   agregarProducto: (producto: ProductoCarrito) => void
   eliminarProducto: (productoid: number) => void

}

export const Cardcontext = createContext<Cardcontexttype | undefined>(undefined);

interface todosproviderprops {
    children: React.ReactNode;
}

const Cardprovider = ({children}: todosproviderprops) => {
    
    const [cartProducts, setCartProducts] = useState<ProductoCarrito[]>([]);
    const agregarProducto = (producto: ProductoCarrito) => {
        setCartProducts([...cartProducts, producto]);
    }
    
    const eliminarProducto = (productoid: number) => {
        setCartProducts(cartProducts.filter(producto => producto.id !== productoid));
    }
    
    //definimos el objeto que se va a compartir
     const contexto: Cardcontexttype ={
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
