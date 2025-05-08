import MainLayout from '@/common/components/MainLayout';
import { useCard } from '@/modules/compras/context/Cardpro';
import { Productotype } from '@/modules/productos/types/productotypes';
import { Box, Button, Card, CardContent, CardMedia, Container, Divider, Grid, MenuItem, Rating, Select, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Paginadetalleproducto = () => {
  const { agregarProducto } = useCard();	
  const router = useRouter();
  const [producto, setProducto] = useState<Productotype | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [imagenActiva, setImagenActiva] = useState<string>(
    producto?.thumbnail ?? ""  
  );

  const [cantidad, setCantidad] = useState(1);

  
  useEffect(() => {
    // Verificar si router está listo y si tenemos idProducto
    if (!router.isReady || !router.query.idproducto) return;
    
    const idProducto = router.query.idproducto;
    setLoading(true);
    setError(null);
    
    fetch(`https://dummyjson.com/products/${idProducto}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      return res.json();
    })
    .then(datos => {
      setProducto(datos);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
      console.error('Fetch error:', err);
    });
  }, [router.isReady, router.query.idproducto]);
  
  if (loading) {
    return (
      <Container maxWidth="xl">
              <Typography>Cargando producto...</Typography>
          </Container>
      );
    }
    
    if (error) {
      return (
        <Container maxWidth="xl">
              <Typography color="error">Error: {error}</Typography>
          </Container>
      );
    }
    
    if (!producto) {
      return (
        <Container maxWidth="xl">
              <Typography>No se encontró el producto</Typography>
          </Container>
      );
    }
    
    return (
      <MainLayout titulo="detalle del producto" >
        {loading && <Typography>Cargando producto...</Typography>}
      {/* para evitar el signo ? se usa el operador ternario con el && con eso indicamos que si producto es diferente de null */}
      {producto && (
         <Grid container sx={{mt: "30px"}}> 
         <Grid size={1}>Imagenes
        {producto.images.map((imagen, index) => (
          <CardMedia
          
            key={index}
            component="img"
            image= {imagen}
            alt={`Imagen ${index + 1} del producto`}
    sx={{
      width: "50px",
      ml: 8,
      mb: 2, // Espacio entre imágenes
      border: imagenActiva === imagen ? "2px solid #1976d2" : "none",
      "&:hover": { 
        cursor: "pointer",
        border: "2px solid #1976d2",
        opacity: 0.9
      }
    }}
    onMouseEnter={() => setImagenActiva(imagen)}
          />
        ))}

         </Grid>
         <Grid size={{xs: 12, md: 6, lg: 3}}> 
          <CardMedia
                   component="img"
                   //height="140"
                   //image= {producto?.thumbnail} // para evitar el signo ?
                   image={imagenActiva || producto.thumbnail}
                   alt="green iguana"
                   sx={
                     {
                   width:"100%"
         
                     }}
                 />
                 </Grid>
         <Grid size={{xs: 12, md: 6, lg: 3}}>   
                
                 <CardContent sx={{flexGrow: 1}}>
                   <Typography gutterBottom variant="h5" component="div">
                       {producto.title} - {producto.description}
                   </Typography>
                  
                  <Box display={"flex"} gap={1}>
                       <Rating 
                       name="half-rating-read" 
                         defaultValue={producto.rating}
                         
                         precision={0.5}
                         
                       //  casi todos los componentes tienen la propiedad size 
                       size='small'
                           readOnly 
                           />
                     <Typography variant='caption' color="info">{producto.rating}</Typography>
         
                  </Box>
                   <Typography gutterBottom variant="body2" color='text.secondary'>
                       {producto.shippingInformation}
                     </Typography>
                     <Typography gutterBottom variant="body2" color="info">
                     {producto.brand}
                     </Typography>
                     <Divider/>
                     <Typography gutterBottom variant="h4" fontWeight={"bold"}>
                      {producto.price}
                     </Typography>
                     <Typography gutterBottom variant="body2" color='text.secondary'>
                      {producto.warrantyInformation}
                     </Typography>
                    <Grid container>
                     <Grid size={6}>
                       <Typography variant='body2' fontWeight={"bold"}>
                        Height
                        </Typography>
                     </Grid>
                     <Grid size={6}>
                       <Typography variant='body2'>
                        {producto.dimensions.height}
                        </Typography>
                     </Grid>
                      <Grid size={6}>
                        <Typography variant='body2' fontWeight={"bold"}>
                          Width
                          </Typography>
                      </Grid>
                      <Grid size={6}>
                        <Typography variant='body2'>
                          {producto.dimensions.width}
                          </Typography>
                    </Grid>
 
                    </Grid>
                    <Divider/>
                    <Box>
                     <Typography variant='subtitle1' fontWeight={"bold"}>
                       About this item
                     </Typography>
                     {producto.reviews.map((review, index) => (
                      
                         <Typography   key={index} variant='body2' component={"li"}>
                         {review.comment}
                       </Typography>
                      
                      ))}
                   
                    </Box>
 
                 </CardContent>
             </Grid>


         <Grid size={{xs: 12, md: 6, lg: 3}}>
           <Card variant='outlined'>
             {/* cardcontent lo unico que hace es dar espaciado a todo el contenido*/}
             <CardContent>
               {/* stack sirve para agregar espaciado */}
               <Stack spacing={1}>
                     <Typography gutterBottom variant="h4" fontWeight={"bold"}>
                     {producto.price}
                     </Typography>
                     <Typography gutterBottom variant="body2" color='text.secondary'>
                     {producto.warrantyInformation}
                     </Typography>
                     <Typography  variant="body2"color='success' fontWeight={"bold"} >
                     {producto.availabilityStatus}
                     </Typography>
                     <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    fullWidth
                    value={cantidad}
                    startAdornment={
                      <Typography variant="body2" mr={1}>
                        Quantity:
                      </Typography>
                    }
                    onChange={(e) => {
                      const cantidad = e.target.value as number;
                      setCantidad(cantidad);
                    }}
                  >
                    {Array.from({ length: 100 }, (_, index) => (
                      <MenuItem key={index} value={index + 1}>
                        {index + 1}
                      </MenuItem>
                    ))}
                  </Select>

                     
                     <Button fullWidth variant='contained' onClick={() => {
                       agregarProducto({
                        ...producto, 
                        quantity: cantidad
                      })	;
                     }} >
                      Add to cart</Button>
                     <Button fullWidth variant='contained'>Buy now</Button>
                  
                   </Stack>
             </CardContent>
 
           </Card>
         </Grid>
 
       </Grid>
      )}


     
      </MainLayout>

  
  )

}

export default Paginadetalleproducto;
