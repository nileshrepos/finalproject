import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class CheckOut2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: localStorage.getItem("email"),
      cart: localStorage.getItem("cart"),
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5200/user/validate?email=" + this.state.email)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.error("error ", err);
      });
  }
  render() {
    const price = localStorage.getItem("price");
    return (
      <div>
        <div className="col-md-12 m-auto ">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h4 className="card-title">Invoice</h4>
              <h5 className="card-title">
                <b>Name :</b>
                {this.state.data.firstName}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {this.state.data.lastName}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Address:</b> {this.state.data.address}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>PIN:</b>
                {this.state.data.pin}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                <b>Amount:</b>
                {price}
              </h6>

              <p className="card-text">I am aware of the company policy</p>

              <Link to="/orderplaced" className="button btn-primary m-2 sm">
                DONE
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut2;
