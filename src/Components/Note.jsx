import React from 'react'

export const Note = ({id, text, editHandler}) => {
  return (
    <div className='note'>
        <div className='note-body'>
            {text}
        </div>
        <div className='note_footer' style={{justifyContent :"flex-end"}}>
        <button className="note_save" > Delete
        </button> 
        <button className="note_save" onClick={() => editHandler(id, text)} >Edit
        </button>
        </div>
    </div>
  )
}
export default Note