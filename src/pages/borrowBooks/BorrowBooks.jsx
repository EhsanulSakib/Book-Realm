import Borrowed from "../../components/borrowed/Borrowed";
import Profile from "../../components/profile/Profile";

const BorrowBooks = () => {
    return (
        <div className="min-h-screen">
            <Profile></Profile>
            <Borrowed></Borrowed>
        </div>
    );
};

export default BorrowBooks;