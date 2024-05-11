import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import logo from '/logo.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../provider/AuthProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext)
    const notify = () => toast.error("User Signed Out!");
    const navigate = useNavigate()

    const handleSignOut = () => {
        logOut()
            .then(result => {
                navigate('/')
            })
            .then(notify)
            .catch()
    }

    const links = <>
        <ul className={`lg:flex flex-row gap-2 duration-300 top-16 md:top-[70px] absolute ${darkMode ? 'bg-gray-800' : 'bg-slate-100'} lg:static ${open ? 'left-0' : '-left-60'} p-10 lg:p-0 shadow-lg lg:shadow-none no-underline lg:gap-6 text-base lg:text-lg z-10`}>
            <li className="pb-1 lg:pb-0"><NavLink className={'focus:border-b-2 '} to='/'>Home</NavLink></li>
            {
                user ?
                    <li className="pb-1 lg:pb-0"><NavLink className={'focus:border-b-2'} to='/all-book'>All Books</NavLink></li>
                    :
                    ""
            }
            {
                user ?
                    <li className="pb-1 lg:pb-0"><NavLink className={'focus:border-b-2'} to='/add-book'>Add Book</NavLink></li>
                    :
                    ""
            }
            {
                user ?
                    <li className="pb-1 lg:pb-0"><NavLink className={' focus:border-b-2'} to='/borrowed'>Borrowed Books</NavLink></li>
                    :
                    ""
            }

            {
                user ?
                    <li className="mt-8 lg:mt-0 rounded-md lg:hidden focus:border-b-2" onClick={handleSignOut}>Sign Out</li>
                    :
                    <li className="mt-8 lg:mt-0 rounded-md lg:hidden">
                        <NavLink to='/login' className={'focus:border-b-2 '}>Login</NavLink>
                    </li>
            }
            {
                user ?
                    ""
                    :
                    <li className="lg:hidden"><NavLink className={'focus:border-b-2 '} to='/register'>Register</NavLink></li>
            }


        </ul>
    </>


    return (
        <nav className="flex items-center px-2 lg:px-4 py-2 lg:py-4 justify-between text-xl font-medium ">
            <div className="flex items-center lg:hidden">
                <div className="lg:hidden" onClick={() => setOpen(!open)}>
                    {
                        open == true ? <IoMdClose className="text-2xl " /> : <RiMenu2Line className="text-2xl " />
                    }
                </div>

                <div className="logo flex text-base lg:hidden items-center">
                    <img src={logo} alt="" className="w-28 pl-2" />
                </div>
            </div>

            <div className="logo hidden lg:flex items-center ">
                <img src={logo} alt="" className="w-24" />
            </div>


            <div className="flex flex-col lg:gap-8 lg:flex-row items-center">


                <div>
                    {links}
                </div>

                <div className="flex gap-1 items-center z-10">
                    <div>
                        {
                            darkMode ?
                                <button className="btn btn-sm  btn-ghost border-none text-white text-2xl pr-1 mt-1 shadow-none" onClick={() => setDarkMode(!darkMode)}>
                                    <MdLightMode />
                                </button>

                                :
                                <button className="btn btn-sm  btn-ghost border-none text-gray-800 text-2xl shadow-none pr-1 mt-1" onClick={() => setDarkMode(!darkMode)}>
                                    <MdDarkMode />
                                </button>

                        }
                    </div>
                    <div>
                        {
                            user ?
                                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button"><img src={user.photoURL} alt="" className="w-12 h-12 object-cover object-top rounded-full " /></div>
                                    <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow-xl ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-slate-100"} rounded-md shadow-xl w-52`}>
                                        <li><p className="text-base font-bold">{user.displayName}</p></li>
                                        <li><button onClick={handleSignOut} className="btn btn-error">Sign Out</button></li>
                                    </ul>
                                </div>

                                :
                                ""

                        }
                    </div>

                    <div className="hidden lg:flex">
                        {
                            user ?
                                ""
                                :
                                <button className="btn btn-sm btn-active btn-ghost rounded-md text-sm lg:text-base">
                                    <Link to='/login'>Login</Link>
                                </button>
                        }
                    </div >

                    <div className="hidden lg:flex">
                        {
                            user ?
                                ""
                                :
                                <button className=" btn btn-sm btn-active btn-ghost rounded-md text-sm lg:text-base" ><Link to='/register'>Register</Link></button>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;