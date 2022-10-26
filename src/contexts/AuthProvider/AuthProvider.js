import React, { useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const googleSignIn = (googleProvider) => {
        signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user inside state Change  : ", currentUser);
            setUser(currentUser)
        });
        return () => {
            unsubcribe();
        }
    }, [])
    const authInfo = { user, googleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;