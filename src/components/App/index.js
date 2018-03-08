import React, { Component } from 'react';
import NavBar from '../nav_bar';
import Search from '../../containers/search';
import Preview from '../../containers/preview';
import Details from '../../containers/details';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Search />
        <Preview />
        <Details />
      </div>
    );
  }
}
