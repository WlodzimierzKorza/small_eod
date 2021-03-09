import React from 'react'
import './style.scss'

const AddButton = ({ method }) => {
    return (
        <button onClick={method} className="bg-danger add-button">
            +
        </button>
    )
}

export default AddButton
