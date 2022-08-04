import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from './Baseurl';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")


  const login = async (e) => {
    e.preventDefault();

    const data = await axios.post(`${BaseUrl}/signin`,{email,password})
      .then((res) => {
        console.log(res.data.id);
        localStorage.setItem("data",JSON.stringify(res))
        localStorage.setItem("id",res.data.id)
        
        setMessage("Login SuccessFully")
        navigate("/about")
      }).catch((err) => {
        setMessage("Enter Correct UserName And Password")
        console.log(err);
      })
  }


  return (
    <div>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="login-box">
              <h2>Login</h2>
              <h5>{message}</h5>
              <form onSubmit={login}>

                <div className="user-box">

                  <input type="email"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    autoComplete='off'
                    placeholder='your Email' />
                  <label>Email</label>
                </div>
                <div className="user-box">

                  <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password'
                    id='password'
                    autoComplete='off'
                    placeholder='your Password' />
                  <label>Password</label>
                </div>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <input type="submit" name='signin' id='signin' value='Log In' className='btn1' />
                </a>

              </form>




            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login