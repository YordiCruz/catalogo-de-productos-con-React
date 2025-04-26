import { Box, Card, CardActionArea, CardMedia, CardContent, Typography, Rating, Button } from '@mui/material'
import React from 'react'
import {  Productotype } from '../types/productotypes'


interface CardproductoProps {
  producto: Productotype;

  onClick: () => void;
  
}
const Cardproducto = ({producto, onClick}: CardproductoProps ) => {
  
  return (
    <div>
      <Box >
        {/* sx es como decir style */}
      <Card variant='outlined'>
      <CardActionArea component="div" sx={{display: "flex"}}>
        <CardMedia
          component="img"
          //height="140"
          image= {producto.thumbnail}
          alt="green iguana"
          onClick={onClick}
          sx={
            {
          width:"300px"

            }
          }
        />
        <CardContent sx={{flexGrow: 1}}>
          <Typography gutterBottom variant="h5" component="div" onClick={onClick}
          sx={{cursor: "pointer", '&:hover': { textDecoration: 'underline', color: 'primary.main' }, }}
          >
            {producto.title}
          </Typography>
         
         <Box display={"flex"} gap={1}>
              <Rating name="half-rating-read" 
                defaultValue={producto.rating}
                
                precision={0.5}
                
              //  casi todos los componentes tienen la propiedad size 
              size='small'
                  readOnly />
            <Typography variant='caption' color="info">{producto.rating} </Typography>

         </Box>
          <Typography gutterBottom variant="body2" color='text.secondary'>
            {producto.shippingInformation}
            </Typography>
            <Typography gutterBottom variant="body2" color="info">
            {producto.brand}
            </Typography>
            <Typography gutterBottom variant="h4" fontWeight={"bold"}>
            ${producto.price}
            </Typography>
            <Typography gutterBottom variant="body2" >
            {producto.warrantyInformation}
            </Typography>
           
        <Button variant='contained' onClick={() =>{
          //tambien podemos navegar con el .replace solo que este elimina el historial no puedes volver hacia atras
          //con el .push se puede volver hacia atras
          //se trbaja mejor con el yuyuids para que sea mas dificil de decifrar
        
        }}>Add to cart
        </Button>
        </CardContent>
      </CardActionArea>
    </Card>
      </Box>
    </div>
  )
}

export default Cardproducto
