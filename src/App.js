import React, {useState} from 'react';
import ListItem from './components/ListItem';
import TaskForm from './components/TaskForm';
import './components/myStyle.css';
import { ReactDOM } from 'react';

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
          <TaskForm addTaskss = {addTask}/>
          {zadaci == 0 && <div className='empty-list'><h2>Vaša lista zadataka je trenutno prazna!</h2></div>}
          {zadaci !=0 && <div className='empty-list'><h2>Lista zadataka:</h2></div>}

          {zadaci.map(zadatak => <ListItem key={zadatak.id} item={zadatak} deleteTaskk = {removeTask} zadaci={zadaci}/>)}
        </div>
  );
}

export default App;
