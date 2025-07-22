import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login() {
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
    }

    const values = {
        isLoggedIn,
        setIsLoggedIn,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}