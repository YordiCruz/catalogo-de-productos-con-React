import React, { useEffect, useState } from 'react'
import Seccionresumen from './seccionres'
import Secciontarea from './secciontarea'
import Seccionres from './seccionres';
import Seccionta from './secciontarea';
//1ra forma
//los padres comparten a componentes hijos y los hijos no pueden compartir a los hijos, el flujo es de arriba hacia abajo
//la solucion seria llevar la logica que obtiene los datos que este lo mas arriba posible

//2da forma llamada provider nos permite crear createcontext() el cual engloba slos hijos y padres
export interface TodoType {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  }
  


const Paginatarea = () => {


  return (
    <div>
        <Seccionres/>
        <Seccionta/>
    </div>
  )
}

export default Paginatarea
