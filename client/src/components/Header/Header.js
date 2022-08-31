import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4">Bookz.eu</span>
            </Link>
        
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/new-post" className="nav-link" aria-current="page">Naujas Straipsnis</Link>
                </li>
                <li className="nav-item">
                    <Link to="/new-post" className="nav-link" aria-current="page">Atsijungti</Link>
                </li>




                <li className="nav-item">
                    <Link to="/login" className="nav-link" aria-current="page">Prisijungit</Link>
                </li>
                <li className="nav-item">
                    <Link to="/registration" className="nav-link" aria-current="page">Registracija</Link>
                </li>
                

            </ul>
            </header>
        </div>
    
    )
}

export default Header