import React from 'react';
import ReactStars from 'react-stars';

  const ratingChanged = (newRating) => {
    console.log(newRating)
  };


///put them in public folder and use route them into your body
// restructuring images


class Client extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='listInnerBox'>
        <div className="listLeftCol">
          <img className='profImage' src={this.props.image}></img>
          {/* <img className='insurance' src={insurance}></img><br/> */}
          <text className="network">IN NETWORK</text>
          {/* <img className="crossCheckIcon" src={greenCheck}></img> */}
        </div>
        <div className="listRightCol">
          <h3>{this.props.name}</h3>
          <h5 className="mdIndicator">{this.props.profession}</h5>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />
            <p className="description">
              "{this.props.number}. {this.props.name} was the sweetest psychiatrist I've ever met.
              I was so stressed for my finals and she helped me..."
              {/* learn how to manage this stress.
              We talked extensively about what I needed to learn to build better habits to alter my way of thinking.
              There's no way I would have survived finals week without her!" */}
            </p>
          </div>
      </div>

    )
  }
}

export default Client;
