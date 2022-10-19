import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Service</Link>
                <Link to="/quote">Quote A Request</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}