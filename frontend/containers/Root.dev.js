import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import CollegeSearch from '../components/CollegeSearch.js';
import ResourceMapView from '../components/ResourceMapView.js';
import FrontPage from '../components/FrontPage.js';
import DevTools from './DevTools';
import { Route } from 'react-router-dom';

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <div>
              <Route exact path="/" component={FrontPage}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/collegesearch" component={CollegeSearch}/>
              <Route path="/resourcemapview" component={ResourceMapView}/>
                {/* <DevTools /> */}
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
