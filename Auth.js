import React, { useState } from 'react';
import './Auth.css';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../config/FirebaseConfig";

const Auth = () => {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

    const Login =  async() =>{
      try{
        await createUserWithEmailAndPassword(auth,Email,Password)
      }catch(err){
        console.log(err)
      }
    }
      console.log(auth)
  return (
    <div className="container-fluid"><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="row justify-content-center ">
        <div className="col-md-5">
            <h3 class="text-center">Login</h3>
            <form >
        <div className="from-group">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder="Enter your Email id" id="email" value={Email} onChange={(e )=> setEmail(e.target.value)} />
        </div>
        <div className="from-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter your Password" id="password" value={Password} onChange={e => setPassword(e.target.value)} />
        </div><br></br>
        <button  id="btn"onclick={Login}  className="btn btn-primary w-75">Login</button>
      </form>
        </div>
      </div>
    </div>
  );
};


export default Auth;