import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
import Book from "../../components/book/Book";
AOS.init();

const AllBooks = () => {
    const loadedBooks = useLoaderData()
    const [allBooks, setAllBooks] = useState(loadedBooks)

    return (
        <div className="my-4 lg:my-8 min-h-screen w-11/12 m-auto">
            <Helmet>
                <title>Book Realm | All Books</title>
            </Helmet>
            <h2 className="text-center text-2xl lg:text-3xl font-bold">All Books</h2>
            <div data-aos="fade-up"
                data-aos-duration="1000" className="mt-4 lg:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2 lg:gap-4">
                {
                    allBooks?.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default AllBooks;