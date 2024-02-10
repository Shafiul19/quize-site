import React from 'react';
import Banner from '../Banner/Banner';
import Topic from '../Topic/Topic';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
     const topics = useLoaderData();
    console.log(topics.data)

    return (
            <div>
                <Banner></Banner>
                <div className='grid md:grid-cols-4 mt-16 gap-4'>
                    {
                    topics.data.map(topic => <Topic
                    key={topic.id}
                    topic = {topic}
                    ></Topic>)
                    }
                </div>
                    
            </div>
    );
};

export default Home;