import React from 'react';
import './Hello.css';

class Hello extends React.Component {
  render() {
    return <h1 className="hello"> Hello, {this.props.name}</h1>;
  }
}

export default Hello; 