import React from 'react'
// import { isCompositeComponent } from 'react-dom/test-utils';
import Categories from '../components/Categories';
import {Link} from 'react-router-dom'
import ReadingList from './ReadingList';


const Main = ({list, setList, setReview, addToReadingList}) => {

        const handleClick = async (title) => { 
            const response = await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${title}&api-key=eNetSKoCDjuFllCX5kndIoGNknTPGYXj`)
            console.log(response)
            // if (!response.summary) {
            //     console.log("Hey sorry pal")
            // } else {
                const data = await response.json()
                console.log(data)
                console.log(data.results[0].summary)
                setReview(data.results[0].summary)   
            // }
        }

     
    let reviewList = list.map((b,i) => {
        return (
            <div className='movie-card' key={i}>
                <div><img src={b.book_image} /></div>
                <h4>{b.rank}</h4>
                <p className="book-title">{b.title}</p>
                <p>By {b.author}</p>
                <p>{b.description}</p>
                <button onClick={() => addToReadingList(b.book_image)}>Add to My Reading List</button>
                <Link to="/Reviews">{b.book_review_link ? <button onClick={() => handleClick(b.title)}>See Book Review </button> : <p>No Review</p> }</Link>
                
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
