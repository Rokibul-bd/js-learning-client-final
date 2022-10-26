import React, { useEffect } from 'react';
import { createContext } from 'react';
import { getAuth,  onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const googleSignIn = (googleProvider) => {
        signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = (githubProvider) => {
        signInWithPopup(auth, githubProvider)
        .then(()=>{

        })
        .catch(error => console.error(error))
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch(error => console.error(error))
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
    const authInfo = { user, googleSignIn, logOut, githubSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;