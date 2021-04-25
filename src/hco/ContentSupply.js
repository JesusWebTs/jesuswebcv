import React, { Component } from "react";

function ContentSupply({WrappedComponent, content}) {
  console.log(content)
  console.log(WrappedComponent)
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        content: content,
      };
    }
    render() {
      return <WrappedComponent content={this.state.content}></WrappedComponent>;
    }
  };
}

export default ContentSupply;

