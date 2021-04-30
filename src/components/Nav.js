import React from 'react'
import {Link} from "react-router-dom"

const Nav = (props) => {
    return (
        <div>
            <Link to="/">
                <div>greatReads</div>
            </Link>
            <Link to="ReadingList">
                <div>My List</div>
            </Link>
        </div>
    )
}

export default Nav
