import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import ReactStars from "react-rating-stars-component";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { BASE_URL } from "../../constVariables/constVariable";


const BookDetails = () => {
    const book = useLoaderData()
    const { user, darkMode } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const { _id, bookName, category, bookQuantity, rating, author, aboutBook, photo, description } = book
    let date = new Date()
    let currentDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
    const handleBorrow = event => {
        event.preventDefault();
        setError('')

        const form = event.target

        const userName = form.userName.value
        const userEmail = form.userEmail.value
        const bookId = _id
        const borrowDate = currentDate
        const returnDate = form.returnDate.value

        const borrowBook = { bookId, userName, userEmail, borrowDate, returnDate }
        console.log(borrowBook)
        fetch(`${BASE_URL}/borrow`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(borrowBook)
        })
            .then(res => res.json())
            .then(data => {
                const modal = document.getElementById('my_modal_1');
                modal.close();
                if (data.message) {
                    Swal.fire({
                        title: 'Error!',
                        text: data.message,
                        icon: 'error',
                        confirmButtonText: 'Ok',
                    })
                }
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Book Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    }).then(() => {
                        navigate('/all-books')
                    })
                }
            })
    }


    return (
        <div className="min-h-screen w-11/12 my-4 m-auto">
            <Helmet>
                <title>Book Realm | Book Details</title>
            </Helmet>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">Book Details</h2>

            <div className=" my-4 lg:my-8 flex flex-col gap-8 md:flex-row justify-center shadow-2xl p-4 border border-gray-300 rounded-md">
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" duration="1000" delay="500" >
                    <img src={photo} alt="" className=" w-full md:w-96 object-cover object-center shadow-md rounded-md" />
                </div>

                <div data-aos="fade-left" data-aos-anchor-placement="top-center" duration="1000" delay="500" className="w-full flex flex-col lg:items-center lg:justify-between">
                    <div className="w-full" >
                        <h1 className="text-3xl lg:text-4xl font-bold">{bookName}</h1>
                        <p className="py-2 font-semibold text-xl"><span className="font-extrabold">Author:</span> {author}</p>
                        <p className="font-semibold text-lg "><span>#{category}</span></p>

                        <h2> <ReactStars
                            count={5}
                            value={parseInt(rating)}
                            size={32}
                            activeColor="#ffd700"
                            edit={false}
                            isHalf={false}
                        /></h2>

                        <p className="my-4 text-sm lg:text-base"><span className="font-bold">About the Book:</span> {aboutBook}</p>

                        <p className="my-4 text-sm lg:text-base"><span className="font-bold">Description:</span> {description}</p>


                    </div>

                    <div className="w-full lg:w-1/2 flex self-end flex-col lg:items-end">
                        <h2 className="text-xl lg:text-2xl mb-4 font-bold">Book Remaining: {bookQuantity}</h2>
                        {
                            bookQuantity == 0 ?
                                <button disabled className={`btn border-none disabled:text-black text-lg w-full md:w-44`}>Borrow</button>
                                :
                                <button onClick={() => document.getElementById('my_modal_1').showModal()} className={`btn border-none text-white bg-blue-400 hover:bg-blue-500 text-lg w-full md:w-44`}>Borrow</button>
                        }
                    </div>
                </div>
            </div>


            <dialog id="my_modal_1" className="modal">
                <div className={`modal-box ${darkMode ? 'bg-gray-800 text-slate-100' : 'bg-slate-100 text-gray-800'}`}>
                    <h3 className="font-bold text-lg text-center">Borrow this Book? </h3>
                    <form onSubmit={handleBorrow} >
                        <h2 className="mb-2 font-bold text-lg">User Name:</h2>
                        <input required type="text" placeholder="Enter User Name" defaultValue={user.displayName} className={` mb-4 input rounded-none input-bordered w-full bg-inherit`} name="userName" />

                        <h2 className="mb-2 font-bold text-lg">User Email:</h2>
                        <input required type="text" placeholder="Enter User Email" defaultValue={user.email} className={`mb-4 input rounded-none input-bordered w-full bg-inherit`} name="userEmail" />

                        <h2 className="mb-2 font-bold text-lg">Return Date:</h2>

                        <input required type="date" name="returnDate" className="mb-36 w-full bg-transparent" />


                        <input type="submit" value="Borrow" className="btn text-lg btn-info font-bold text-white col-span-2 py-2 w-full" />
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default BookDetails;