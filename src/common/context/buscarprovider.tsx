import React, { createContext, useContext, useState } from 'react'

//definimo el tipo de datos o los datos que se compartiran a los componentes hijos

interface Searchcontexttype {
    busqueda: string;
    actualizarbusqueda: (busqueda: string) => void;
}

export const Searchcontext = createContext<Searchcontexttype | undefined>(undefined);

interface todosproviderprops {
    children: React.ReactNode;
}

const Buscarprovider = ({children}: todosproviderprops) => {
    
    const [busqueda, setBusqueda] = useState("");

    const actualizarbusqueda = (busqueda: string) => {
        setBusqueda(busqueda);
      };
  
    
    //definimos el objeto que se va a compartir
     const contexto: Searchcontexttype ={
       busqueda,
       actualizarbusqueda
     }
     //exportamos para otro componente
  return <Searchcontext value={contexto}>{children}</Searchcontext>
  
}

export default Buscarprovider

//custom hook es un metodo que contiene hooks de react 
//en este caso nos permite reutilizar el codigo
export const useSearch = () =>{
     const context = useContext(Searchcontext)
     if(!context){
        throw new Error ("usesearch debe de estar dentro de un Cardprovider")
     }
     return context;
}
