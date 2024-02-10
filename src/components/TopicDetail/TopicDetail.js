import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const TopicDetail = () => {
   
        const topicInfo = useLoaderData();
        console.log(topicInfo.data.questions)
        return (
            <div className=' text-center mt-14 font-bold text-pink-950'>
                <h2 className='text-3xl'>Quize of {topicInfo.data.name}.</h2>
    
                {
                   topicInfo.data.questions.map((item,idx) => <Questions
                   key={item.id}
                   item = {item}
                   idx = {idx}
                   ></Questions>) 
                }
    
            </div>
        );
   
};

export default TopicDetail;