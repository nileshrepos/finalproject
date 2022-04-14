import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", pass: "" };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePass = (e) => {
    this.setState({ pass: e.target.value });
  };

  handleLogin = (e) => {
    const em = "http://localhost:5200/user/validate?email=" + this.state.email;

    e.preventDefault();
    console.log(em);
    axios
      .get(em)
      .then((res) => {
        console.log(res.data.email);
        if (
          res.data.email == this.state.email &&
          res.data.pass == this.state.pass
        ) {
          localStorage.setItem("email", this.state.email);
          localStorage.setItem("pass", this.state.pass);
          localStorage.setItem("isAuth", true);
          this.props.history.push("/product");
          console.log(true);
        }
      })
      .catch((err) => {
        console.error("error is", err);
      });
  };

  render() {
    return (
      <Container>
        <div>
          <div className="col-md-12 m-auto ">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Email that you have used while registration.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                  value={this.state.pass}
                  onChange={this.handlePass}
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label className="form-check-label" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-dark float-right mb-5"
                onClick={this.handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default Login;
