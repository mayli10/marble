import React from 'react';
import { render } from 'react-dom';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const store = configureStore();

render(
    <BrowserRouter>
      <Root store={store} history={history} />
    </BrowserRouter>,
    document.getElementById('root')
);
