import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import SignInLottie from '../assets/loties/signIn1741145092295 (1).json'
import AuthContext from '../context/AuthContext';
import { Result } from 'postcss';

const SignIn = () => {
    const {signInUser}=useContext(AuthContext);
    const handleSignIn=(e)=>{
        e.preventDefault();
        const form=e.target;
        const password=form.password.value;
        const email=form.email.value;
        const userInfo=[password, email];
        console.log(userInfo);
        signInUser(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
<form onSubmit={handleSignIn}>
<div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
      <Lottie animationData={SignInLottie}></Lottie>
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
</form>
    );
};

export default SignIn;