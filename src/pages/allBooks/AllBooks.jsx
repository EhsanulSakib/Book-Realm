import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
import Book from "../../components/book/Book";
import { IoGridOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import BookList from "../../components/bookList/BookList";
AOS.init();

const AllBooks = () => {
    const loadedBooks = useLoaderData()
    const [allBooks, setAllBooks] = useState(loadedBooks)
    const [filter, setFilter] = useState(allBooks)
    const [isGrid, setIsGrid] = useState(true)

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
        <div className="my-4 lg:my-8 min-h-screen w-full md:w-11/12 m-auto">
            <Helmet>
                <title>Book Realm | All Books</title>
            </Helmet>
            <h2 className="text-center text-2xl lg:text-3xl font-bold">All Books</h2>


            <div className="flex gap-2 justify-end items-center">
                <div>
                    <select className="bg-transparent rounded-none border border-gray-500 p-3 text-lg" onChange={(e) => handleFilter(e.target.value)}>
                        <option value="all" className="text-black">All</option>
                        <option value="available" className="text-black">Available</option>
                    </select>
                </div>

                <div className="flex gap-1">
                    <button onClick={() => setIsGrid(true)} className="btn bg-transparent text-2xl"><IoGridOutline /></button>
                    <button onClick={() => setIsGrid(false)} className="btn bg-transparent text-2xl"><IoIosList /></button>
                </div>
            </div>


            {isGrid ?
                <div className="mt-4 lg:mt-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                    {
                        filter?.map(book => <Book key={book._id} book={book}></Book>)
                    }
                </div>
                :
                <div className="mt-4 lg:mt-8">
                    {
                        filter?.map(book => <BookList key={book._id} book={book}></BookList>)
                    }
                </div>
            }
        </div>
    );
};

export default AllBooks;