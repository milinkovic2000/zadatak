import React from 'react'

export default function ListItem({item, deleteTaskk}) {
  
  const deleteTask = () => deleteTaskk(item)

  return (
    <div className='list-div'>
        <h4>Naziv: {item.naziv}</h4>
        <div>Rok: {item.rok}</div>
        <div>Opis: {item.opis}</div>
        <div>prioritet: {item.prioritet}</div>
        <button onClick={deleteTask}>Izbrisi!</button>
    </div>    
  )
}
