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
            <button onClick={() => handleClick('graphic-books-and-manga')}>Manga</button>
            <button onClick={() => handleClick('picture-books')}>Children's</button>
            <button onClick={() => handleClick('young-adult-paperback')}>Young Adult</button>
            <button onClick={() => handleClick('animals')}>Animals</button>
            <button onClick={() => handleClick('business-books')}>Business</button>
            <button onClick={() => handleClick('culture')}>Culture</button>
            <button onClick={() => handleClick('education')}>Education</button>
            <button onClick={() => handleClick('espionage')}>Spy Novels</button>
            <button onClick={() => handleClick('fashion-manners-and-customs')}>Fashion</button>
            <button onClick={() => handleClick('food-and-fitness')}>Food</button>
            <button onClick={() => handleClick('travel')}>Travel</button>
            <button onClick={() => handleClick('sports')}>Sports</button>
            <button onClick={() => handleClick('religion-spirituality-and-faith')}>Religion</button>
            <button onClick={() => handleClick('hardcover-political-books')}>Politics</button>
        </div>
    )
}

export default Categories;