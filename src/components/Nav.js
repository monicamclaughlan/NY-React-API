import React from 'react'
import {Link} from "react-router-dom"

const Nav = (props) => {
    return (
        <div className='nav'>
            <Link to="/">
                <div>great<span>Reads</span></div>
            </Link>
            <div className="title">---find your next Great read---</div>
            <Link to="ReadingList">
                <div>My List</div>
            </Link>
        </div>
    )
}

export default Nav
