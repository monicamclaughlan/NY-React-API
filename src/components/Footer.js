import React from 'react'
import {Link} from 'react-router-dom'

const Footer = (props) => {
    return (
        <>
            <Link to="/"><div>gR</div></Link>
            <p>Copyright 2021</p>
            <p className="back-to-top" onClick={() => window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })}>Back to Top</p>
        </>
    )
}

export default Footer
