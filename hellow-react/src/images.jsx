import React, { Component } from "react";

class Images extends Component {
  render() {
    return (
      <img src = {this.props.linkgambar} width='200' height='100' />
    );
  }
}

export default Images;