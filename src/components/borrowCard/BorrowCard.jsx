import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../constVariables/constVariable';

const BorrowCard = ({ card, borrowedBooks, setBorrowedBooks }) => {
    const { books } = useContext(AuthContext)
    const { bookId, borrowDate, returnDate } = card

    const selectBook = books.find(book => bookId === book._id)

    const { _id, photo, bookName, category } = selectBook

    const handleReturn = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to return this book?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${BASE_URL}/borrow/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            setBorrowedBooks(prevs => prevs.filter(rmn => rmn.bookId !== _id))
                            Swal.fire({
                                title: "Returned!",
                                text: "Your returned the book",
                                icon: "success"
                            })
                        }
                    })
            }
        });
    }
    return (
        <li className='flex gap-4 items-center rounded-lg px-4 shadow-md my-4 py-2'>
            <div >
                <img src={photo} alt="" className=' w-32 lg:w-44 object-cover object-center' />
            </div>
            <div>
                <h2 className='text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold'>{bookName}</h2>
                <h2 className='text-sm lg:text-lg 2xl:text-xl font-semibold mt-1'>#{category}</h2>

                <h2 className='mt-4 font-semibold text-xs md:text-base xl:text-lg'>Borrowed Date: {borrowDate}</h2>
                <h2 className='font-semibold text-xs md:text-base xl:text-lg'>Return Date: {returnDate}</h2>

                <button className='mt-4 btn text-sm md:text-base lg:text-lg xl:text-xl text-white font-bold btn-error' onClick={handleReturn}>Return</button>
            </div>
        </li>
    );
};

export default BorrowCard;