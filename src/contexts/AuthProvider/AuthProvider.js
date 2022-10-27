import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
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
            .then(() => {

            })
            .catch(error => console.error(error))
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch(error => console.error(error))
    }

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    const setUserProfile = (fullName, imgUrl) => {
        updateProfile(auth, {
            displayName: fullName, photoURL: imgUrl
        })

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
    const authInfo = { user, googleSignIn, logOut, githubSignIn, createUser, logIn, setUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;