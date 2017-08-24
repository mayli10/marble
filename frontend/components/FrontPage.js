import React from 'react';
import { Link } from 'react-router-dom';
import marbleLand from "../images/marbleLand.png";
import "../../public/styles/FrontPage.css"

class FrontPage extends React.Component {

  render() {
    return (
      <div className="frontContainer">
      <img id='marbleLand' src={marbleLand}/>
      <form className="form" />
      {/* onSubmit={this.handleSubmit} */}
        <div>
          <input list="colleges" classNamename="colleges"/>
          <datalist id="colleges">
            <option value="George Washington University"/>
            <option value="University of Pennsylvania"/>
            <option value="Vassar College"/>
          </datalist>
        </div>
        <div className='center-button'>
          <button className="button"><a href="/home">enter</a></button>
        </div>
    </div>
    )
  }
}

export default FrontPage
