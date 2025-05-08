import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Box, Card, CardMedia, IconButton, Skeleton, Typography } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

interface CategoriaType {
  slug: string;
  name: string;
}

interface Image {
  id: string;
  imgUrl: string;
}

const categoryImages: Image[] = [
  { id: "beauty", imgUrl: "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "fragrances", imgUrl: "https://images.unsplash.com/photo-1672848700906-2b8ca62639e4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  {
    id: "furniture",
    imgUrl: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
    },
    {
      id: "groceries",
      imgUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "home-decoration",
      imgUrl: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "kitchen-accessories",
      imgUrl: "https://images.unsplash.com/photo-1556909172-6ab63f18fd12?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "laptops",
      imgUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "mens-shirts",
      imgUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "mens-shoes",
      imgUrl: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "mens-watches",
      imgUrl: "https://images.unsplash.com/photo-1661030419603-1f69b322bd3d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "mobile-accessories",
      imgUrl: "https://images.unsplash.com/photo-1566793474285-2decf0fc182a?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "motorcycle",
      imgUrl: "https://images.unsplash.com/photo-1558981033-0f0309284409?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "skin-care",
      imgUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "smartphones",
      imgUrl: "https://images.unsplash.com/photo-1713470599405-3ca0ae1363f8?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "sports-accessories",
      imgUrl: "https://images.unsplash.com/photo-1615387084735-da47536882ab?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "sunglasses",
      imgUrl: "https://images.unsplash.com/photo-1611222777277-61319d63ca94?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "tablets",
      imgUrl: "https://images.unsplash.com/photo-1622531636820-5d727319e45d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "tops",
      imgUrl: "https://images.unsplash.com/photo-1603217192097-13c306522271?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "vehicle",
      imgUrl: "https://images.unsplash.com/photo-1642569135400-9e09b38dc200?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "womens-bags",
      imgUrl: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "womens-dresses",
      imgUrl: "https://images.unsplash.com/photo-1559034750-cdab70a66b8e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "womens-jewellery",
      imgUrl: "https://plus.unsplash.com/premium_photo-1681276169917-ae665526dd94?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "womens-shoes",
      imgUrl: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
      id: "womens-watches",
      imgUrl: "https://images.unsplash.com/photo-1657159810575-95dcfe021c5f?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  
];

const imagMap = categoryImages.reduce((acc, curr) => {
  acc[curr.id] = curr.imgUrl;
  return acc;
}, {} as Record<string, string>);

export const Categorias = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const router = useRouter();
  const [categorias, setCategorias] = useState<CategoriaType[]>([]);
  const [loading, setLoading] = useState(true);


 
  


  useEffect(() => {
    if (images.length === 0) return; // Protección si no hay imágenes
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then(res => res.json())
      .then((datos: CategoriaType[]) => {
        setCategorias(datos);
        
      })
      .catch(error => console.error('Error al cargar categorías', error))
      .finally(() => setLoading(false));
  }, []);
  
  if (images.length === 0) {
    return <Box sx={{  width: "100%", backgroundColor: "black", height: 140 }} />;
  }
  

  if (loading) {
    return (
      <Box sx={{xs: 20, md: 15, lg: 15, mt: {xs: 30, md: 50, xl: 50}, width: "50%",  ml: "25%"}} >
        <Skeleton  />
        <Skeleton animation="wave"  />
        <Skeleton animation={false} />
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'relative', pb: { xs: 20, md: 15 } }}>
     

      {/* Banner con Carrusel */}
      <Box sx={{ 
        width: "100%", 
        backgroundColor: "black", 
        position: 'relative',
        height: { xs: '400px', md: '500px', lg: '600px' },
        overflow: 'hidden'
      }}>
        

        <CardMedia 
          component="img"
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.5s ease'
          }}
          image={images[currentImageIndex].imgUrl}
          alt={`Banner ${currentImageIndex + 1}`}
        />
         <Typography variant="h4" sx={{ position: 'absolute', top: 30, color: 'white' , left: '50%', transform: 'translateX(-50%)' , fontWeight: 'bold' , textAlign: 'center', my: 3 }}>
        Categorías de Productos
      </Typography>

        {/* Controles del Carrusel */}
        <IconButton
          sx={{
            position: 'absolute',
            top: '50%',
            left: '16px',
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)'
            }
          }}
          onClick={() => setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
        >
          <ArrowBackIosNew fontSize='large' />
        </IconButton>

        <IconButton
          sx={{
            position: 'absolute',
            top: '50%',
            right: '16px',
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)'
            }
          }}
          onClick={() => setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
        >
          <ArrowForwardIosIcon fontSize='large' />
        </IconButton>
      </Box>

      <Box sx={{
        position: 'absolute',
        top: { xs: '60%', sm: '50%', md: '60%', lg: '65%' },
        left: 0,
        right: 0,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
        px: 2,
        //zIndex: 2
      }}>
        {categorias.map((cat) => {
          const imageUrl = imagMap[cat.slug];
          
          return (
            <Card 
              key={cat.slug}
              sx={{ 
                width: { xs: '90%', sm: '45%', md: '30%', lg: '23%' },
                maxWidth: 345,
                minHeight: 300,
                border: "1px solid #e0e0e0",
                borderRadius: "12px",
                boxShadow: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                  cursor: 'pointer'
                }
              }}
              onClick={() => router.push(`/categoriaproductos/${cat.slug}`)}
            >
              <Box sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {cat.name}
                </Typography>
                {imageUrl && (
                  <CardMedia
                    component="img"
                    src={imageUrl}
                    alt={cat.name}
                    sx={{ 

                      width: '100%', 
                      height: 200,
                      objectFit: 'contain',
                    }}
                    loading="lazy"
                  />
                )}
              </Box>
            </Card>
          );
        })}
      </Box>

    </Box>
  );
};

export default Categorias;