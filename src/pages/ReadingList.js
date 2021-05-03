import React from 'react'

const ReadingList = ({readinglist, remove}) => {
    const images = readinglist.map((image,index) => {
        return (
            
                <div className="my-list">
                    <img src={image} />
                    <button onClick={() => remove(index)}>Remove from List</button>
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
