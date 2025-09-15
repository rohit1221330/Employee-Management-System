import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/Authprovider';

const CreateTask = () => {
    // AuthContext se employees ka data aur usse update karne ka function lein
    const [employees, setEmployees] = useContext(AuthContext);

    // Form fields ke liye states
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [assignedToId, setAssignedToId] = useState(''); // Employee ID save karne ke liye
    const [category, setCategory] = useState('');

    // User ko feedback (Success/Error message) dene ke liye state
    const [message, setMessage] = useState('');

    // Form submit hone par yeh function chalega
    const submitHandler = (e) => {
        e.preventDefault();
        setMessage(''); // Purana message clear karein

        // Check karein ki user ne employee select kiya hai ya nahi
        if (!assignedToId) {
            setMessage({ type: 'error', text: 'Please select an employee to assign the task.' });
            return;
        }

        // Naye task ka object banayein
        const newTaskObject = {
            id: Date.now(), // Task ko ek unique ID dein
            title,
            description,
            date,
            category,
            status: 'active', // Task ka initial status 'active' rakhein
        };

        // State ko immutably (bina direct badle) update karein
        const updatedEmployees = employees.map(emp => {
            if (emp.id === parseInt(assignedToId)) {
                // Sahi employee milne par, uska naya object return karein with new task
                return {
                    ...emp,
                    tasks: [...emp.tasks, newTaskObject]
                };
            }
            // Baaki employees ko waise hi return karein
            return emp;
        });

        // Step 1: React ke Context state ko update karein (taaki UI turant update ho)
        setEmployees(updatedEmployees);

        // Step 2: Local Storage ko direct update karein (taaki data refresh par bhi save rahe)
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        // Success message set karein
        setMessage({ type: 'success', text: 'Task assigned successfully!' });

        // Form ke saare fields ko reset (khaali) kar dein
        setTitle('');
        setDescription('');
setDate('');
        setAssignedToId('');
        setCategory('');
    };
    
    // Yeh useEffect message ko 3 second baad apne aap hata dega
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className='p-6 mt-5 bg-white shadow-lg rounded-xl dark:bg-gray-800'>
            <h2 className='mb-6 text-2xl font-bold text-gray-800 dark:text-white font-poppins'>Create a New Task</h2>
            <form onSubmit={submitHandler} className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                
                {/* Left Column */}
                <div className='flex flex-col gap-5'>
                    <div>
                        <label htmlFor="taskTitle" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Task Title</label>
                        <input id="taskTitle" value={title} onChange={(e) => setTitle(e.target.value)} required className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600' type="text" placeholder='e.g., Design new dashboard'/>
                    </div>

                    <div>
                        <label htmlFor="assignTo" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Assign To</label>
                        {/* UX Improvement: Text input ki jagah Dropdown ka istemaal */}
                        <select id="assignTo" value={assignedToId} onChange={(e) => setAssignedToId(e.target.value)} required className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600'>
                            <option value="" disabled>Select an employee</option>
                            {employees.map(emp => (
                                <option key={emp.id} value={emp.id}>{emp.firstname}</option>
                            ))}
                        </select>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="taskDate" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Due Date</label>
                            <input id="taskDate" value={date} onChange={(e) => setDate(e.target.value)} required className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600' type="date"/>
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                            <input id="category" value={category} onChange={(e) => setCategory(e.target.value)} required className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600' type="text" placeholder='e.g., Design'/>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className='flex flex-col'>
                    <label htmlFor="taskDescription" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                    <textarea id="taskDescription" value={description} onChange={(e) => setDescription(e.target.value)} required rows="8" className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600' placeholder='Provide a detailed description of the task...'></textarea>
                </div>

                {/* Full-width section for Button and Message */}
                <div className='md:col-span-2'>
                    <button type="submit" className='w-full px-5 py-3 mt-2 text-base font-semibold text-white transition-colors duration-200 transform rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-95'>
                        Create & Assign Task
                    </button>
                    
                    {message && (
                        <div className={`mt-4 p-3 rounded-lg text-center text-sm ${message.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'}`}>
                            {message.text}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CreateTask;