import { Link, useLoaderData } from 'react-router-dom';

const CourseInfo = () => {
    const courseInfo = useLoaderData();
    const { course_name, image, price, rating, author, author_img, students, category, details, id } = courseInfo;
    return (
        <div>
            <div
                style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://i.ibb.co/MVwcg08/getty-492755552-336645.jpg")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundBlendMode: '',
                }}>
                <div className='flex justify-center items-center align-middle h-64'>
                    <div>
                        <h2 className='text-2xl md:text-4xl text-white'>{course_name}</h2>
                        <div className='flex justify-center items-center mt-5'>
                            <div className='flex justify-center items-center mx-3'>
                                <img className='w-11 h-11 rounded-3xl mx-1' src={author_img} alt="" />
                                <h2 className='text-white mx-1'>{author}</h2>
                            </div>
                            <div className='flex justify-center items-center mx-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mx-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                                <h2 className='text-white mx-1'>{students}</h2>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <Link className='bg-outline-500 border-2 text-white border-green-500 hover:bg-green-500 hover:text-white px-2 py-2 rounded-3xl duration-500 ease-in-out'>Download PDF</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* course description */}
                <div className='flex justify-center items-center mt-5'>
                    <span className="block text-xs font-medium tracking-widest uppercase text-green-600 mx-2">Category: {category}</span>
                    <span className="block text-xs font-medium tracking-widest uppercase text-green-600 mx-2">Price: ${price}</span>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span className="block text-xs font-medium tracking-widest uppercase text-green-600 ml-1">{rating}</span>
                    </div>
                </div>
                <hr className='border-b-2 border-b-green-100 mx-auto w-1/2 my-5' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center mx-5 md:mx-10  pb-10 md:py-10'>
                <div className='text-center md:text-left mr-8'>
                    <h2 className='text-3xl font-semibold my-2'>Course Description</h2>
                    <p className="text-gray-500 text-base my-2">{details}</p>
                    <div className='mt-5 mb-5'>
                        <Link to={`/course-details/checkout/${id}`} className='bg-outline-500 border-2 border-green-500 hover:bg-green-500 hover:text-white px-2 py-2 rounded-3xl duration-500 ease-in-out'>Get premium access</Link>
                    </div>
                </div>
                <div>
                    <img className='w-full h-auto shadow-lg rounded-3xl' src={image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default CourseInfo;