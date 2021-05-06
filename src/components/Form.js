import React from 'react'

const Form = ({handleChange}) => {


    return (
        <form>
            <input
            onChange={handleChange}
            type="text"
            placeholder="Search by Title/Author"
            />
            
        </form>
    )
}

export default Form
