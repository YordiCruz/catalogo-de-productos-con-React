import MainLayout from '@/common/components/MainLayout';
import { useCard } from '@/modules/compras/context/Cardpro';
import Cardproducto from '@/modules/productos/components/cardproducto'
import { Productotype } from '@/modules/productos/types/productotypes'
import { Box, Button, Pagination, Stack, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

 {/**limite = 10
         * pagina --> skip
         * 1 -> 0
         * 2 -> 10
         * 3 -> 20
         * operacion
         * skip = (pagina - 1) * limite
         * 
         * operacion
         * pagina = (skip / limite)
         */}
//vamos a  mandar un id del producto
// y para eso se crea una carpeta con el nombre entre corchetes [nombredecarpeta]
//de esa manera mandamos el id del producto
//localhost:3000/productos
const default_limit = 10;
const default_page = 1;

const getskip = (page: number) => (page - 1) * default_limit;
const total_pages = (total: number) => Math.ceil(total / default_limit);
const Paginaproductos = () => {
const [producto, setProducto] = useState<Productotype[]>([]);

const [loading, setLoading] = useState(false);
const [busqueda, setBusqueda] = useState("");
const [pagina, setPagina] = useState(default_page);
const [totalpagina, setTotal] = useState(0);

const route = useRouter();

const {agregarProducto} = useCard();

useEffect(()=>{

    setLoading(true);
    const skip = getskip(pagina);
  //el router.query nos permite acceder a los query parametros que estan en la routa y los datos enviados en ella
  //trabaja con la ruta
    fetch(`https://dummyjson.com/products/search?q=${busqueda}&limit=${default_limit}&skip=${skip}`)
.then(res => res.json())
.then((data) =>{setProducto(data.products);
  const total_pag = total_pages(data.total);
setTotal(total_pag);
}) //en caso de exito se ejecuta

.catch((error) =>{console.log(error);

}) //en caso de error
.finally(() =>{
    setLoading(false)});//se ejecuta en ambos casos
},[pagina, busqueda]); //skip depende de la pagina 

  return (
    

     <MainLayout titulo="Productos" >

     <Box sx={{marginBottom: 2}}>
     <Typography variant="h5" fontWeight={"bold"}>Resultados</Typography>

      <Typography variant='body2' color='text.secondary'> Cheak each product page for other buying options</Typography>

      </Box>

      
      <Stack spacing={2}>
       {/**barra de busqueda */}

      <TextField id="outlined-basic" label="Buscar" variant="outlined" size="small" 
      onChange={(e) => {
        const valor = e.target.value; 
        setBusqueda(valor);
        //necesitamos reiniciar el estado de la pagina debido a que realiza una busqueda desde la pgina 
        //en que se quedo de la anterior busqueda 
        setPagina(default_page);
      }}/>
    <Button>buscar
    </Button>
    <p>{busqueda}</p>
    {loading && <Typography>Cargando productos...</Typography>}

        {producto.map((producto ) =>  (
          <Cardproducto key={producto.id} producto={producto} 
          
          agregarProducto={() => {
            agregarProducto({
              ...producto,
              quantity: 1
            });
          }}

          onClick={ ()=>{
              route.push(`/productos/${producto.id}`);
              
            }} />
          ))}
    
    <Pagination count={totalpagina} variant="outlined" shape="rounded" onChange={(e, pagina) => {
      console.warn('Pagina', pagina);
      setPagina(pagina);
      
    }} />
       
      </Stack>
      </MainLayout>
  
    
  )
}

export default Paginaproductos
