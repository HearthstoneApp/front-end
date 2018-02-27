import React, { Component } from 'react';
import NavBar from '../nav_bar';
import Search from '../../containers/search';
import Preview from '../../containers/preview';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Search />
        <Preview />
      </div>
    );
  }
}
