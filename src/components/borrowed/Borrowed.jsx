import React, { useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Borrowed = () => {
    const { user } = useContext(AuthContext);
    const [borrow, setBorrow] = useState([]);

    const url = `http://localhost:5000/Borrow?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBorrow(data))
    }, [url]);
    return (
        <div>

        </div>
    );
};

export default Borrowed;