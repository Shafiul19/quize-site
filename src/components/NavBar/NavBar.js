import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
 
const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-purple-200 md:flex items-center h-10'>

            <div className='flex justify-between'>
                <span className='font-extrabold pl-2'>QuizeSite</span>
                <div  onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                    {
                        open ? <XMarkIcon /> : <Bars3Icon />
                    } 
                </div>
         
            </div>
            
            <ul className={`md:flex w-full bg-purple-200 text-center justify-center absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                <li className='mr-12 font-bold'><NavLink className={({isActive}) => isActive ? 'text-orange-400' : undefined} to ="/">Home</NavLink></li>
                <li className='mr-12 font-bold'><NavLink className={({isActive}) => isActive ? 'text-orange-400' : undefined} to ="/statistics">Statistics</NavLink></li>
                <li className='mr-12 font-bold'><NavLink className={({isActive}) => isActive ? 'text-orange-400' : undefined} to ="/blog">Blog</NavLink></li>
            </ul>

         
           
           

          
         

           
            
           
    </nav>
    );
};

export default NavBar;