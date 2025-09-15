import React, { useState, useEffect } from 'react';
// import { AuthContext } from '../../context/Authprovider'; // We will remove this to fix the error

const AllTask = () => {
    // We will get data directly from localStorage instead of Context to fix the import error.
    const [userData, setUserData] = useState([]);

    // useEffect hook runs after the component mounts
    useEffect(() => {
        // Retrieve the employee data from localStorage
        const storedEmployees = localStorage.getItem('employees');
        
        // If data exists, parse it and update the state
        if (storedEmployees) {
            setUserData(JSON.parse(storedEmployees));
        }
    }, []); // The empty array [] means this effect runs only once, similar to componentDidMount

    // It's a good practice to handle the case where data might still be loading or is empty.
    if (!userData || userData.length === 0) {
        return (
            <div className='p-5 bg-[#1c1c1c] mt-5 rounded text-center text-gray-400'>
                Loading employee data... or no employees found in localStorage.
            </div>
        );
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded-lg text-gray-300 shadow-lg'>
            {/* Header for the task table */}
            <div className='flex justify-between px-4 py-3 mb-3 bg-gray-800 rounded-md'>
                <h2 className='w-1/5 text-sm font-semibold text-center text-white'>Employee Name</h2>
                <h3 className='w-1/5 text-sm font-semibold text-center text-white'>New Tasks</h3>
                <h5 className='w-1/5 text-sm font-semibold text-center text-white'>Active Tasks</h5>
                <h5 className='w-1/5 text-sm font-semibold text-center text-white'>Completed</h5>
                <h5 className='w-1/5 text-sm font-semibold text-center text-white'>Failed</h5>
            </div>
            
            {/* Container for the list of employees */}
            <div>
                {/* Now we map over the userData array (from localStorage) to display each employee's task count. */}
                {userData.map(employee => (
                    <div key={employee.id} className='flex items-center justify-between px-4 py-3 mb-2 transition-all duration-200 bg-gray-700 border border-transparent rounded-md hover:border-emerald-500 hover:bg-gray-600'>
                        <h2 className='w-1/5 font-medium text-center text-white'>{employee.firstname}</h2>
                        <h3 className='w-1/5 font-bold text-center text-blue-400'>{employee.taskCount.newTask}</h3>
                        <h5 className='w-1/5 font-bold text-center text-yellow-400'>{employee.taskCount.active}</h5>
                        <h5 className='w-1/5 font-bold text-center text-green-400'>{employee.taskCount.completed}</h5>
                        <h5 className='w-1/5 font-bold text-center text-red-500'>{employee.taskCount.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTask;

