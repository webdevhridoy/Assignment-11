import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className='mx-4 my-5'>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-green-500">
                    <div className="flex items-center justify-between">
                        <p className="px-2 py-1 font-bold rounded bg-white dark:text-gray-900">CORS</p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline text-white">What is CORS</h2>
                        <p className="mt-2 text-white">A cors is a cross-origin resource sharing. It is a way to allow resources to be shared across domains that would not otherwise be able to share data.</p>
                        <p className="mt-2 text-white">CORS are used by browsers, servers and web services to communicate with each other. A browser will send the request for cross-domain access and the server will grant or deny it based on its own configuration.</p>
                    </div>
                    <div className="center mt-5 mb-2">
                        <Link to='/categories' className="underline  text-white">Our Course</Link>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-4 my-5'>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-green-500">
                    <div className="flex items-center justify-between">
                        <p className="px-2 py-1 font-bold rounded bg-white dark:text-gray-900">Firebase</p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline text-white">Why Firebase is Used?</h2>
                        <p className="mt-2 text-white">Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.</p>
                        <p className="mt-2 text-white"><strong>Top functionalities are:</strong></p>
                        <p className="mt-2 text-white">
                            <strong>Firebase Database:</strong> used to store users data like chat messages, users details and other metadata <br />
                            <strong>Firebase Cloud Storage:</strong> used to store user-generated content like the profile picture, multimedia messages, etc. <br />
                            <strong>Firebase Cloud Messaging:</strong> used to send notification <br />
                            <strong>Firebase Remote Config:</strong> used to perform A/B testing on the go
                        </p>
                    </div>
                    <div className="center mt-5 mb-2">
                        <Link to='/categories' className="underline  text-white">Our Course</Link>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-4 my-5'>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-green-500">
                    <div className="flex items-center justify-between">
                        <p className="px-2 py-1 font-bold rounded bg-white dark:text-gray-900">CORS</p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline text-white">What is CORS</h2>
                        <p className="mt-2 text-white">A cors is a cross-origin resource sharing. It is a way to allow resources to be shared across domains that would not otherwise be able to share data.</p>
                        <p className="mt-2 text-white">CORS are used by browsers, servers and web services to communicate with each other. A browser will send the request for cross-domain access and the server will grant or deny it based on its own configuration.</p>
                    </div>
                    <div className="center mt-5 mb-2">
                        <Link to='/categories' className="underline  text-white">Our Course</Link>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-4 my-5'>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-green-500">
                    <div className="flex items-center justify-between">
                        <p className="px-2 py-1 font-bold rounded bg-white dark:text-gray-900">CORS</p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline text-white">What is CORS</h2>
                        <p className="mt-2 text-white">A cors is a cross-origin resource sharing. It is a way to allow resources to be shared across domains that would not otherwise be able to share data.</p>
                        <p className="mt-2 text-white">CORS are used by browsers, servers and web services to communicate with each other. A browser will send the request for cross-domain access and the server will grant or deny it based on its own configuration.</p>
                    </div>
                    <div className="center mt-5 mb-2">
                        <Link to='/categories' className="underline  text-white">Our Course</Link>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;