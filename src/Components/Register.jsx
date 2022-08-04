import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { BaseUrl } from './Baseurl';

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("")
  const [user, setUser] = useState({
    name: "", email: "", work: "", password: "", cpassword: ""
  });
  const [num, setNum] = useState()
  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const onSub = async (e) => {
    e.preventDefault();
    const hello = parseInt(num)
    const body = {
      ...user,
      phone: hello
    }
    const data = await axios.post(`${BaseUrl}/register`, body)
      .then((res) => {
        console.log(res);
        console.log("Registration Successfully");
        setMessage("Registration Successfully")
        navigate("/login")
      }).catch((err) => {
        console.log(err);
        console.log("password not matching");
      })
  }


  return (
    <div>
      <div className="container text-center my-5">
        <div className="row mx-auto">
          <div className="col-md-12 mx-autp">
            <div className="login-box">
              <h2>Register</h2>
              
            <h5>{message}</h5>
              <form onSubmit={onSub}>
                <div className="user-box">
                  <input type="text" name='name' id='name' autoComplete='off'
                    value={user.name}
                    onChange={handleInputs} placeholder='Your Name' />
                  <label>FullName</label>
                </div>
                <div className="user-box">
                  <input type="email" name='email' id='email' autoComplete='off'
                    value={user.email}
                    onChange={handleInputs} placeholder='Your Email' />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input type="number" name='phone' id='phone' autoComplete='off'
                    value={num}
                    onChange={(e) => {
                      setNum(e.target.value)
                    }} placeholder='Your Mobile Number..' />
                  <label>Phone Number</label>
                </div>
                <div className="user-box">
                  <input type="text" name='work' id='work' autoComplete='off'
                    value={user.work}
                    onChange={handleInputs} placeholder='Your Profession' />
                  <label>Work</label>
                </div>
                <div className="user-box">
                  <input type="password" name='password' id='password' autoComplete='off'
                    value={user.password}
                    onChange={handleInputs} placeholder='Your Password' />
                  <label>Password</label>
                </div>
                <div className="user-box">
                  <input type="password" name='cpassword' id='cpassword' autoComplete='off'
                    value={user.cpassword}
                    onChange={handleInputs} placeholder='Your Confirm Password' />
                  <label>Confirm Password</label>
                </div>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <input type="submit" name='signup' id='signup' value='Register' className='btn1' />
                </a>
              </form><br/>
                <NavLink to="/login" style={{textDecoration:"none", color:"blue"}}>Already Registered?</NavLink>


            </div>

          </div>
                
        </div>
      </div>
    </div>
  )
}

export default Register