import React from 'react';

const Blog = () => {
    return (
        <>
            <div className='grid md:grid-cols-2 mx-12 gap-4 my-20'>
                <div className='shadow-lg p-8 rounded-md my-20 mx-auto'>
                    <h3 className='my-2'>1. What is cors?</h3>
                    <p>Ans : The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.</p>
                </div>
                <div className='shadow-lg p-8 rounded-md my-20 mx-auto'>
                    <h3>2. why are you usign firebase?</h3>
                    <p className='my-2'>Ans : Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
                </div>
                <div className='shadow-lg p-8 rounded-md my-20 mx-auto'>
                    <h3 className='my-2'>3. How does the privet router?</h3>
                    <p>Ans : The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
                <div className='shadow-lg p-8 rounded-md my-20 mx-auto'>
                    <h3 className='my-2'>4. How Does node work?</h3>
                    <p>Ans : Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. </p>
                </div>
            </div>
        </>
    );
};

export default Blog;