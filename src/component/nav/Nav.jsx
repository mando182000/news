import React, { Component } from 'react'
import logo from './../../newslogo.jpg'
export default class Nav extends Component {
  render() {
    return (
     <>
     
     <nav className="navbar navbar-expand-lg bg-danger text-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="home">
<img src={logo} title='logo' width ={100} alt="..." />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">sport</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light"  href="#">Business</a>
        </li><li className="nav-item">
          <a className="nav-link text-light" href="#">Technology</a>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
     
     
     </>
    )
  }
}
