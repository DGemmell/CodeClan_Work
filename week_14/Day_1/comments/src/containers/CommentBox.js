// If it contains logic, or holds the state of the program - its data

import React, { Component } from "react";
import CommentList from "../components/CommentList";

class CommentBox extends Component {
  constructor(props) {
  super(props);
  this.state = {
    data: [{ id: 1, author: "Jean", text: "Socks dont have to match to smile"},
  {id:2, author: "mum", text: "fasten your summit to your pants"}]
  };
}
render() {
    return (
      <div className="commentBox">
      <h2>Comment List</h2>
      <CommentList data={this.state.data} />
      </div>
    );


  }
}

export default CommentBox;
