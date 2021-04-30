import React from 'react'


const Main = ({list, setReview}) => {
    let reviewList = list.map((b,i) => {
        return (
            <div key={i}>
                <img src={b.book_image} />
                <h5>Rank: {b.rank}</h5>
                <h6>Title: {b.title}</h6>
                <h6>Author: {b.author}</h6>
                <p>Description: {b.description}</p>
            </div>
        )
    })
    return (
        <div>
            <h1>find your next Great read</h1> 
            {reviewList}
        </div>
    )
}

export default Main
