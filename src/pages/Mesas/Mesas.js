import React from 'react';
import './Mesas.css';
import GridMesas from './GridMesas/GridMesas';

export default function Mesas() {
   return (
      <>
         <h1>Mesas</h1>
         <button>+ Add Mesa</button>

         <GridMesas></GridMesas>
      </>
   );
}