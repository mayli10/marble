import React from 'react';

class Insurance extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className='filter-insurance'>
        <a href={this.props.url}
        title={this.props.name}>{this.props.name}</a>
      </li>
    )
  }
}

export default Insurance;
