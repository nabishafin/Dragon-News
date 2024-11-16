import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext()
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../components/firebase_init';



const AuthProvider = ({ children }) => {
    const [userinfo, setUserinfo] = useState()

    const handleLofinInfo = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setUserinfo(user)
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

            }
        });
    }, [])

    const handleLogOut = () => {
        signOut(auth)
        then(() => {
            console.log('log out done')

        });
    }

    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUserinfo(user)
            })
            .catch((error) => {
                alert('some problem')
            });
    }




    const info = {
        setUserinfo,
        handleLofinInfo,
        userinfo,
        handleLogOut,
        handleLogin
    }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;