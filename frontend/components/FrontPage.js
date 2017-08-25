import React from 'react';
import { Link } from 'react-router-dom';
import marbleNoNav from "../images/marbleNoNav.png";
import marbleCrust from "../images/marblecrusty.png";
import logoJar from "../images/logoJar.png";

import "../../public/styles/FrontPage.css";
// import SearchBar from 'material-ui-search-bar';

class FrontPage extends React.Component {

  render() {
    return (
      <div className="frontContainer">
      <img id='blueBackground' src={marbleCrust}/>
      <ul className="nav nav-pills" id='navBar'>
        <Link to='/'><img className='logoJar' src={logoJar}></img></Link>
        <li role="presentation"><a href="/mission" className='pill'>Our Mission</a></li>
        <li role="presentation"><a href="/team" className='pill'>Team</a></li>
        <li role="presentation"><a href="/faq" className='pill'>FAQ</a></li>
        <li role="presentation"><a href="/register" className='pill'>Register</a></li>
        {/* <li role="presentation"><a href="/login" className='pill'>Login</a></li> */}
        <li role="presentation" className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#"
            role="button" aria-haspopup="true" aria-expanded="false" className='pill'>Login
            <span className="caret"/>
          </a>
          <ul className="dropdown-menu">
            <form action="/login" method="post">
              <span>Username: <input type="text" name="username"/></span>
              <span>Password: <input type="password" name="password"/></span>
              <button type="submit">Log in</button>
            </form>
          </ul>
        </li>
      </ul>
      <form className="form" action="/home" method="get">
                <input list="colleges" className="colleges"/>
                <datalist id="colleges">
                  <option value="George Washington University"/>
                  <option value="University of Pennsylvania"/>
                  <option value="Vassar College"/>
                </datalist>
                <button type="submit">Enter</button>
            </form>
          </div>
    )
  }
}

export default FrontPage

{/* onSubmit={this.handleSubmit} */}

  {/* <div>
    <input list="colleges" classNamename="colleges"/>
    <datalist id="colleges">
      <option value="George Washington University"/>
      <option value="University of Pennsylvania"/>
      <option value="Vassar College"/>
    </datalist>
  </div>

  <div className='center-button'>
    <button className="button"><a href="/home">enter</a></button>
  </div> */}
