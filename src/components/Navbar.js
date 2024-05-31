import PropTypes from 'prop-types'
import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(props) {  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="hi">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="TextForm">{props.Text}</Link>
          </li>
          </ul>
        {/* <form className="d-flex text-light" >
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
  </form> */}
        <form className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button> */}
           <input className="form-check-input"  onClick={props.toggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}Mode</label>
        </form>
      </div>
    </div>
  </nav>
  )
}
//we hav to set the strig if you want to sent string 
Navbar.propTypes={title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
};
//default props
// Navbar.defaultProps={
//     tite:"set title here",
//     aboutText:"about text here"
// };