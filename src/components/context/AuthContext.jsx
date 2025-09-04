import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    
    const [user, setUser] = useState(null);

    useEffect(() => {
        
    }, [])
}