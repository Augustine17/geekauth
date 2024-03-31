import {useState} from 'react';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import './Login.css'


function Login() {
  const [loginType, setLoginType] = useState('login');
  const [user,setUser] = useState({});
  const [error,setError] = useState("");
  const [name,setName] = useState("");

  function handleUser(e){
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user);
  }

  function handleSignUp(e){
    e.preventDefault();
    setError("")
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        setName(user.email)
        // ...
    })
    .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
        // ..
    });
  }

  function handleLogin(e){
    e.preventDefault();
    setError("")
    signInWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setName(user.email)
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });
  }
  
    return (
      <>
        {name && <div className='sad'>Successfull {name}</div>}
        {!name &&<div className="container login-page">
          <section>
            <h1>Welcome to the Geek Authentication</h1>
            <p>Login or create an account to continue</p>
            <div className="login-type">
              <button 
                className={`btn ${loginType === 'login' ? 'selected' : ''}`}
                onClick={()=>setLoginType('login')}>
                  Login
              </button>
              <button 
                className={`btn ${loginType === 'signup' ? 'selected' : ''}`}
                onClick={()=>setLoginType('signup')}>
                  Signup
              </button>
            </div>
            <form className="add-form login">
                  <div className="form-control">
                      <label>Email *</label>
                      <input type="text" name="email" placeholder="Enter your email" onChange={(e)=>handleUser(e)}/>
                  </div>
                  <div className="form-control">
                      <label>Password *</label>
                      <input type="password" name="password" placeholder="Enter your password" onChange={(e)=>handleUser(e)}/>
                  </div>
                  {
                    loginType === 'login' ?
                    <button className="active btn btn-block" onClick={(e)=>handleLogin(e)}>Login</button>
                    : 
                    <button className="active btn btn-block" onClick={(e)=>handleSignUp(e)}>Sign Up</button>
                  }

                  {error && <div className='error'>{error}</div>}
                  
              </form>
          </section>
        </div>}
      </>
    )
  }
  
  export default Login
  