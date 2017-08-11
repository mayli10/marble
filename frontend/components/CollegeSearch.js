import React from 'react';
import '../../public/styles/CollegeSearch.css';
// var dataList = document.getElementById('json-datalist');
// var input = document.getElementById('ajax');

class CollegeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      college: '',
      therapists: true,
      psychiatrists: true,
    }
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.className;
    // console.log('this is the target!!!', target)
    // console.log('this is the value!!!', value)
    // console.log('this is the name!!!', name)
    // console.log('this is THIS.STATE.THERAPISTS!!!', this.state.therapists)
    // console.log('this is THIS.STATE.psychiatrists!!!', this.state.psychiatrists)
  if (name === 'therapists') {
    this.setState({
      therapists: (!this.state.therapists),
    })
  } else {
    this.setState({
      psychiatrists: (!this.state.psychiatrists),
    })
  }
}

  render(){
    return(
      <div className="container">
        <h1>Search your College</h1>
        <div>
          <form className="form" onSubmit={this.handleSubmit}>
            <div>
              <input list="colleges" classNamename="colleges"/>
              <datalist id="colleges">
                <option value="George Washington University"/>
                <option value="University of Pennsylvania"/>
                <option value="Vassar College"/>
              </datalist>
            </div>
            <div className='center-button'>
              <input className="btn btn-success" type="submit" value="Submit" />
            </div>
            <div>
            <h3>filters?</h3>
            <label>
         <input
            className="therapists"
            type="checkbox"
            checked={this.state.therapists}
            onChange={this.handleInputChange} />
            therapists
          </label>
          <br />
          <label>
       <input
          className="psychiatrists"
          type="checkbox"
          checked={this.state.psychiatrists}
          onChange={this.handleInputChange} />
          psychiatrists
        </label>
        <br />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CollegeSearch;
