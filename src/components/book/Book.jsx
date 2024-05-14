import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FaCaretRight } from "react-icons/fa6";

const Book = ({ book }) => {
    const { _id, bookName, author, category, bookQuantity, rating, photo } = book
    const navigate = useNavigate()

    const handleDetails = id => {
        navigate(`/all-books/${id}`)
    }


    return (
        <div className="card border border-gray-700 shadow-sm image-full">
            <figure><img src={photo} alt="book" className="rounded-lg object-cover object-center" /></figure>

            <div className="card-body gap-5 pl-3 justify-end">
                <div>
                    <h2 className="card-title text-white shadow-sm font-bold text-xl lg:text-3xl 2xl:text-4xl mb-1 lg:mb-3">{bookName}</h2>
                    <h2 className="font-bold text-white text-lg lg:text-xl 2xl:text-3xl mb-1 lg:mb-6">{author}</h2>
                    <h2 className="text-white text-base lg:text-xl 2xl:text-2xl font-bold">#{category}</h2>
                </div>

                <div className="card-actions flex-nowrap flex-col">
                    <h2 className="font-bold text-white text-lg lg:text-xl 2xl:text-3xl mb-1 lg:mb-6">Remaining: {bookQuantity}</h2>
                    <h2 className="">  <ReactStars
                        count={5}
                        value={rating}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                        isHalf={false}
                    /></h2>
                    <button onClick={() => handleDetails(_id)} className="btn bg-[#e2e2e2e7] text-lg font-bold text-black border-none hover:bg-[#e2e2e2] hover:transition-all"><h2 className="flex items-center text-base lg:text-xl 2xl:text-2xl font-bold">Details <FaCaretRight /></h2></button>
                </div>
            </div>
        </div>
    );
};

export default Book;