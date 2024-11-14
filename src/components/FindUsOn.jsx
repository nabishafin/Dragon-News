import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUsOn = () => {

    return (
        <div className='mt-7'>
            <h1 className='font-bold'>Find On Us</h1>
            <div>
                <button className=" flex items-center justify-start gap-2 border-2 rounded-md  p-2 w-full mt-5">
                    <FaFacebookF color="blue" /> FaceBook
                </button>

                <button className="flex items-center justify-start gap-2 border-2 rounded-md  p-2 w-full mt-3">
                    <FaInstagram /> InstraGram
                </button>
                <button className="flex items-center justify-start gap-2  border-2 rounded-md p-2 w-full mt-3">
                    <FaTwitter color='blue' /> Twitter
                </button>
            </div>
        </div>
    );
};

export default FindUsOn;