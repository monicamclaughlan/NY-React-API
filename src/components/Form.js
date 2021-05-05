import React, {useState} from 'react'

const Form = ({handleChange}) => {
    // const [search, setSearch] = useState('')

    // const handleChange = (event) => { 
    //     console.log('handleChange - event', event.target.value)
    //     const name = event.target.value
    //     setSearch({ 
    //         name
    //     })
    //} 

    return (
        <form>
            <input
            onChange={handleChange}
            // value={search.title}
            type="text"
            placeholder="Search by Title/Author"
            />
            {/* <button
            onClick={(e) => props.handleSubmit(e,search.name)}
            >Submit</button> */}
        </form>
    )
}

export default Form
