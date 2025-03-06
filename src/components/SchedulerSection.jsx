'use client';
import Calendar from "./Calendar";
import React from "react";

export const Scheduler = () => {
    
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 px-4 sm:px-6 pt-20 mb-4">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Schedule </h1>
            <Calendar/>
        </div>
    );
};

export default Scheduler;
