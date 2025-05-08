import { AppBar, Avatar, Badge, Box, Button, Grid, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCard } from '@/modules/compras/context/Cardpro';
import Searchbar from './Searchbar';
import { useSearch } from '../context/buscarprovider';
//import { useRouter } from 'next/router';
import Link from 'next/link'; // Importa Link

export const Header = () => {
  const {totalitems}=useCard();
  const {actualizarbusqueda} = useSearch();
 
  //const router = useRouter();


  return (
    <Grid sx={{ height: "64px", flexGrow: 1, position: "sticky", top: 0, zIndex: 1200, width: {xs: "100%", sm: "auto"} }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "#a9abe1", gap: 2 }}>
          {/* Logo con Link */}
        
          <Link href="/" passHref legacyBehavior>
            <Button 
              variant="text"
              component="a"
              sx={{ fontWeight: "bold"
                ,"&:hover": { cursor: "pointer", borderRadius: "10px", border: "2px solid white", backgroundColor: "#e3a9e2" },
                transition: "border-color 0.3s ease-in-out, background-color 0.3s ease-in-out",
                //backgroundColor:"white"
               }}
            >
             
            <Avatar 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/log.png`}
              alt="Logo"
              variant="rounded"
              sx={{ 
              
              }}
            />

            </Button>
          </Link>
          

          <Link href="/productos" passHref legacyBehavior>
            <Button 
              variant="text"
              component="a"
              sx={{ 
                fontWeight: "bold",
                "&:hover": { border: "2px solid white", borderRadius: "10px", backgroundColor: "#e3a9e2", color: "white" },
                color:"black",
                transition: "border-color 0.3s ease-in-out, background-color 0.3s ease-in-out",
              }}
            >
              Productos
            </Button>
          </Link>

      

          <Box sx={{ flexGrow: 1 }} /> {/* Espaciador flexible */}

          {/* Barra de búsqueda */}
          <Searchbar 
           onSearch={actualizarbusqueda} />


          {/* Icono del carrito */}
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="carrito"
            sx={{ ml: 2, "&:hover": { cursor: "pointer", borderRadius: "20px", border: "2px solid white", backgroundColor: "#e3a9e2" }, transition: "border-color 0.3s ease-in-out, background-color 0.3s ease-in-out" }}
            
          >
            <Badge badgeContent={totalitems} color="success" >
              <ShoppingCartIcon sx={{ color: "white"}} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;