import React from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import _ from "lodash";
import '../../public/styles/ResourceMapView.css';
import therapist1 from "../images/therapist1.jpg";
import insurance from "../images/insurance.png";
import greenCheck from "../images/greenCheck.png";
import redCross from "../images/greenCheck.png";
import vassarLogo from "../images/vassarLogo.png"
import ReactStars from 'react-stars';
import { render } from 'react-dom';


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
  class ResourceMapView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }
    render () {
      return (
        <div>
          <ul className="nav nav-pills" id='navBar'>
            <li role="presentation" className="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">Profile</a></li>
            <li role="presentation"><a href="#">Help Now</a></li>
            <li role="presentation"><a href="#">Sign Up</a></li>
            <li role="presentation"><a href="#">Login</a></li>
            <li role="presentation" className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown
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
                    <h2>Pick your resource:</h2>
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
                        <li className='filter-insurance'>
                          <a href="https://psychiatrists.psychologytoday.com/rms/prof_results.php?sid=1502409166.203_15467&amp;insurance=Y&amp;zipcode=94103"
                          class="" title="Any Insurance">Any Insurance</a>
                        </li>
                        <li className='filter-insurance'>
                          <a href="https://psychiatrists.psychologytoday.com/rms/prof_results.php?sid=1502409166.203_15467&amp;insurance=Y&amp;zipcode=94103"
                          class="" title="United Healthcare">United Healthcare</a>
                        </li>
                        <li className='filter-insurance'>
                          <a href="https://psychiatrists.psychologytoday.com/rms/prof_results.php?sid=1502409166.203_15467&amp;insurance=Y&amp;zipcode=94103"
                          class="" title="Medi-cal">Medi-cal</a>
                        </li>
                        <li className='filter-insurance'>
                          <a href="https://psychiatrists.psychologytoday.com/rms/prof_results.php?sid=1502409166.203_15467&amp;insurance=Y&amp;zipcode=94103"
                          class="" title="Blue Cross">Blue Cross</a>
                        </li>
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
                {/* <div className="wrap">
                  <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search" />
                    <button type="submit" className="searchButton">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div> */}
                <div className="listFirstInnerBox">
                  <div>
                    <div className='listInnerBox'>
                      <div className="listLeftCol">
                        <img className='therapist1' src={therapist1}></img>
                        <img className='insurance' src={insurance}></img><br/>
                        <text className="network">IN NETWORK</text>
                        <img className="greenCheck" src={greenCheck}></img>
                      </div>
                      <div className="listRightCol">
                        <h3>Dr. Jamie King, MD</h3>
                        <h5 className="psychiatrist">Psychiatrist</h5>
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          color2={'#ffd700'} />
                          <p className="description">
                            "Jamie was the sweetest psychiatrist I've ever met.
                            I was so stressed for my finals and she helped me learn how to manage this stress..."
                            {/* "Jamie was the sweetest psychiatrist I've ever met.
                            I was so stressed for my finals and she helped me learn how to manage this stress.
                            We talked extensively about what I needed to learn to build better habits to alter my way of thinking.
                            There's no way I would have survived finals week without her!" */}
                          </p>
                        </div>
                    </div>

                    <div>
                      <div className='listInnerBox'>
                        <div className="listLeftCol">
                          <img className='therapist1' src={therapist1}></img>
                          <img className='insurance' src={insurance}></img><br/>
                          <text className="network">IN NETWORK</text>
                          <img className="greenCheck" src={greenCheck}></img>
                        </div>
                        <div className="listRightCol">
                          <h3>Dr. Jamie King, MD</h3>
                          <h5 className="psychiatrist">Psychiatrist</h5>
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
                      </div>

                      <div>
                        <div className='listInnerBox'>
                          <div className="listLeftCol">
                            <img className='therapist1' src={therapist1}></img>
                            <img className='insurance' src={insurance}></img><br/>
                            <text className="network">IN NETWORK</text>
                            <img className="greenCheck" src={greenCheck}></img>
                          </div>
                          <div className="listRightCol">
                            <h3>Dr. Jamie King, MD</h3>
                            <h5 className="psychiatrist">Psychiatrist</h5>
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
                        </div>

                        <div>
                          <div className='listInnerBox'>
                            <div className="listLeftCol">
                              <img className='therapist1' src={therapist1}></img>
                              <img className='insurance' src={insurance}></img><br/>
                              <text className="network">IN NETWORK</text>
                              <img className="greenCheck" src={greenCheck}></img>
                            </div>
                            <div className="listRightCol">
                              <h3>Dr. Jamie King, MD</h3>
                              <h5 className="psychiatrist">Psychiatrist</h5>
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
                          </div>

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


          export default ResourceMapView

// <!-- Note you can add scopes along with the specific api version with the following configuration -->
