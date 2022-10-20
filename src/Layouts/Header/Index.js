import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Nav() {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    return (
        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Unique Touch<span>TM</span>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between mr-5" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <Link to="/" className={"nav-item nav-link" + (url === "/" ? " active" : "")}>Home</Link>
                        <Link to="/about" className={"nav-item nav-link" + (url === "/about" ? " active" : "")}>About</Link>
                        <Link to="/service" className={"nav-item nav-link" + (url === "/service" ? " active" : "")}>Service</Link>
                        <Link to="/quote" className={"nav-item nav-link" + (url === "/quote" ? " active" : "")}>Quote Request</Link>
                        <Link to="/contact" className={"nav-item nav-link" + (url === "/contact" ? " active" : "")}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}