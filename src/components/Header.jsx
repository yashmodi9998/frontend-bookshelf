import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <header id="header">
          <nav className="navbar navbar-expand-lg bg-dark container-fluid py-0">
            <a className="navbar-brand" href="/">
                Marvel
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto mx-20">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/books">Books</NavLink>
                <NavLink className="nav-link" to="/characters">Characters</NavLink>
              </div>  
            </div>
          </nav>
        </header>
    );
}