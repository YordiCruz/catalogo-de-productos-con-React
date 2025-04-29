import React, { useEffect, useState } from 'react';

interface CategoriaType {
  slug: string;
  name: string;
  url: string;
}

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
        gap: "20px",
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
            <p><strong>Slug:</strong> {cat.slug}</p>
            <a href={cat.url} >
              Ver productos ➡️
            </a>
            <img src={cat.url} alt={cat.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;
