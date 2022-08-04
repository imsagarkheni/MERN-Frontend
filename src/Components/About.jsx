import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import {NavLink}  from 'react-router-dom'
import { BaseUrl } from './Baseurl';

const About = () => {
  const [user, setUser] = useState([])
  const navigate = useNavigate();

  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"))
    console.log(data);
    if(data != null){
    }
    else{
      navigate("/login");
    }
    
  }, [])
  
 const id = localStorage.getItem("id");

 const logout=()=>{
  localStorage.clear();
  navigate('/login')
  console.log("Logout Successfully");
 }
 

  const callAbout = async (id)=>{
    const data = await axios.get(`${BaseUrl}/userID/${id}`).then((res)=>{
      console.log("HELLLLO", res.data);
      setUser(res.data.info)
    }).catch((err)=>{
console.log(err);
    })
  }

useEffect(() => {
 callAbout(id);
 
}, [])


  return (
    <div>
       <div className="home text-center d-flex justify-content-center align-items-center">
        <div className="home_div">
          
            <h1 className='pt-5'>Welcome {user.name}</h1>
            <h4 style={{color:"black"}}>Thanks For Connecting</h4>
            <h4>Your Mobile Number is {user.phone}</h4>
            <h4 style={{color:"black"}}>Work : {user.work}</h4>

            <button className='btn btn-info' onClick={logout}>Logout</button>
            
        </div>
       </div>


 
    </div>
  )
}

export default About