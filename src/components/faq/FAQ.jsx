import React from 'react';
import Lottie from "lottie-react";
import faq from "../../../public/faq.json";
const FAQ = () => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-8 lg:mb-12 h-[1150px] md:h-[650px] lg:h-[550px]'>
            <div className='w-full md:w-2/5'>
                <Lottie animationData={faq} className="h-[32rem]" />
            </div>
            <div className='flex-1 mx-2 md:mb-4'>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            How do I borrow books from the library?
                        </div>
                        <div className="collapse-content">
                            <p>To borrow books from our library, you need to first create an account on our website. Once logged in, you can search for the book you want using our search bar, and then click on the "Borrow" button next to the book's details. Follow the prompts to complete the borrowing process.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How many books can I borrow at once?
                        </div>
                        <div className="collapse-content">
                            <p>The standard borrowing period is 3. You can't borrow any books if you are already borrow 3. You can borrow more books after returning them.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Can I renew my borrowed books?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, you can usually renew your borrowed books as long as no one else has placed a hold on them. You can renew books online through your account on our website or by contacting the library directly. Please note that there may be a limit on the number of renewals allowed per book.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What should I do if I lose a library book?
                        </div>
                        <div className="collapse-content">
                            <p>If you lose a library book, please contact the library immediately. You will be responsible for paying the replacement cost of the lost item, as well as any associated processing fees. Once the lost item is reported and the replacement cost is paid, you may be able to resume borrowing privileges.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How can I suggest a book for the library to purchase?
                        </div>
                        <div className="collapse-content">
                            <p>We welcome suggestions for new books to add to our collection! You can submit your suggestions through our website by filling out the book suggestion form. While we cannot guarantee that all suggestions will be purchased, we will consider each one carefully.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;