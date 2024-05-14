import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../provider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='shadow-sm w-full m-auto mt-4 md:mt-8'>
            <div className="hero items-center md:justify-between w-11/12 m-auto border border-gray-300 rounded-lg shadow-xl">
                <div className="hero-content flex-col md:flex-row">
                    <img src={user.photoURL} className="w-44 h-44 object-cover object-top rounded-full shadow-2xl" />
                    <div>
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">{user.displayName}</h1>
                        {user.email && <p className="py-6 text-lg">{user.email}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;