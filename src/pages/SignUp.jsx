import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import signUpLotiData from '../assets/loties/Sign up - 1740911583035 (1).json'
import AuthContext from '../context/AuthContext';
import { Result } from 'postcss';
import GoogleLogIn from './shared/GoogleLogIn';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = [name, email, password];
    console.log(userInfo)
    createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error.message)
      })

  }
  return (
    <div >
      <div className="hero-content ">

        <div className="card bg-base-100  shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <h1 className="text-4xl font-bold text-center pb-6">Sign Up</h1>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />

            </div>
            <div className="form-control mt-6">
             <Link to='/'> <button className="btn btn-block">Sign Up</button></Link>
            </div>
          </form>
        </div>
        <div className='w-[600px]'><Lottie animationData={signUpLotiData}></Lottie></div>
      </div>
      <div>
      <div className="divider">OR</div>
     <Link to='/'><div className='text-center p-3 '> <GoogleLogIn></GoogleLogIn></div></Link>
      </div>
 
    </div>

  );
};

export default SignUp;