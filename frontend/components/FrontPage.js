import React from 'react';
import { Link } from 'react-router-dom';
import marbleLogo from "../images/marbleLogo.png";
import "../../public/styles/FrontPage.css"

class FrontPage extends React.Component {
  render() {
    return (
      <div className="frontContainer">
      <img id='marbleLogo' src={marbleLogo}/>
      <Link className="register" to="/register">register</Link>
      <Link className="login" to="/login">login</Link>
    </div>
    )
  }
}

export default FrontPage
