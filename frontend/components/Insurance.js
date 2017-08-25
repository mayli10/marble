import React from 'react';

class Insurance extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='filter-insurance'>
        <input id="option" type="checkbox" className="filter-insurance"
          defaultValue="option" onClick= {() => this.props.onClick()}/>
        <label htmlFor="option">{this.props.name}</label>
      </div>
    )
  }
}

export default Insurance;
