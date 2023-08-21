import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleLogin = () => {
    axios
      .post("https://backendjap.onrender.com/add", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res);
        alert(res.data);
      });
  };
  render() {
    return (
      <div>
        <p>
          <input
            name="username"
            placeholder="Username"
            type="text"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            name="password"
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />
        </p>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
