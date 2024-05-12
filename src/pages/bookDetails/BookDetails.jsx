import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import ReactStars from "react-rating-stars-component";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const BookDetails = () => {
    const book = useLoaderData()
    const { user, darkMode } = useContext(AuthContext)

    const { bookName, category, rating, author, aboutBook, photo, description } = book

    const handleBorrow = () => {
        Swal.fire({
            title: 'Contact',
            text: `For order this product send mail at ${userEmail}`,
            icon: 'info',
            confirmButtonText: 'Ok'
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
                    <img src={photo} alt="" className=" w-full md:w-96 md:h-96 object-cover object-center shadow-md rounded-md" />
                </div>

                <div data-aos="fade-left" data-aos-anchor-placement="top-center" duration="1000" delay="500" className="w-full flex flex-col lg:items-center lg:justify-between">
                    <div className="w-full" >
                        <h1 className="text-3xl lg:text-4xl font-bold">{bookName}</h1>
                        <p className="py-2 text-base font-semibold text-xl"><span className="font-extrabold">Author:</span> {author}</p>
                        <p className="font-semibold text-lg "><span>#{category}</span></p>

                        <h2> <ReactStars
                            count={5}
                            value={rating}
                            size={32}
                            activeColor="#ffd700"
                            edit={false}
                            isHalf={false}
                        /></h2>

                        <p className="my-4 text-sm lg:text-base"><span className="font-bold">About the Book:</span> {aboutBook}</p>

                        <p className="my-4 text-sm lg:text-base"><span className="font-bold">Description:</span> {description}</p>


                    </div>

                    <div className="w-full lg:w-1/2 flex self-end flex-col lg:items-end">
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn border-none text-white bg-blue-400 hover:bg-blue-500 text-lg w-full md:w-44">Borrow</button>
                    </div>
                </div>
            </div>


            <dialog id="my_modal_2" className="modal">
                <div className={`modal-box ${darkMode ? 'bg-gray-800 text-slate-100' : 'bg-slate-100 text-gray-800'}`}>
                    <h3 className="font-bold text-lg text-center">Borrow this Book? </h3>
                    <form onSubmit={handleBorrow}>

                        <h2 className="mb-2 font-bold text-lg">User Name:</h2>
                        <input required type="text" placeholder="Enter User Name" defaultValue={user.displayName} className={` mb-4 input rounded-none input-bordered w-full bg-inherit`} name="userName" />

                        <h2 className="mb-2 font-bold text-lg">User Email:</h2>
                        <input required type="text" placeholder="Enter User Email" defaultValue={user.email} className={`mb-4 input rounded-none input-bordered w-full bg-inherit`} name="userEmail" />


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