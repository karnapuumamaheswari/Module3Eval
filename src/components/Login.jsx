import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(email,password);

        if(!success){
            alert("Invalid Credentials");
            return;
        }

        if (email === 'admin@gmail.com') {
            navigate("/admin/dashboard");
        }
        else{
            navigate("/customer/dashboard");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <input 
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}/>
            <button>Login</button>
    
        </form>
    );
};

export default Login;