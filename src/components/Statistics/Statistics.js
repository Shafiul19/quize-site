import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const statistics = useLoaderData();
    console.log(statistics.data)
    return (
        <div className='mt-16'>
            <h3 className='text-3xl mb-4 pl-12'>Line chart draw based on topics and question numbers:</h3>
            <LineChart width={500} height={300} data={statistics.data}>
            
                <XAxis dataKey="name" />
                <YAxis dataKey= "total" />
                <Tooltip />
                
                <Line type="monotone" dataKey="name" stroke="#8884d8" />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
     
        </div>
    );
};

export default Statistics;