import { googleProvider } from "../firebase/firebase";
import { signInWithPopup, getAuth, signOut } from "firebase/auth";

export const startLogin = () => {
    const auth=getAuth();
    return() => {
        return signInWithPopup(auth, googleProvider);
    };
};

export const login=(uid)=>({
    type: "LOGIN",
    uid,
})

export const startLogOut = ()=>{
    const auth=getAuth();
    return ()=>{
        return signOut(auth);
    }
}

export const logOut=()=>({
    type: "LOGOUT",
});