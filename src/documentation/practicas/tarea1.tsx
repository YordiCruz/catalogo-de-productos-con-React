import React, { useEffect, useState } from "react";
// {
//     "id": 1,
//     "body": "This is some awesome thinking!",
//     "postId": 242,
//     "likes": 3,
//     "user": {
//       "id": 105,
//       "username": "emmac",
//       "fullName": "Emma Wilson"
//  }
interface ComentType {
  id: number;
  body: string;
  postId: number
  likes: number
  user: {
    id: number
    username: string
    fullName: string
  }
}

const Tarea1 = () => {
  const [comen, setcomen] = useState<ComentType[]>([]);

  useEffect(() => {
    console.warn("Obteniendo comments...");
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((datos) => {
        setcomen(datos.comments);
      });
  }, []);

  return (
    <div>
      <h1>Comentarios:
      </h1>
      <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  }}
>
      {comen.map((com) => {
        return (
          <div
            key={com.id}
            style={{
                display:"inline-block",
              border: "1px solid black",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
              margin: "10px",
              padding: "10px",
              width: "100%",
              maxWidth: "400px",
              flex: "1 1 330px",
              backgroundColor: "#e3fcfb"   
            }}
          >
             <p>
              <strong>Id_User: {com.user.id}</strong> 
            </p>

            <div
                style={
                    {
                        display: "flex",
                        flexWrap: "wrap",           
                        gap: "0.5rem",             
                       alignItems: "center",      
                    }
                }
            >
                
               
                    <p>🧍‍♀️<strong>{com.user.fullName} </strong></p>
                    <a style={{
                      marginTop: "0.1rem",
                      paddingLeft: "1px",
                      whiteSpace: "nowrap",    // 👉 Para que no se rompa el @nombre en varias líneas
                    }} href=""> (@{com.user.username})</a>
                    <p style={{paddingLeft: "0.5px"
                    }}>💬 en post #<strong> {com.postId}</strong></p>
            </div>
            
                    <p>
                     <strong>Comentario ID: {com.id}</strong></p>
                    <p>🗨️ {`"${com.body}"`}</p>

                    <div style={{
                      display: "flex",
                    }}>
                    <p>❤️{com.likes} Me gusta </p>
                    <p style={{ paddingLeft: "1rem"
                    }}  >💬 Responder</p>
                    </div>
                   
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Tarea1;
