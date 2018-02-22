import React, { Component } from 'react';
import NavBar from '../nav_bar';
import Search from '../../containers/search';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Search />
      </div>
    );
  }
}
