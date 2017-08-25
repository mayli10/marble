import React from 'react';
import { Link } from 'react-router-dom';
import "../../public/styles/ClientProfile.css";

import therapist2 from "../images/therapist2.png";
import marbleLand from "../images/marbleLand.png";


class ClientProfile extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-pills" id='navBar'>
          <Link to='/'><img className='logoBar' src={marbleLand}></img></Link>
          <li role="presentation" className="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="">Profile</a></li>
          <li role="presentation"><a href="#">Help Now</a></li>
          <li role="presentation"><a href="/register">Sign Up</a></li>
          <li role="presentation"><a href="/login">Login</a></li>
          <li role="presentation" className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#"
              role="button" aria-haspopup="true" aria-expanded="false">Dropdown
              <span className="caret"/>
            </a>
            <ul className="dropdown-menu">
              yes
            </ul>
          </li>
        </ul>

        <div>
          <Link to='/'><img className='logoBar' src={marbleLand}></img></Link>
        </div>
      </div>
    )
  }
}

export default ClientProfile;
