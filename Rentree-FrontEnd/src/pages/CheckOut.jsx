import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CheckOut() {
  const amt = localStorage.getItem("price");
  const [amount, setAmount] = useState({ amount: amt });
  const [firstName, setFirstName] = useState("");
  const emel = localStorage.getItem("email");
  const em =
    "http://localhost:5200/user/validate?email=" +
    localStorage.getItem("email");
  const [user, setUser] = useState([]);
  const [lastName, setLastName] = useState("");
  const data = () => {
    const em = "http://localhost:5200/user/validate?email=" + emel;

    console.log(em);
    axios
      .get(em)
      .then((res) => {
        console.log(res.data.email);
      })
      .catch((err) => {
        console.error("error is", err);
      });
  };
  return (
    <div>
      {data()}
      <div class="container mt-5 mb-5 ">
        <h1 style={{ color: "green" }}>Fill in your details</h1>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">First Name</label>
              <input
                type="Name"
                class="form-control"
                id="inputEmail4"
                placeholder="First Name"
                value={firstName}
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Last Name</label>
              <input
                type="Last Name"
                class="form-control"
                id="inputPassword4"
                placeholder=":Last Name"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              required
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              required
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" required />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <label>
            <b>Amount</b>
          </label>
          <Input
            name="amt"
            id="amount"
            value={amount.amount}
            disabled
            onChange={(e) => {
              setAmount({ ...amount, amount: e.target.value });
            }}
          />
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <Button variant="success">
            <Link to="/orderplaced" className="text-decoration-none text-light">
              DONE
            </Link>
          </Button>
          <Button variant="success float-right">
            <Link to="/rentree" className="text-decoration-none text-light">
              BACK
            </Link>
          </Button>
          {/* <button type="submit" class="btn btn-success">Sign in</button> */}
        </form>
      </div>
      {/* <Container> 
 
                  <label><b>Name</b></label>
                  <Input type='text' placeholder="Enter Your Name"  name='name' id='name'
                   onChange={
                   (e) => {
                       setName({ ...name, name: e.target.value });
                   }}  />
 
                  <label><b>Address</b></label>
                  <Input type='text' placeholder=" (Home No,Building,Street,Area,City,State)" name='address' id='address'
                   onChange={
                   (e) => {
                       setAddress({ ...address, address: e.target.value });
                   }}  />
                      
                      <label><b>Pincode</b></label>
                  <Input type='number' placeholder="Enter Your Pincode"  name='pincode' id='pincode'
                   onChange={
                   (e) => {
                       setPincode({ ...pincode, pincode: e.target.value });
                   }}  />
 
                  <label><b>Mobile No.</b></label>
                  <Input type='number' placeholder="Enter Your Mobile Number" name='mobile' id='mobile'
                   onChange={
                   (e) => {
                       setMobile({ ...mobile, mobile: e.target.value });
                   }}  />
 
 
                  <label><b>Amount</b></label>
                  <Input name="amt" id="amount" value={amount.amount} disabled
                    onChange={
                      (e) => {
                          setAmount({ ...amount, amount: e.target.value });
                      }
                  } 
                 /> 
                    <br/>
                 <Button onClick={handleAmount} type="submit" color="success" className="btn-block">Pay</Button>
                   </Container>
             </div> */}
    </div>
  );
}
