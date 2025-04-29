import React, { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'
import Head from 'next/head';
import { Box, Button, Container, Divider, Drawer, Typography } from '@mui/material';
import { useCard } from '@/modules/compras/context/Cardpro';
import CardproductoCarrito from '@/modules/productos/components/CardproductoCarrito';

const drawer_ancho = "140px";
 interface Props {
     children: ReactNode;
     titulo: string;
 }
const MainLayout = ({ children, titulo }: Props) => { 
    const {cartProducts} = useCard();
    const open = true;
    return (
        <div>
            <Box sx={{mr: open ? {drawer_ancho} : 0}}>

            <Head>
                <title>{titulo}</title>
                
            </Head>
            <Header/>
           <Container maxWidth="xl" sx={{ mt: 2}}>
            {children}
            </Container> 
            </Box>
            <Drawer  open={open} variant='persistent' anchor='right'
            sx={{
                //para manipular el tamaño del drawer debemos ingresar al componente  
                "& .MuiPaper-root":{
                    boxSizing: "border-box",
                    width: {drawer_ancho}
                }
            }}

            >
            <Box sx={{textAlign: "center", p: 1}}>
                <Typography variant='subtitle2'>Carrito</Typography>
                <Typography variant='subtitle1' fontWeight={"bold"} color='red'>$89.99</Typography>
                <Button fullWidth variant='outlined' >Add to cart</Button>
            </Box>
            <Divider/>
            <Box sx={{p: 2}}>
                {cartProducts.map((producto) => (
                    <CardproductoCarrito key={producto.id} producto={producto} />
                ))}                
            </Box>

            </Drawer>
            <Footer/>
        </div>
    );
}

export default MainLayout
