import React from "react";
import Button from "./Button";

const error = ({message, buttonText, page}) => {
    return (


        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 sm:px-6">
            
            <h1 className="text-3xl font-bold text-gray-800 text-center mt-8">{message}</h1>
            <div className="mt-6 sm:mt-8">
        <Button text= {buttonText} location="" page={page} />
      </div>
        </div>
        


    );
};

export default error;