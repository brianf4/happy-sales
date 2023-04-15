import React from "react";
import { Link } from "react-router-dom";



function Index () {
  return (
    <ul>
      <li>
        <Link to="signup">Signup</Link>
      </li>
      <li>
      <Link to="Login">Login</Link>
      </li>
    </ul>
  )
} 
export default Index