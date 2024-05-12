import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Book = ({ book }) => {
    const { _id, bookName, category, rating, photo } = book
    const navigate = useNavigate()

    const handleDetails = id => {
        navigate(`/all-books/${id}`)
    }


    return (
        <div className="card rounded border border-gray-700 shadow-xl">
            <div className="flex h-[450px] flex-col justify-between">
                <div>
                    <figure><img src={photo} alt="craft" className="w-full h-52 object-cover object-center" /></figure>
                    <div className="card-body p-2">
                        <h2 className="card-title font-bold text-xl mb-2">{bookName}</h2>
                        <h2 className="font-semibold"><span className="bg-purple-400 p-1 rounded-lg">#{category}</span></h2>
                        <h2>  <ReactStars
                            count={5}
                            value={rating}
                            size={32}
                            activeColor="#ffd700"
                            edit={false}
                            isHalf={false}
                        /></h2>

                    </div>
                </div>
                <div>
                    <button className="btn btn-sm btn-info bg-purple-500 border-none hover:bg-purple-600 text-white font-bold" onClick={() => handleDetails(_id)}>View Details</button>
                </div>
            </div>
        </div >
    );
};

export default Book;