import React, { Component } from 'react';

class App extends React.Component {
  state = {
    test: false,
  };
  componentWillMount() {
    this.setState({ x: !this.state.x }, () => { this.focus(); });
  }
  focus = () => {
    this.refs.searcher.focus();
  }
  render() {
    return (
        <input onBlur={this.focus} ref="searcher" placeholder="Search" type="text" />
    );
  }
}

export default App;
