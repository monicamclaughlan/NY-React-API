import React, {useState} from 'react'

import Categories from '../components/Categories';

import ReadingList from './ReadingList';

import Form from '../components/Form'


const Main = ({list, setList, addToReadingList}) => {

    const [searchResults, setSearchResults] = useState([])

    const handleChange = (e) => {
		e.preventDefault();
		setSearchResults(list.filter(r => r.title.toLowerCase().includes(e.target.value.toLowerCase()) || r.author.toLowerCase().includes(e.target.value.toLowerCase())))
	}
 
    let reviewList = searchResults.map((b,i) => {
        return (
            <div className='movie-card' key={i}>
                <div className="card-image"><img src={b.book_image} /></div>
                <h4>{b.rank}</h4>
                <p className="book-title">{b.title}</p>
                <p>By {b.author}</p>
                <p className="card-description">{b.description}</p>
                {b.weeks_on_list > 0 ? <p>Weeks on List {b.weeks_on_list}</p> : <></>}
                <button onClick={() => addToReadingList(b.book_image)}>Add to My Reading List</button>
                <a href={b.book_review_link} target="_blank">{b.book_review_link ? <button >See Book Review </button> : <p>No Review</p>}</a>
                
            </div>
        )
    })
    return (
        <div className="main-section">
            <div>
                <h3>find your next Great read</h3>
                <h4>Search the New York Times Best-Seller Lists by Genre</h4>
            </div>
            <Categories setList={setList} setSearchResults={setSearchResults}/>
            {list.length != 0 ? <Form handleChange={handleChange}/>:<></>}
            {reviewList}
        </div>
    )
}

export default Main
