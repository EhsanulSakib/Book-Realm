import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { BASE_URL } from '../../constVariables/constVariable';
import BorrowCard from '../borrowCard/BorrowCard';

const Borrowed = () => {
    const { user } = useContext(AuthContext);
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    const url = `${BASE_URL}/borrow?email=${user?.email}`;
    useEffect(() => {
        fetch(url, { credentials: "include" })
            .then(res => res.json())
            .then(data => setBorrowedBooks(data))
    }, [url]);
    return (
        <div>
            <h2 className='text-xl md:text-2xl lg:text-3xl text-center font-bold mt-4 md:mt-8 lg:mt-12'>Borrowed Books</h2>
            <ul className='w-11/12 m-auto my-4 md:my-8 lg:my-12'>
                {
                    borrowedBooks?.map(card => <BorrowCard key={card._id} card={card} borrowedBooks={borrowedBooks} setBorrowedBooks={setBorrowedBooks}></BorrowCard>)
                }
            </ul>
        </div>
    );
};

export default Borrowed;