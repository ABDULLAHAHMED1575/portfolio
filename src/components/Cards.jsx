import React from 'react'
import { Link } from 'react-router-dom'

export const Cards = ({image,title,desc,to}) => {
  return (
    <div>
        <img src={image} alt="" />
        <div>
            <h1>{title}</h1>
            <span>{desc}</span>
            <button><Link to={to}>preview</Link></button>
        </div>
    </div>
  )
}
