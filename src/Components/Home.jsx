import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../Components/home.css'

const Home = () => {

    const [userName, setUserName] = useState({name: "", email: "", phone: "", work: "", password: "", cpassword: ""});

    const userHome = async ()=>{
        try {
            const res = await fetch ('/getdata',{
                method : "GET",
                
            });
            const data = await res.json();
            setUserName({...userName, name:data.name, email:data.email, phone:data.phone});
            if(!res.status ===200){
                const error = new Error(res.error);
                throw error;
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        userHome();
    },[])

  return (
    <div>
       <div className="home text-center d-flex justify-content-center align-items-center">
        
        <div className="home_div">
            <p className='pt-5'>WELCOME TO HOME PAGE</p>
            <h1>We Are The MERN Developer</h1>

           <button className="btn btn-info mr-2"><NavLink to="/register" style={{textDecoration:"none", color:"white"}} >SIGN UP</NavLink></button> 
           <button className="btn btn-info "><NavLink to="/login" style={{textDecoration:"none", color:"white"}} >LOGIN</NavLink></button> 
        </div>
       </div>
    </div>
  )
}

export default Home
