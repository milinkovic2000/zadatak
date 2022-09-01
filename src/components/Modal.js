import React from 'react'

const MODAL_STYLES = {
    position: 'fixed',
    top: '30%',
    left: '40%',
    transform: 'translate (-50%, -50%)',
    backgroundColor: '#add8e6',
    padding: '50px',
    zIndex: 1000
   
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top:0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex:1000
}

function Modal({open, children, onClose}) {
    if(!open) return null
  return (
    <>
    <div style={OVERLAY_STYLE}/>
    <div style={MODAL_STYLES}>
        
      {children}
      <div className='confirm-update'> <button className='btn-task-done' onClick={onClose}>Potvrdi izmene!</button></div>
     
    </div>
  
    </>
  )
}

export default Modal
