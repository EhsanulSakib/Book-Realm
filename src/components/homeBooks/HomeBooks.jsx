import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Book from "../book/Book";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeBooks = () => {
    const { books } = useContext(AuthContext)

    let showBooks = books
    if (books.length >= 6) {
        showBooks = books.slice(0, 6)
    }

    return (
        <div data-aos="fade-up"
            data-aos-duration="1000" className="w-11/12 pb-2 md:pb-4 lg:pb-8 m-auto flex flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-bold">All books</h2>
            <div className="m-auto my-4 lg:my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-6 gap-4">
                {
                    showBooks?.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
            <Link to='/all-books' className="text-lg lg:text-xl self-end"><h2 className="font-bold flex items-center gap-1 text-blue-400">View All Books <FaAngleDoubleRight /></h2></Link>
        </div>
    );
};

export default HomeBooks;