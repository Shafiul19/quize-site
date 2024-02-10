import React from 'react';
import { ToastContainer} from 'react-toastify';

const Options = ({option,handleQuize}) => {
    console.log(option);

      return (
        <div className='flex items-center'>
            
            <p>
                <input type="radio" onClick={() => handleQuize(option)}/>
                <ToastContainer />
            </p>
            <p className='ml-2'><small>{option}</small></p>
            
        </div>
    );
};

export default Options;