import Swal from 'sweetalert2'
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { BASE_URL } from '../../constVariables/constVariable';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
    const { darkMode, user } = useContext(AuthContext)
    const [quantity, setQuantity] = useState(0)
    const [rating, setRating] = useState('')
    const navigate = useNavigate()

    const handleAddBooks = event => {
        event.preventDefault();

        const form = event.target

        const bookName = form.bookName.value
        const category = form.category.value
        const bookQuantity = form.bookQuantity.value
        const rating = form.rating.value
        const author = form.author.value
        const photo = form.photo.value
        const description = form.description.value
        const aboutBook = form.aboutBook.value

        const newBooks = { bookName, category, bookQuantity, rating, author, photo, description, aboutBook }
        console.log(newBooks)
        fetch(`${BASE_URL}/books`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Book Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        navigate('/all-books')
                    })
                }
            })
    }

    return (
        <div className="w-11/12 md:w-5/6 m-auto my-4 md:my-8 lg:my-12 min-h-[70vh] shadow-xl p-4 md:p-8">
            <h2 className="font-extrabold text-center text-2xl md:text-3xl mb-4">Add a Book</h2>

            <form onSubmit={handleAddBooks} className="w-11/12 m-auto md:grid grid-cols-2 gap-4 my-4 md:my-8 lg:my-12 rounded-lg">
                <div>
                    <h2 className="mb-2 font-bold text-lg">Book Name:</h2>
                    <input required type="text" placeholder="Enter item name" className={`input rounded-none input-bordered w-full bg-inherit`} name="bookName" />
                </div>
                <div>
                    <h2 className="mb-2 font-bold text-lg">Category Name:</h2>
                    <select required className={`input rounded-none input-bordered ${darkMode ? ' bg-gray-800' : ' bg-slate-100'} w-full cursor-pointer`} name="category">
                        <option value="">Select a Category </option>
                        <option value="Novel"> Fiction</option>
                        <option value="Thriller">Romance</option>
                        <option value="History">Fantasy</option>
                        <option value="Drama">Drama</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>

                <div>
                    <h2 className="mb-2 font-bold text-lg">Quantity of the book:</h2>
                    <input type="text" onKeyPress={(event) => {
                        const isValidKey = /^\d*$/.test(event.key) || event.key === 'Backspace' || event.key === 'Delete';
                        if (!isValidKey) {
                            event.preventDefault();
                        }
                    }}
                        onChange={(event) => {
                            const input = event.target.value;
                            if (/^\d*$/.test(input)) {
                                setQuantity(input);
                            }
                        }} required placeholder="Enter Quantity" className="input rounded-none input-bordered w-full bg-inherit" name="bookQuantity" />
                </div>
                <div>
                    <h2 className="mb-2 font-bold text-lg">Rating:</h2>
                    <input required type="number"
                        min="1"
                        max="5"
                        value={rating}
                        onKeyPress={(event) => {
                            const key = event.keyCode || event.which;
                            const isValidKey = (key >= 48 && key <= 53) || key === 8;
                            if (!isValidKey) {
                                event.preventDefault();
                            }
                        }}
                        onChange={(event) => {
                            const input = event.target.value;
                            if (/^[1-5]?$/.test(input)) {
                                setRating(input);
                            }
                        }} placeholder="Enter Rating (1-5)" className="input rounded-none input-bordered w-full bg-inherit" name="rating" />
                </div>


                <div>
                    <h2 className="mb-2 font-bold text-lg">Author Name:</h2>
                    <input required type="text" placeholder="Enter item name" className={`input rounded-none input-bordered w-full bg-inherit`} name="author" />
                </div>


                <div className="col-span-2">
                    <h2 className="mb-2 font-bold text-lg">Photo URL:</h2>
                    <input required type="text" placeholder="Enter photo URL" className="mb-4 input rounded-none input-bordered w-full bg-inherit" name="photo" />
                </div>

                <div className='col-span-2 mb-4'>
                    <h2 className="mb-2 font-bold text-lg">Short Description:</h2>
                    <textarea placeholder="Enter Short Description about the Product" className="input rounded-none input-bordered w-full bg-inherit max-h-24" name="description" />
                </div>

                <div className='col-span-2 mb-4 '>
                    <h2 className="mb-2 font-bold text-lg">About the book:</h2>
                    <textarea placeholder="Enter Short Description about the Product" className="input rounded-none input-bordered w-full bg-inherit max-h-24" name="aboutBook" />
                </div>

                <input type="submit" value="Add Book" className="btn text-lg btn-info font-bold text-white col-span-2 py-2 w-full" />
            </form>
        </div>
    );
};

export default AddBooks;