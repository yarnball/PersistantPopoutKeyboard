import React from 'react';

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
  test = () => {
    console.log('ran')
  }
  render() {
    return (
      <div>
      <button onClick={this.test}> click</button>
        <input onBlur={this.focus} ref="searcher" placeholder="Search" type="text" />
        </div>
    );
  }
}

export default App;
