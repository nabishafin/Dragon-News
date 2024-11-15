import React from 'react';
import first from '../assets/class.png'
import play from '../assets/playground.png'
import swiming from '../assets/swimming.png'

const Qzone = () => {
    return (
        <div className='mt-7 bg-[#F3F3F3] p-3 '>
            <h1 className='font-bold'>Q-Zone</h1>
            <div>
                <img src={first} alt="" />
                <img src={play} alt="" />
                <img src={swiming} alt="" />
            </div>
        </div>
    );
};

export default Qzone;