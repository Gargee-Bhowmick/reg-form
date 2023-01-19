import React from 'react'
import logo from './../images/Yogalogo.png'
import { Link } from 'react-router-dom'
import Nav from './Nav'
export default function Navbar() {
  const subpage = [{
    key: 1,
     comp: 'Home',
     go: '/home'
  },
{
  key: 2,
    comp:'About',
    go: '/about'
},
{
  key: 3,
  comp: 'Contact Us',
  go: '/contact'
},
{
  key: 4,
    comp:'Login',
    go: '/login'
},
{
  key: 5,
    comp: 'Register',
    go: '/register'     
}]
const rendernav = (item)=>{
  return <Nav key={item.key} item = {item}/>
}
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow mb-5 bg-body-tertiary rounded">
  <div className="container-fluid">
  <a class="navbar-brand text-success" href="#">
      <img src={logo} alt="Logo" width="34" height="34" class="d-inline-block align-text-top"/>
      &nbsp;&nbsp;Yoga
    </a>
    <div className="navbar" id="navbarNav">
      <ul className="navbar-nav">
        {subpage.map(rendernav)}
      </ul>
    </div>
  </div>
</nav>
</>
  )
}
