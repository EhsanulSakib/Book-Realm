import React from 'react';
import Lottie from "lottie-react";
import faq from "../../../public/faq.json";
const FAQ = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='w-full md:w-2/5'>
                <Lottie animationData={faq} className="h-[32rem]" />
            </div>
        </div>
    );
};

export default FAQ;