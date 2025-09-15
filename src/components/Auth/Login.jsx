// Login.jsx
import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Error handling ke liye state

    const submitHandler = async (e) => { // Async function banaya agar future mein API call ho
        e.preventDefault();
        setError(''); // Har submit par error reset karein

        // Basic validation
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        try {
            // handleLogin function ko call karein
            const success = await handleLogin(email, password); // Assume handleLogin returns true/false or throws error

            if (success) {
                // Login successful, email aur password reset karein
                setEmail('');
                setPassword('');
            } else {
                // Agar handleLogin false return karta hai ya koi internal error
                setError('Invalid email or password. Please try again.');
            }
        } catch (err) {
            // Agar handleLogin koi error throw karta hai (e.g., network error)
            setError('An unexpected error occurred. Please try again later.');
            console.error("Login error:", err);
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen px-4 bg-gray-100 dark:bg-gray-900'>
            <div className='w-full max-w-md p-8 transition-all duration-300 bg-white shadow-xl dark:bg-gray-800 sm:p-12 rounded-2xl hover:shadow-2xl'>
                <div className='mb-8 text-center'>
                    {/* Aap yahan ek logo image add kar sakte hain */}
                    {/* <img src="/path/to/your/logo.png" alt="Company Logo" className="w-auto h-16 mx-auto mb-4" /> */}
                    <h2 className='mb-2 text-3xl font-extrabold text-gray-900 dark:text-white font-poppins'>
                        Welcome Back
                    </h2>
                    <p className='text-gray-600 dark:text-gray-400 font-roboto'>
                        Sign in to your Employee Management System
                    </p>
                </div>

                <form onSubmit={submitHandler} className='flex flex-col gap-5'>
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='w-full px-5 py-3 text-gray-900 placeholder-gray-400 transition-colors duration-200 border border-gray-300 rounded-lg shadow-sm outline-none dark:border-gray-600 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500'
                            placeholder='name@example.com'
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='w-full px-5 py-3 text-gray-900 placeholder-gray-400 transition-colors duration-200 border border-gray-300 rounded-lg shadow-sm outline-none dark:border-gray-600 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500'
                            placeholder='••••••••'
                        />
                    </div>

                    {error && (
                        <p className="mt-2 text-sm text-center text-red-600 dark:text-red-400">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className='w-full px-5 py-3 mt-4 text-lg font-semibold text-white transition-colors duration-200 transform rounded-lg shadow-md bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 active:scale-95'
                    >
                        Log In
                    </button>
                </form>

                {/* Optional: Add a "Forgot Password" link or signup link */}
                {/* <p className='mt-6 text-sm text-center text-gray-600 dark:text-gray-400'>
                    Forgot your password?{' '}
                    <a href="#" className='font-medium text-emerald-600 hover:text-emerald-500'>
                        Reset it
                    </a>
                </p> */}
            </div>
        </div>
    );
}

export default Login;