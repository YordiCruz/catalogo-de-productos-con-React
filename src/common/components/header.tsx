import { AppBar, Avatar, Box, CardMedia, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew'; // ✅
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
interface ImageItem {
  id: number;
  imgUrl: string;
}


const images: ImageItem[] = [
  {
    id: 1,
    imgUrl: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    imgUrl: "https://images.unsplash.com/photo-1703505841379-2f863b201212?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"        
  },
  {
    id: 3,
    imgUrl: "https://images.unsplash.com/photo-1481207801830-97f0f9a1337e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];




export const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    if (images.length === 0) return; // Protección si no hay imágenes
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return <Box sx={{  width: "100%", backgroundColor: "black", height: 140 }} />;
  }

  return (
   
<>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
  

        <Toolbar sx={{backgroundColor: "#131921"}}>
        <Avatar 
    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/log.png`}
    alt="Logo" 
    variant="rounded" // o "rounded" o "circular"

    sx={{ 
      ":hover": {
        cursor: "pointer"

      },
      width: 40, 
      height: 40,
      mr: 2 // Margen derecho
    }}
  />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box>
      Barra de busqueda
    </Box>
    

    <IconButton 
    size='large'
    edge="start"
    color="inherit"
    aria-label="menu"
    sx={{ mr: 2 }}
    >
  <ShoppingCartIcon sx={{color: "white"}}/>

    </IconButton>
        </Toolbar>
      </AppBar>
    </Box>

<Box sx={{ flexGrow: 1}}>
  
</Box>
    <Box  sx={{ width: "100%", backgroundColor: "black" }}>
      <CardMedia 
        component="img"
        sx={{ 
          height: { xs: 640, md: 640 }, // Responsive height
          mt: { xs: 16.25, md: 7.5 },
          objectFit: 'cover',
          width: '100%'
        }}
        image={images[currentImageIndex].imgUrl} 
        alt={`Imagen ${currentImageIndex + 1}`}
        
      />

<IconButton
  sx={{
    position: 'absolute',
    top: '15.60%',
    left: '8px',
    borderRadius: '1px',
    color: 'white',
    width: 64,  // Tamaño más adecuado para el área de clic
    height: '300px',
    '&:active': {
      border: '2px solid blue',
      //backgroundColor: 'rgba(0, 0, 0, 0.7)' // Oscurecer al hacer clic
      color: 'white'

    },
    //'&:hover': {
      //backgroundColor: 'rgba(0, 0, 0, 0.6)' // Efecto hover adicional
    //}

    
  }}

  onClick={() => setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)}
>
  <ArrowBackIosNew fontSize='large'  />
</IconButton>

<IconButton
  sx={{
    position: 'absolute',
    top: '15.60%',
    right: '8px',
    borderRadius: '1px',
    color: 'white',
    width: 64,  // Tamaño más adecuado para el área de clic
    height: '300px',
    '&:active': {
      border: '2px solid blue',
      //backgroundColor: 'rgba(0, 0, 0, 0.7)' // Oscurecer al hacer clic
      color: 'white'
      
    },
    //'&:hover': {
      //backgroundColor: 'rgba(0, 0, 0, 0.6)' // Efecto hover adicional
    //}
  }}

  onClick={() => setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1)}

>
<ArrowForwardIosIcon fontSize='large'  />

</IconButton>

    </Box>
    </>
  );
};

export default Header;