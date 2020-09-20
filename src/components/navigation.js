import React from "react"
// import {Container,Navbar, Form, FormControl, Button, ListGroup} from 'react-bootstrap'
// import { Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Nav(){
    return(
<div className="sm:flex sm:flex flex-col space-y-2 bg-green-100 sticky top-0 shadow-ms">
    <div className=" sm:flex flex-row bg-green  space-x-40 items-center flex justify-start ">   
    <h1 className="font-bold text-3xl  text-white p-2 ml-8 ">GRASSPART</h1>
    <input className="rounded-sm p-1 text-gray-100 bg-green-100 px-20" type="text" placeholder="Search..."/>
<div className="sm:flex ">
    <div className="flex justify-end items-center space-x-2  antialiased text-md text-gray-300 font-sans">
        <button className="bg-green-700 px-1 py-1 rounded-md antialiased font-semibold font-sans">LOGIN</button>
        <button className="flex-shrink-0 bg-red px-1 py-1 rounded-md antialiased font-semibold font-sans">Sign Up</button>
    </div>
</div>

<div className="w-20  flex items-center flex justify-center  ">
    <Link to='/home'><img className="border h-10 w-12 bg-red " src="./menu1.png" alt="logo"/></Link>
</div>

</div>  



  <div className=" text-green-600 list-none flex flex-row items-start flex justify-center  h-20  ">
    
    <div className="sm:flex space-x-32 items-center flex justify-end">

        <div className="items-center flex justify-center ">
        <Link to='/home'>
        <div className="p-1 px-1">
        <img className="w-12 h-12 shadow-md" src="./home2.png" alt="services"/>
        </div>
        <div>
        <li className="font-bold text-center">HOME</li>
        </div>
        </Link>
        </div>

        <div className="items-center flex justify-center  ">
        <Link to='/services'>
        <div className="p-2">
        <img className="w-12 h-10 shadow-md" src="./services1.png" alt="services"/>
        </div>
        <div>
        <li className="font-bold">SERVICES</li>
        </div>
        </Link>
        </div>

    <div className="items-center flex justify-center border-b-2 border-green-700 ">
    <Link to='/buysell'>
    <div className="p-2">
    <img className="w-12 h-10 shadow-md" src="./buysell.jpg" alt="services "/>
    </div>
    <div>
    <li className="font-bold">BUY/SELL</li>
    </div>
    </Link>
    </div>


    <div className="items-center flex justify-center ">
    <Link to='/rent'>
    <div className="px-4 p-2 ">
    <img className="w-12 h-10 shadow-md " src="./Rent.png" alt="services"/>
    </div>
    <div>
    <li className="font-bold">RENT/LEASE</li>
    </div>
    </Link>
    </div>

    </div>
</div>
</div>
    );
}
export default Nav;
