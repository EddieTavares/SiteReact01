import React from "react";
import { NavLink } from "react-router-dom";

function Nav(){
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Apex site bootstrap</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/sobre">Sobre</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/comentarios">Comentários</NavLink>
              </li>

              
            </ul>
            <form>
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
    );
};

export default Nav;