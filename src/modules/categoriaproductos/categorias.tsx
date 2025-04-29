import React, { useEffect, useState } from 'react';

interface CategoriaType {
  slug: string;
  name: string;
  url: string;
}
interface Image {
  id: string;
  imgUrl: string;
}

const imag: Image[] =[
  {
  id: "beauty",
  imgUrl: "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
  id: "fragrances",
  imgUrl: "https://images.unsplash.com/photo-1672848700906-2b8ca62639e4?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  {
  id: "furniture",
  imgUrl: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    id: "groceries",
    imgUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "home-decoration",
    imgUrl: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "kitchen-accessories",
    imgUrl: "https://images.unsplash.com/photo-1556909172-6ab63f18fd12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "laptops",
    imgUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "mens-shirts",
    imgUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "mens-shoes",
    imgUrl: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "mens-watches",
    imgUrl: "https://images.unsplash.com/photo-1661030419603-1f69b322bd3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "mobile-accessories",
    imgUrl: "https://images.unsplash.com/photo-1566793474285-2decf0fc182a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "motorcycle",
    imgUrl: "https://images.unsplash.com/photo-1558981033-0f0309284409?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "skin-care",
    imgUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "smartphones",
    imgUrl: "https://images.unsplash.com/photo-1713470599405-3ca0ae1363f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "sports-accessories",
    imgUrl: "https://images.unsplash.com/photo-1615387084735-da47536882ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "sunglasses",
    imgUrl: "https://images.unsplash.com/photo-1611222777277-61319d63ca94?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "tablets",
    imgUrl: "https://images.unsplash.com/photo-1622531636820-5d727319e45d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "tops",
    imgUrl: "https://images.unsplash.com/photo-1603217192097-13c306522271?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "vehicle",
    imgUrl: "https://images.unsplash.com/photo-1642569135400-9e09b38dc200?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "womens-bags",
    imgUrl: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "womens-dresses",
    imgUrl: "https://images.unsplash.com/photo-1559034750-cdab70a66b8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "womens-jewellery",
    imgUrl: "https://plus.unsplash.com/premium_photo-1681276169917-ae665526dd94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "womens-shoes",
    imgUrl: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  {
    id: "womens-watches",
    imgUrl: "https://images.unsplash.com/photo-1657159810575-95dcfe021c5f?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }



]


export const Categorias = () => {
  const [categorias, setCategorias] = useState<CategoriaType[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((datos: CategoriaType[]) => {
        setCategorias(datos);
        
      })
      .catch(error => console.error('Error al cargar categorías', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando categorías...</div>;

  return (
    <div>
      <h1>Categorías de Productos:</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5px",
      }}>
       
        {categorias.map((cat, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
              margin: "10px",
              padding: "10px",
              width: "100%",
              maxWidth: "400px",
              flex: "1 1 330px",
              backgroundColor: "#e3fcfb",
              textAlign: "center",
            }}
          >
            <h3>{cat.name}</h3>
            
           
            {imag.map((img, index) => (
             
              img.id === cat.slug ? (
                <div key={index}>
                  <img src={img.imgUrl} alt={cat.name} style={{ width: "250px", height: "250px" }} />
                </div>
              ) : null
            ))}
             <a href={cat.url} >
              Ver productos ➡️
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;
