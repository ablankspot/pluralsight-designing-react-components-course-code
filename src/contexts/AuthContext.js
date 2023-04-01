import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthProvider({ children, initialLogInUser }) {
    const [loggedInUser, setLoggedInUser] = useState(initialLogInUser);

    return (
        <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };