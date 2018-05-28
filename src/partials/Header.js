import React from 'react'
import {Link} from 'react-static'

export default () => (
    <nav className = 'header secondary-font hide'>
        <Link to = '/'>Home</Link>
        <Link to ='/portfolio'>Portfolio</Link>
        <Link to = '/resume'>Resume</Link>
    </nav>
)