import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import CollegeSearch from '../components/CollegeSearch.js';
import Home from '../components/Home.js';
import FrontPage from '../components/FrontPage.js';
import ClientProfile from '../components/ClientProfile.js';
import DevTools from './DevTools';
import { Route } from 'react-router-dom';

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <div>
              {/* <h1> This would be where the renders nav bar component </h1> */}
              <Route exact path="/" component={FrontPage}/>
              <Route path="/collegesearch" component={CollegeSearch}/>
              <Route path="/home" component={Home}/>
              <Route path="/clientprofile" component={ClientProfile}/>
                {/* <DevTools /> */}
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
