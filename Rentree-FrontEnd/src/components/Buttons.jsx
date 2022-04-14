import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Buttons() {
  return (
    
      <div className = 'row ' >
          <div className='col-2 '></div>

          <div className='col '>
              <Button variant="success" className="mx-5 shadow" ><Link to="/Rentree/topbooks" className='text-light text-decoration-none'>SHOP NOW</Link></Button>
          </div>
          <div className='col-2 '></div>
          <div className ="col  ">
              <Button variant="success" className="mx-5 shadow"><Link to="/Rentree/premiumgames" className='text-light text-decoration-none'>SHOP NOW</Link></Button>
          </div>
      </div>

    
  )
}
