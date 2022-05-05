import React from 'react'
import { NavLink } from 'react-router-dom'

const TopNavBar = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <NavLink to="/" className="item link-none">Hlavní stránka</NavLink>
        <NavLink to="/customer" className="item link-none">Zákaznické údaje</NavLink>
        <NavLink to="/products" className="item link-none">E-shop</NavLink>
        <NavLink to="/final" className="item link-none">Rekapitulace</NavLink>
      </div>
    </div>
  )
}

export default TopNavBar

