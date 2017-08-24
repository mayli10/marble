import React from 'react';
import { Route, Link } from 'react-router-dom';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import _ from "lodash";
import '../../public/styles/Home.css';
import Insurance from "./Insurance.js";
import Client from "./Client.js";
import { insuranceList, clientList, professionList } from "../dataList.js";
import ReactStars from 'react-stars';
import { render } from 'react-dom';
import axios from 'axios';

import therapist1 from "../images/therapist1.jpg";
import therapist2 from "../images/therapist2.png";
import marbleLand from "../images/marbleLand.png";
import insurance from "../images/insurance.png";
import greenCheck from "../images/greenCheck.png";
import redCross from "../images/redCross.png";
import vassarLogo from "../images/vassarLogo.png"


import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    defaultCenter={{ lat: 41.686271, lng: -73.897332 }}
    onClick={props.onMapClick}
    >
      {props.markers.map((marker, index) => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(index)}
        />
      ))}
    </GoogleMap>
  ));


  const ratingChanged = (newRating) => {
    console.log(newRating)
  };

  // Then, render it
  class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clientList: clientList,
        insuranceList: insuranceList,
      }
    }

    clickInsurance(name) {
      var insuranceListCopy = [];
      console.log(insuranceListCopy);
      // const newObject = Object.assign({}, object);
      for (var i=0; i<this.state.insuranceList.length; i++) {
        insuranceListCopy.push(Object.assign({}, this.state.insuranceList[i]))
      }
      for (var j=0; j<insuranceListCopy.length; j++) {
        if (insuranceListCopy[j].name === name) {
          console.log('FOUND THIS', insuranceListCopy[j].name)
          insuranceListCopy[j].clicked = !insuranceListCopy[j].clicked;
        }
      }
      this.setState({
        insuranceList: insuranceListCopy
      })
    }

    // componentDidMount(){
    //   var self = this;
    //   axios.post('/api/search', {
    //     filters: "Aetna"
    //   })
    //   .then(function(resp) {
    //     console.log(resp.data);
    //     self.setState({
    //       list:resp.data
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   // axios post to get back list
    //   // .then()
    // }



    render () {
      // const displayList = clientList.filter(()=>{
      //
      // })


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

          <div id="notNav">

            <div id="filterView">
              <div className='filterInnerBox'>
                <div className='filterFirstInnerBox'>
                  <div className='collegeHeaderContainer'>
                <img className='collegeHeader' src={vassarLogo}></img>
              </div>
                <div className='resourcesInnerBox'>
                  <div className='resourceLocation'>
                    <h2>Filter:</h2>
                  <div className='onCampus'>
                    <div className='onCampusHeader'>
                      <h3>On Campus</h3>
                    </div>
                  </div>
                  <div className='offCampus'>
                    <div className='offCampusHeader'>
                      <h3>Off Campus</h3>
                    </div>

                    <div className='filter-insurance'>
                      <div className='insuranceHeader'>
                        <h4>Insurance</h4>
                      </div>
                      <ul className='spec-list'>
                        {insuranceList.map(item =>
                          (<Insurance name= {item.name} url={item.url} key={item.name}
                            onClick={() => this.clickInsurance(item.name)}/>))}
                      </ul>
                    </div>

                    <div className='filter-insurance'>
                      <div className='insuranceHeader'>
                        <h4>Profession</h4>
                      </div>
                      <ul className='spec-list'>
                        {professionList.map(item =>
                          (<Insurance name= {item.name} key={item.name}/>))}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>

            <div id='listView'>
              <div>

                <div className="listFirstInnerBox">
                  <div>
                    {/* {this.state.whatever.length > 0 && this.state.list.map(item =>
                      (<Client name= {item.name} profession={item.profession}
                        image={item.image} number={item.number}
                        key={item.name}/>))} */}
                    {this.state.clientList.map(item => {
                      for (var i=0; i<this.state.insuranceList.length; i++) {
                        // console.log(item.networks.indexOf(insuranceList[i].name))
                        if (this.state.insuranceList[i].clicked &&
                          item.networks.indexOf(this.state.insuranceList[i].name)) {
                          return (<Client name= {item.name}
                            profession={item.profession}
                            image={item.image} number={item.number}
                            key={item.name}/>)
                        }
                      }
                      for (var i=0; i<this.state.insuranceList.length; i++) {
                        // console.log(item.networks.indexOf(insuranceList[i].name))
                        if (this.state.insuranceList[i].clicked) {
                          return
                        }
                      }
                      return (<Client name= {item.name}
                        profession={item.profession}
                        image={item.image} number={item.number}
                        key={item.name}/>)
                    })
                  }

                    {/* <div className='listInnerBox'>
                      <div className="listLeftCol">
                        <img className='profImage' src={therapist1}></img>
                        <img className='insurance' src={insurance}></img><br/>
                        <text className="network">IN NETWORK</text>
                        <img className="crossCheckIcon" src={greenCheck}></img>
                      </div>
                      <div className="listRightCol">
                        <h3>Dr. Jamie King, MD</h3>
                        <h5 className="mdIndicator">Psychiatrist</h5>
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          color2={'#ffd700'} />
                          <p className="description">
                            "Jamie was the sweetest psychiatrist I've ever met.
                            I was so stressed for my finals and she helped me..."
                            {/* learn how to manage this stress.
                            We talked extensively about what I needed to learn to build better habits to alter my way of thinking.
                            There's no way I would have survived finals week without her!" */}
                          {/* </p>
                        </div>
                    </div> */}

                    {/* <div>
                      <div className='listInnerBox'>
                        <div className="listLeftCol">
                          <img className='profImage' src={therapist2}></img>
                          <img className='insurance' src={insurance}></img><br/>
                          <text className="network">OUT OF NETWORK</text>
                          <img className="crossCheckIcon" src={redCross}></img>
                        </div>
                        <div className="listRightCol">
                          <h3>Dr. David Jakubowicz, PsyD</h3>
                          <h5 className="psydIndicator">Psychologist</h5>
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            color2={'#ffd700'} />
                            <p className="description">
                              "If you like funny conversations, a lot of good insight, and an authentic friend, please
                              just make an..."
                              {/* focusing, and David helped
                              me figure out how to manage my anxiety in a healthy way without fear of regressing into
                              depression and panic." */}
                            {/* </p>
                          </div>
                      </div>
                      </div>

                      <div>
                        <div className='listInnerBox'>
                          <div className="listLeftCol">
                            <img className='profImage' src={therapist1}></img>
                            <img className='insurance' src={insurance}></img><br/>
                            <text className="network">IN NETWORK</text>
                            <img className="crossCheckIcon" src={greenCheck}></img>
                          </div>
                          <div className="listRightCol">
                            <h3>Dr. Jamie King, MD</h3>
                            <h5 className="mdIndicator">Psychiatrist</h5>
                            <ReactStars
                              count={5}
                              onChange={ratingChanged}
                              size={24}
                              color2={'#ffd700'} />
                              <p className="description">
                                "Jamie was the sweetest psychiatrist I've ever met.
                                I was so stressed for my finals and she helped me..."
                              </p>
                            </div>
                        </div>
                        </div> */}

                    </div>
                  </div>
                </div>
              </div>

                <GettingStartedGoogleMap
                  id="mapView"
                  containerElement={
                    <div style={{ height: `90vh`, width: '400px' }} ></div>
                  }
                  mapElement={
                    <div style={{ height: `90vh`, width: '400px' }} ></div>
                  }
                  onMapLoad={_.noop}
                  onMapClick={_.noop}
                  markers={[]}
                  onMarkerRightClick={_.noop} />
                </div>

              </div>
            )}
          }


          export default Home

// <!-- Note you can add scopes along with the specific api version with the following configuration -->
