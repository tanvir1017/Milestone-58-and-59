import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initAuthentication from '../firebase/Firebase.Init';

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };
    useEffect(
        () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                }
            })
        }
        , [])
    return {
        user,
        logOut,
        signInUsingGoogle,
    };
};

export default useFirebase;