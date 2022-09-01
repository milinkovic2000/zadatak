import { render } from '@testing-library/react'
import Modal from './Modal'
import React, { useState } from 'react'
import './myStyle.css';
import TaskForm from './TaskForm';

export default function ListItem({item, deleteTaskk, zadaci,updateTask}) {
  
  const deleteTask = () => deleteTaskk(item)

  

  const[zavrsen, setZavrsen]=useState(false)
  const [outputNaziv,setOutputNaziv] = useState(item.naziv)
  const [outputDatum,setOutputDatum] = useState(item.rok)
  const [outputOpis,setOutputOpis] = useState(item.opis)
  const [outputPrioritet,setPrioritet] = useState(item.prioritet)

  function editingList (id, naziv) {
    setIsOpen(false)
      const filtered = zadaci.filter(zadatak => {
         return zadatak.id === id;
      });
      
      filtered[0].naziv = outputNaziv
      filtered[0].rok = outputDatum  
      filtered[0].opis= outputOpis
      filtered[0].prioritet= outputPrioritet

  }


  const [isOpen,setIsOpen]=useState(false)
  
  return (
    <>
    <Modal open={isOpen} onClose={() => editingList(item.id) }>

    <div> Izmenite naziv: <input type="text" id="fname" name="fname" maxLength="100" defaultValue={item.naziv} onChange={
            event => {
              setOutputNaziv(event.target.value)
            }

        }></input></div>

<div className='input'>Unesite rok: <input type="date"  min="2022-09-01" onChange={
            event => {
              setOutputDatum(event.target.value)
            }
        }></input></div>

<div className='input'>Unesite opis: <textarea maxLength="100" id="w3review" name="w3review" rows="2" cols="20" onChange={
            event => {
                setOutputOpis(event.target.value)
            }
        }></textarea></div>

<div className='input'>
            <select onChange={
            event => {
              setPrioritet(event.target.value)
            }
        }>
            <option>Izaberite prioritet</option>
            <option>Nizak</option>
            <option>Srednji</option>
            <option>Visok</option>
            </select>
        </div>
    </Modal>

    <div className='zadaci'>
        <div className='zad'>
        <div className='list-div' onClick={()=> setIsOpen(true)}>
          <h4>Naziv: {item.naziv}</h4>
          <div>Rok: {item.rok}</div>
          <div>Opis: {item.opis}</div>
          <div>prioritet: {item.prioritet}</div>
          {zavrsen && <div className='ended'>Zadatak je završen!</div>}
      </div>
        <div className='task-buttons'>
          <button className='btn-delete' onClick={deleteTask}>Izbriši!</button> 
          <button className='btn-task-done' onClick={()=> setZavrsen(!zavrsen)}>Završi zadatak!</button>
        </div>

        
      
  </div>
    </div>
    </>
    
  )
}
