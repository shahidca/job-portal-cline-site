import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
  const {user,signOUtUser}=useContext(AuthContext);
  const handleSignOut=()=>{
    signOUtUser()
    .then(()=>{
      console.log("Successfully Sign Out now");
    })
    .catch(error=>{
      console.log('fail the sign out')
    })
  }
    return (
<div className="w-11/12 mx-auto py-6 navbar bg-base-200">
<div className="flex-1">
<a className="btn btn-ghost text-xl">daisyUI</a>
</div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
          
        </div>
      </div>
      <div className='flex items-center gap-11 mr-4'>
        {
          user ? <><button onClick={handleSignOut} className="btn btn-block">Log Out</button> </> : <>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='signIn'>Sign In</NavLink>
          <NavLink to='signUp'>Sign Up</NavLink>
          </>
        }
        
      
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
            <NavLink to='/'>Home</NavLink>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="/src/assets/Screenshot 2024-09-10 194521.png" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <NavLink to='signUp'><li><a>Logout</a></li></NavLink>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;