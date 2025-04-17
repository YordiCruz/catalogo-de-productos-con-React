import { useRouter } from 'next/router';
import React from 'react'

const Paginadetalleproducto = () => {
    const router = useRouter();
  const  idProducto  = router.query.idproducto;
  
    return (
    <div>
      paginadetalleproducto {idProducto}
    </div>
  )
}

export default Paginadetalleproducto
