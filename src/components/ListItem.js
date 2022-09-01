import { render } from '@testing-library/react'
import { Modal } from 'bootstrap';
import React, { useState } from 'react'
import './myStyle.css';
import TaskForm from './TaskForm';

export default function ListItem({item, deleteTaskk, zadaci}) {
  
  const deleteTask = () => deleteTaskk(item)
  const[zavrsen, setZavrsen]=useState(false)
  const [inputNaziv,setInputNaziv] = useState("")
  const [outputNaziv,setOutputNaziv] = useState("")

  function editingList (id) {
      const filtered = zadaci.filter(zadatak => {
        return zadatak.id === id;
      });
      //filtrirano koji sam izabrao zadatak
      console.log(filtered[0].naziv)
      //setInput mi je ime tog elementa
      submit(filtered[0].naziv)
      
  }
  
function submit(filtered){
  setInputNaziv(filtered)
  console.log(inputNaziv)
}


  
  return (
    <div className='zadaci'>
        <div className='zad'>
        <div className='list-div' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=> editingList(item.id,item.naziv)}>
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

        
            
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Izmenite Zadatak</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
           <div> Izmenite naziv: <input type="text" id="fname" name="fname" maxLength="100" defaultValue={inputNaziv} onChange={
            event => {
              setOutputNaziv(event.target.value)
            }

        }></input></div>
           
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Prikazi zadatak</button>
            </div>
          </div>
        </div>
      </div>
  </div>
    </div>
  )
}
