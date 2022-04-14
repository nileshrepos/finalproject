import axios from "axios";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [user, setUser] = useState({});
  const [flag, setFlag] = useState(false);
  const [regFlag, setRegFlag] = useState(0);
  const RegisterUser = () => {
    // e.preventDefault();
    var reg = 1;
    console.log("registering ...");
    console.log(user);
    axios
      .post("http://localhost:5200/user/add", user)
      .then((res) => {
        if (res.data != 0) {
          console.log(res.data);
          setRegFlag(1);
          alert("Registration successfull");
          //localStorage.setItem("registered", true);
        } else {
          console.log(res.data);
          alert("email already exists");
          setRegFlag(0);
          //return 0;
          //localStorage.setItem("registered", false);
        }
      })

      .catch((err) => alert("Email Exists", err));
  };
  const history = useHistory();
  const redire = () => {
    history.push("/login");
  };

  const direct = (e) => {
    e.preventDefault();
    var regSuccess = RegisterUser();
    console.log(regSuccess);
    if (regFlag == 1) {
      console.log("aalo");
      console.log(regSuccess);
      redire();
    }
  };

  return (
    <Container>
        <div className="col-md-5 m-auto">
      <form onSubmit={direct}>
        <h3 className="text-center">REGISTER</h3>

        <div className="form-group">
          <label> First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            name="firstName"
            required
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label> Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            name="lastName"
            required
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label> Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            name="address"
            required
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label> Pin</label>
          <input
            type="pin"
            className="form-control"
            placeholder="Enter Address"
            name="pin"
            required
            onChange={(e) => setUser({ ...user, pin: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input
            type="Phone"
            className="form-control"
            placeholder="Enter contact no"
            onChange={(e) => setUser({ ...user, contact: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
          />
        </div>

        <div className="text-center mt-3">
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Register
          </button>

          <p className="forgot-password text-right ">
            <Link to="/login" className="text-decoration-none">Already registered log in?</Link>
          </p>
        </div>
        {flag && (
          <Alert color="primary" variant="danger">
            I got it you are in hurry! But every Field is important!
          </Alert>
        )}
      </form>
      </div>
    </Container>
  );
};

export default Register;
