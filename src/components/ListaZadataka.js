import React from 'react';
import './myStyle.css';
import { useState } from 'react';

function ListaZadataka() {
    const zadaci = [
        {
            id: 1,
            naziv: 'Zadatak1',
            rok: '1.9.2022',
            opis: 'Opis prvog zadatka',
            prioritet: 'Nizak'
        },
        {
            id: 2,
            naziv: 'Zadatak2',
            eok: '4.9.2022',
            opis: 'Opis drugog zadatka',
            prioritet: 'Srednji'
        },
        {
            id: 3,
            naziv: 'Zadatak3',
            rok: '12.9.2022',
            opis: 'Opis treceg zadatka',
            prioritet: 'Visok'
        }
        
    ]

    const [zadatak, setZadatak] = useState(zadaci)

    const izbrisiZadatak= (id) => {
        const newData = zadatak.filter((zad) => zad.id!== id)
        console.log(newData)
        setZadatak(newData)
    }


    const listaZadataka = zadatak.map(zadatak  => 
        <div key={zadatak.id} className='primary'>
            <h2>{zadatak.naziv}</h2>
            <p>Rok: {zadatak.rok}</p>
            <p>Opis: {zadatak.opis}</p>
            <p>Prioritet: {zadatak.prioritet}</p>
            <button onClick={() => izbrisiZadatak(zadatak.id)}>Izbriši!</button>
        </div>)
  return (
    <div>
      {
        listaZadataka
      }
    </div>
  )
}

export default ListaZadataka
