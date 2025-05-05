import { AppBar, Avatar, Badge, Box, Button, IconButton, Toolbar } from '@mui/material';
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
    <Box sx={{ height: "64px", flexGrow: 1, position: "sticky", top: 0, zIndex: 1200, width: "100%" }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "#a9abe1", gap: 2 }}>
          {/* Logo con Link */}
        
          <Link href="/" passHref legacyBehavior>
            <Button 
              variant="text"
              component="a"
              sx={{ fontWeight: "bold"
                ,"&:hover": { cursor: "pointer", border: "2px solid white" },
                transition: "border-color 0.3s ease-in-out",
                //backgroundColor:"white"
               }}
            >
             
            <Avatar 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/log.png`}
              alt="Logo"
              variant="rounded"
              sx={{ 
               
                width: 40, 
                height: 40,
                
              }}
            />

            </Button>
          </Link>
          

          {/* Botón de Productos */}
          <Link href="/productos" passHref legacyBehavior>
            <Button 
              variant="text"
              component="a"
              sx={{ 
                fontWeight: "bold",
                "&:hover": { border: "2px solid white" },
                color:"white"
              }}
            >
              Productos
            </Button>
          </Link>

          {/* Botones de navegación (reemplazando Typography) */}
          <Link href="/news" passHref legacyBehavior>
            <Button
              component="a"
              color="inherit"
              sx={{ 
                fontWeight: "bold",
                "&:hover": { border: "2px solid white" }
              }}
            >
              News
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
            sx={{ ml: 2 }}
          >
            <Badge badgeContent={totalitems} color="success">
              <ShoppingCartIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;