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


    const removeTask = zadatak => {
      setZadaci(zadaci.filter(zadatakItem => zadatakItem.id !== zadatak.id))
    }
  
  return (
        <div className='app'>
            <h2>Dodaj Zadatak</h2>
          <TaskForm addTaskss = {addTask}/>
          {
            zadaci.map(zadatak => <ListItem key={zadatak.id} item={zadatak} deleteTaskk = {removeTask}/>)
          }
         
        </div>
  );
}

export default App;
