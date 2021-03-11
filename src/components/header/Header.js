import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    if (props.location.pathname === "/") return null;
    return (
        <div className="w-100 bg-primary d-flex justify-content-center align-items-center" style={{ height: 50 }}>
            <Link to="/">
                <i className="fas fa-home fs-3 text-white"></i>
            </Link>
        </div>
    )
}
