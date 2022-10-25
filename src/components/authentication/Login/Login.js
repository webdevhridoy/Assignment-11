import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                // toast.success('Successfully logged');

            })
            .catch(error => {
                console.error(error);
            });

    };

    return (
        <div className='flex justify-center items-center align-middle h-screen md:m-0 m-5'>
            <div className="flex flex-col just w-full max-w-md p-12 space-y-4 text-white text-center dark:bg-green-500 dark:text-white-100">
                <h1 className="text-3xl font-semibold">Sign in to your account</h1>
                <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-white">Email</label>
                        <input type="email" name="email" id="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md text-black " />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md text-black" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link rel="noopener noreferrer" href="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-white">Sign in</button>
                    <div>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2 accent-violet-400" />
                                <label for="remember" className="text-sm dark:text-white-100 text-white'">Remember me</label>
                            </div>
                            <p className="text-sm dark:text-white-100 text-white" href="/">Don't have an account?
                                <Link to='/register' className="underline dark:text-gray-100"> Sign up </Link>
                            </p>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;