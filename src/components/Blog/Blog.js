import React from 'react';

const Blog = () => {
    return (
        <div className='mt-16 ml-2'>
           <div className='mb-10'>
                <h3 className='text-3xl'>What is the purpose of react router?</h3>
                <p>React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>
           </div>
           <div className='mb-10'>
                <h3 className='text-3xl'>How does works Context API?</h3>
                <p>Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components. Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p> 
           </div>
           <div>
                <h3 className='text-3xl'>What is useRef hook in reactjs?</h3>
                <p>In React. js, useRef is a hook that allows you to create a mutable reference to an element or a value. Unlike the useState hook, updating a useRef does not trigger a re-render of the component. Refs are a function that use to access the DOM from components. You only need to attach a ref to the element in your application to provide access to it from anywhere within your component without making use of props and all. We can also use Refs to direct access to React elements and use callbacks with them.</p>
           </div>
        </div>
    );
};

export default Blog;