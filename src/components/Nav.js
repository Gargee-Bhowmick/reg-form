import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav(props) {
  return (
    <>
    <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={props.item.go}>{props.item.comp}</Link>
        </li>
    </>
  )
}
