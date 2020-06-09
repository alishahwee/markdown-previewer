import React from 'react';
import Header from './Header.js';
import Editor from './Editor.js';
import Preview from './Preview.js';
import './App.scss';
import placeholder from './placeholder.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value,
    });
  }

  render() {
    return (
      <div className="body-wrapper">
        <Header />
        <div className="main">
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default App;
