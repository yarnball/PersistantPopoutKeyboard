import React from "react";

class App extends React.Component {
  componentWillMount() {
    setTimeout(() => {
      this.focus();
    }, 0);
  }
  focus = () => {
    this.refs.searcher.focus();
  };
  test = () => {
    this.refs.searcher.focus();
  };
  render() {
    return (
      <div>
        <button onClick={this.test}> click</button>
        <input
          onBlur={this.focus}
          ref="searcher"
          placeholder="Search"
          type="text"
        />
      </div>
    );
  }
}

export default App;