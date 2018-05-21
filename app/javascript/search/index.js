import React, { Component } from 'react'
import Search from './search'
import {store} from 'store/configureStore'
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import './stylesheets/search.scss'
import FacilityContainer from '../containers/FacilityContainer'

export default class SearchMain extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={urlPrefixHelper('/search')} component={Search}/>
            <Route path={urlPrefixHelper('/facilities/:id')} component={FacilityContainer}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
