import { Children, createContext,useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [User,setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
    );

    const login = (email,password) => {
        if(email === "admin@gmail.com" && password === "admin123"){
            const data = {role : "admin"};
            setUser(data);
            localStorage.setItem("User",JSON.stringify(data));
            return true;
        }
        if(email === "customer@gmail.com" && password === "customer123"){
            const data = {role : "customer"};
            setUser(data);
            localStorage.setItem("User",JSON.stringify(data));
            return true;
        }
        return false;
        
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

