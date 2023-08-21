import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Text Analyzer</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Choose An Option
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/uppercase">Upper Case</Link></li>
                                    <li><Link className="dropdown-item" to="/lowercase">Lower Case</Link></li>
                                    <li><Link className="dropdown-item" to="/removeextraspace">Remove Extra Spaces</Link></li>
                                    <li><Link className="dropdown-item" to="/replacewords">Replace words</Link></li>
                                    <li><Link className="dropdown-item" to="/convertwords">Convert to words</Link></li>
                                    <li><Link className="dropdown-item" to="/wordcounter">Word counter</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
