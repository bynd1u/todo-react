import React from 'react'

export const SubmitForm = () => {
  return (
    <div className='form'>
        <form>
            <input className='input' placeholder='Add Task' />
            <button className='add-button' type='sumbit'>Add</button>
        </form>
    </div>
  )
}
