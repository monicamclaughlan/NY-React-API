import React from 'react'

const ReadingList = ({readinglist}) => {
    const images = readinglist.map((image,index) => {
        return (
            <div>
                <img src={image} />
            </div>
        )
    })
    return (
        <>
        {images}
        </>
    )
}

export default ReadingList
