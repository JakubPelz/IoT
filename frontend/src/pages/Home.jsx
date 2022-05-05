import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='ui middle aligned center aligned grid'>
      <div className="column" style={{ marginTop: "15%" }}>
        <h1>Fapi - Oreder App</h1>
        <div style={{ height: "30px" }}></div>
        <NavLink to="/customer">
          <div className="ui huge button" style={{ backgroundColor: "#4dabf5" }}>
            "First step"
            <i className="right arrow icon" />
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Home

