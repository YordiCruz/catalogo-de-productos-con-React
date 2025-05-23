import { Box, IconButton, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { ProductoCarrito } from '../types/productotypes'
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete';
interface Props{
    producto: ProductoCarrito
    onDelete: () => void
    onUpdatequantity: (quantity: number) => void
}
const CardproductoCarrito = ({producto, onDelete, onUpdatequantity}: Props) => {
  return (
    //si queremos cambiar el nombre seleccionamos un atributo y crtl + h y cambiamos el nombre en la segunda casilla donde el replace
    <Box key={producto.id} textAlign={"center"}>
        {/* si queremos usar el image no se puede usar cualquier link de imagen y si queremos usarlo debemos registrar el link en el next.config   */}
        <Image
            src={producto.thumbnail}
            alt={producto.title}
            width={100}
            height={100}
        />
        <Typography textAlign={"center"} variant='body2' fontWeight={"bold"}>{producto.price}</Typography>
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            m={2}
        >
            <Select
              id='quantity'
              size='small'
              //para el quantity que es la cantidad debemos de crearlo en el tipado de los datos que se ovtuvo en el archivo
              //productotypes
              value={producto.quantity}
              onChange={(e) => {
                const cantidad = e.target.value as number;
                onUpdatequantity(cantidad);                
              }}
              sx={{borderRadius: 2, height:32}}
              MenuProps={{
                PaperProps:{
                    style:{
                        maxHeight:280,
                    },
                },
              }}
            >
              {
                Array.from({length: 100}, (_,index) => (
                    <MenuItem key={index} value={index + 1}>
                        {index + 1}
                    </MenuItem>
                )
                )
              }
              

            </Select>

            <IconButton onClick={(onDelete) 
            }>
                <DeleteIcon  />
            </IconButton>
    
        </Box>
      
    </Box>
  )
}

export default CardproductoCarrito
