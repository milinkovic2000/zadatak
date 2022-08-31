import React,{useState} from 'react'

const TaskForm = ({addTaskss}) => {
    const[naziv, setNaziv] = useState('')
    const[rok, setRok] = useState('')
    const[opis,setOpis]=useState('')
    const[prioritet,setPrioritet]=useState('')
    
    const addTask = () =>{
    if(naziv =="" || rok =="" || opis =="" || prioritet==""){
        alert("Niste popunili sva polja")
        
    }else{
        addTaskss({
            id: (new Date).getTime(), naziv, rok,opis,prioritet
            })
        setNaziv('');  
        setRok('');  
        setOpis('');  
        setPrioritet('');  
    }    
        
    } 

  return (
    <div>
        <div> Unesite naziv: <input maxLength="100" value={naziv} onChange={
            event => {
                setNaziv(event.target.value)
            }
        }></input></div>
        <div>Unesite rok: <input value={rok} type="date" id="start" name="trip-start"  min="2022-08-31" onChange={
            event => {
                setRok(event.target.value)
            }
        }></input></div>
        <div>Unesite opis: <textarea maxLength="100" value={opis}id="w3review" name="w3review" rows="2" cols="20" onChange={
            event => {
                setOpis(event.target.value)
            }
        }></textarea></div>
        <div>
            <select value={prioritet} name="cars" id="cars" form="carform" onChange={
            event => {
                setPrioritet(event.target.value)
            }
        }>
            <option>Nizak</option>
            <option>Srednji</option>
            <option>Visok</option>
            </select>
        </div>
        <button onClick={addTask}>Dodaj!</button>
    </div>
  )
}

export default TaskForm
