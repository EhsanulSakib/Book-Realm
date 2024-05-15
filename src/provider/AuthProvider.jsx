import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { BASE_URL } from "../constVariables/constVariable";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState([])
    const GoogleProvider = new GoogleAuthProvider()
    const GitHubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider)

    }

    const handleGitHubSignIn = () => {
        return signInWithPopup(auth, GitHubProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            console.log('userEmail', { userEmail })
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);

            // If user exist issue a token
            if (currentUser) {
                axios.post(`${BASE_URL}/jwt`, loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token', res.data)
                    })
            }
            else {
                axios.post(`${BASE_URL}/logout`, loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    useEffect(() => {
        fetch(`${BASE_URL}/books`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const userInfo = { books, setBooks, loading, user, darkMode, setDarkMode, logOut, signIn, handleGoogleSignIn, handleGitHubSignIn, createUser }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;