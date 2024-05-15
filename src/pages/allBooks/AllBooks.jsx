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
    const [filter, setFilter] = useState(allBooks)


    const availableBooks = allBooks.filter(item => parseInt(item.bookQuantity) > 0)

    const handleFilter = (value) => {
        console.log(value)
        if (value == 'all') {
            setFilter(allBooks)
        }
        else {
            setFilter(availableBooks)
        }
    }
    return (
        <div className="my-4 lg:my-8 min-h-screen w-4/5 md:w-11/12 m-auto">
            <Helmet>
                <title>Book Realm | All Books</title>
            </Helmet>
            <h2 className="text-center text-2xl lg:text-3xl font-bold">All Books</h2>

            <div className="flex justify-end">
                <select className="bg-transparent rounded-none border border-gray-500 p-2 text-lg" onChange={(e) => handleFilter(e.target.value)}>
                    <option value="all" className="text-black">All</option>
                    <option value="available" className="text-black">Available</option>
                </select>
            </div>



            <div data-aos="fade-up"
                data-aos-duration="1000" className="mt-4 lg:mt-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {
                    filter?.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default AllBooks;