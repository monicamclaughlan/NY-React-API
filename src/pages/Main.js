import React from 'react'

import Categories from '../components/Categories';

import ReadingList from './ReadingList';


const Main = ({list, setList, addToReadingList}) => {
 
    let reviewList = list.map((b,i) => {
        return (
            <div className='movie-card' key={i}>
                <div className="card-image"><img src={b.book_image} /></div>
                <h4>{b.rank}</h4>
                <p className="book-title">{b.title}</p>
                <p>By {b.author}</p>
                <p className="card-description">{b.description}</p>
                <button onClick={() => addToReadingList(b.book_image)}>Add to My Reading List</button>
                <a href={b.book_review_link} target="_blank">{b.book_review_link ? <button >See Book Review </button> : <p>No Review</p>}</a>
                
            </div>
        )
    })
    return (
        <div className="main-section">
            <h3>find your next Great read</h3>
            <Categories setList={setList}/>
            {reviewList}
        </div>
    )
}

export default Main
