import React from 'react'

const Categories = ({setList}) => {
    const handleClick = async (str) => {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${str}.json?api-key=eNetSKoCDjuFllCX5kndIoGNknTPGYXj`)
        const data = await response.json()
        console.log(data.results.books)
        setList(data.results.books)
    }


    return (
        <div className="genres">
            <button onClick={() => handleClick('combined-print-fiction')}>Fiction</button>
            <button onClick={() => handleClick('combined-print-nonfiction')}>Non-Fiction</button>
            <button onClick={() => handleClick('crime-and-punishment')}>True Crime</button>
            <button onClick={() => handleClick('paperback-advice')}>Self Help</button>
        </div>
    )
}

export default Categories;