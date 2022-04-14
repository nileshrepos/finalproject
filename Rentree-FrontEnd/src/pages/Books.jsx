
import React from 'react'
// import { Button } from 'bootstrap'
import { Link } from "react-router-dom"; 
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';


export default function Books() {
    // const[data,setData]=useState({});
    // useEffect(()=> {
    //     BookServices.getBookList().then((res) => {
    //       setData({ bookList: res.data });
    //     }
    // )},
    return (
        <div className='container mt-5'>
            <h1 class= " text-center mb-5 text-color" style={{color:"blue"}}><b>BOOKS</b></h1>
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src="https://i0.wp.com/bookbins.in/wp-content/uploads/2021/08/Bookbins_Atomic_Habits.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title text-center">ATOMIC HABITS</h5>
                        <p class="card-text text-center">MRP - RS 500</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted "><Button variant="outline-primary" ><Link to = "/buy" className="text-decoration-none text-dark">BUY NOW</Link></Button></small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://i0.wp.com/bookbins.in/wp-content/uploads/2022/03/Bookbins_Think_Like_A_Monk.jpg?fit=2048%2C2048&ssl=1" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title text-center">THINK LIKE A MONK</h5>
                        <p class="card-text text-center">MRP - RS 500</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted "><Button variant="outline-primary" ><Link to = "/buy" className="text-decoration-none text-dark">BUY NOW</Link></Button></small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://i0.wp.com/bookbins.in/wp-content/uploads/2021/08/Bookbins_The_Psychology_Of_Money.png?fit=2048%2C2048&ssl=1" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title text-center">PYSCHOLOGY OF MONEY</h5>
                        <p class="card-text text-center">MRP - RS 500</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted "><Button variant="outline-primary" ><Link to = "/buy" className="text-decoration-none text-dark">BUY NOW</Link></Button></small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://i0.wp.com/bookbins.in/wp-content/uploads/2021/08/Bookbins_The_Magic_Of_Thinking_Big.png?fit=2048%2C2048&ssl=1" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Atomic Habits</h5>
                        <p class="card-text text-center">MRP - RS 500</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted "><Button variant="outline-primary" ><Link to = "/buy" className="text-decoration-none text-dark">BUY NOW</Link></Button></small>
                    </div>
                </div>  
            </div>

            <div class="card-deck mt-5 mb-5">
                <div class="card">
                    <img class="card-img-top" src="https://i0.wp.com/bookbins.in/wp-content/uploads/2021/08/Bookbins_Ego_Is_The_Enemy.png?resize=768%2C768&ssl=1" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Atomic Habits</h5>
                        <p class="card-text text-center">MRP - RS 500</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted "><Button variant="outline-primary" ><Link to = "/buy" className="text-decoration-none text-dark">BUY NOW</Link></Button></small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://i0.wp.com/bookbins.in/wp-content/uploads/2021/08/Bookbins_The_80_20_Principle.png?resize=768%2C768&ssl=1" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Atomic Habits</h5>
                        <p class="card-text text-center">MRP - RS 500</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted "><Button variant="outline-primary" ><Link to = "/buy" className="text-decoration-none text-dark">BUY NOW</Link></Button></small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://i0.wp.com/bookbins.in/wp-content/uploads/2021/08/Bookbins_The_Monk_Who_Sold_His_Ferrari.png?resize=768%2C768&ssl=1" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Atomic Habits</h5>
                        <p class="card-text text-center">MRP - RS 500</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted "><Button variant="outline-primary" ><Link to = "/buy" className="text-decoration-none text-dark">BUY NOW</Link></Button></small>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://i0.wp.com/bookbins.in/wp-content/uploads/2021/08/Bookbins_12_Rules_For_Life.png?resize=768%2C768&ssl=1" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Atomic Habits</h5>
                        <p class="card-text text-center">MRP - RS 500</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted "><Button variant="outline-primary" ><Link to = "/buy" className="text-decoration-none text-dark">BUY NOW</Link></Button></small>
                    </div>
                </div>  
            </div>
        <h4 className='text-right mb-5 text-success'>
        Way to Entertainment <Link Link to = "/Games" className="text-decoration-none text-danger ">"GAMES"</Link>
        </h4>
        </div>
    )
}
