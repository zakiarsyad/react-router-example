import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validUsername = "zaki"

function Login() {
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (username === validUsername) {
            localStorage.setItem('token', username);

            navigate("/");
        }
    }

    function handleChange(e) {
        setUsername(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>username</label>
            <input onChange={handleChange}></input>
            <button>Login</button>
        </form>
    );
}

export default Login;
