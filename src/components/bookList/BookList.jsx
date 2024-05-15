import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FaCaretRight } from "react-icons/fa6";
const BookList = ({ book }) => {
    const { _id, bookName, author, category, bookQuantity, rating, photo } = book
    const navigate = useNavigate()

    const handleDetails = id => {
        navigate(`/all-books/${id}`)
    }

    const handleUpdate = id => {
        navigate(`/update/${id}`)
    }

    return (
        <div className="border-y border-gray-400 gap-2 p-2 grid grid-cols-5">
            <div>
                <img src={photo} alt="" className="h-32 w-24 object-cover object-center" />
            </div>
            <div>
                <h2>{bookName}</h2>
                <h2>{author}</h2>
            </div>

            <div>
                <h2>{category}</h2>
            </div>

            <div>
                <h2>{bookQuantity}</h2>
            </div>

            <div className="flex flex-col gap-2">
                <button onClick={() => handleDetails(_id)} className="btn bg-[#e2e2e2e7] text-lg font-bold text-black border-none hover:bg-[#e2e2e2] hover:transition-all"><h2 className="flex items-center text-base lg:text-xl 2xl:text-2xl font-bold">Details <FaCaretRight /></h2></button>

                <button onClick={() => handleUpdate(_id)} className="btn bg-[#e2e2e2e7] text-lg font-bold text-black border-none hover:bg-[#e2e2e2] hover:transition-all"><h2 className="flex items-center text-base lg:text-xl 2xl:text-2xl font-bold">Update <FaCaretRight /></h2></button>
            </div>
        </div>
    );
};

export default BookList;