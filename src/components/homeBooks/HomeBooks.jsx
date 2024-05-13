import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const HomeBooks = () => {
    const { books } = useContext(AuthContext)
    return (
        <div className="w-11/12 m-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl text">All books</h2>

        </div>
    );
};

export default HomeBooks;