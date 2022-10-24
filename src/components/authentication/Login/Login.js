import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center align-middle h-screen md:m-0 m-5'>
            <div className="flex flex-col just w-full max-w-md p-12 space-y-4 text-white text-center dark:bg-green-500 dark:text-white-100">
                <h1 className="text-3xl font-semibold">Sign in to your account</h1>
                <form novalidate="" className="space-y-4 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="email" className="block text-white dark:text-white-100">Your name</label>
                        <input type="email" name="email" id="username" placeholder="Write your email" className="w-full px-4 py-3 rounded-md dark:border-green-700 dark:bg-green-900 dark:text-white-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-white dark:text-white-100">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-green-700 dark:bg-green-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link rel="noopener noreferrer" className='dark:text-white-100 text-white' href="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2 accent-violet-400" />
                            <label for="remember" className="text-sm dark:text-white-100 text-white'">Remember me</label>
                        </div>
                        <p className="text-sm dark:text-white-100 text-white" href="/">Don't have an account?
                            <Link to='/register' className="underline dark:text-gray-100"> Sign up </Link>
                        </p>
                    </div>
                    <button type="button" className="px-8 py-3 space-x-2 font-semibold rounded bg-green-500 dark:bg-white dark:text-gray-900 hover:bg-green-800 hover:text-white duration-500 ease-in-out">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;