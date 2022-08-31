import React, {useState} from 'react';
import {Container} from 'react-bootstrap'
import ListItem from './components/ListItem';
import TaskForm from './components/TaskForm';
import './myStyle.css';

function App() {

    const[zadaci, setZadaci]= useState([])
    const addTask = zadatak => {
      setZadaci([...zadaci, zadatak])
    } 

   /* const taskList = tasks.map(
      task=>
      <div className='list-div'>
        <h4>Naziv: {task.naziv}</h4>
        <div>Rok: {task.rok}</div>
        <div>Opis: {task.opis}</div>
        <div>prioritet: {task.prioritet}</div>
        <button onClick={() => {}}>Izbrisi!</button>
      </div>
    )*/

  return (
        <div className='app'>
            <h2>Dodaj Zadatak</h2>
          <TaskForm addTaskss = {addTask}/>
          {
            zadaci.map(zadatak => <ListItem key={zadatak.id} item={zadatak}/>)
          }
         
        </div>
  );
}

export default App;
