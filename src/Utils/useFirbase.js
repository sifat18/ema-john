import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/Firebase.init";

initAuth()
const useFirebase = () => {
    const [user, setuser] = useState({})
    const [error, seterror] = useState({})
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setuser(userCredential.user);
                // ...
            })
            .catch((error) => {
                seterror(error.message);
                // ..
            });
    }
    const signUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user)
                setuser(userCredential.user);

                // ...
            })
            .catch((error) => {
                seterror(error.message);
            });
    }

    const signGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
            };
        })
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setuser({})

            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        signGoogle,
        logOut,
        user,
        error,
        createUser,
        signUser
    }
}

export default useFirebase;