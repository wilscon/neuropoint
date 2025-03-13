'use client';
import React, {useState} from "react";
import { signInWithGoogle, signOutFromGoogle } from "../lib/firebase";
import { useAuth } from "../lib/useAuth";
import { useNavigate } from "react-router-dom";



export const Login = () => {
    const {user,loading} = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {

      navigate("/schedule");
    };

  
    return (
      <div className="login-container flex flex-col items-center justify-center h-screen bg-gray-100 px-4 sm:px-6">
        <div className="text-center border rounded-lg shadow-md px-8 py-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Admin Login</h2>
        
        {!loading && (
        <button
          
          onClick={user ? signOutFromGoogle : signInWithGoogle} 
          className="px-6 py-2 mt-8 bg-customTeal text-white font-semibold rounded-lg shadow-md 
             hover:bg-white hover:text-customTeal border-2 border-customTeal 
             transition duration-300 cursor-pointer"
          >
          Log {
            user ? <>out</> : <>in</>
          }
          </button>
        )}

        
        </div>
        {!loading && user && (
        <button
          
          onClick={handleClick}
          className="px-6 py-2 mt-8 bg-customTeal text-white font-semibold rounded-lg shadow-md 
             hover:bg-white hover:text-customTeal border-2 border-customTeal 
             transition duration-300 cursor-pointer"
          >
          Scheduler
           
          
          </button>
        )}
      </div>
    );
  }
  
  export default Login;

