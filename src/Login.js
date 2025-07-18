import "bootstrap/dist/css/bootstrap.min.css";
import { use, useState } from "react";
function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    function login() {
        const user = {
            username: username,
            password: password,
        }
        fetch("http://localhost:8080/auth/login", {
            headers: {
                "content-Type": "application/json",
                "authorization": "Bearer " + token
            },
            method: "POST",
            body: JSON.stringify(user)
        })
            .then(res => res.text())
            .then(data => {
                alert(data)
            }
            )

    }

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Username</label>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="title" placeholder="Enter product title" />
                    <label htmlFor="description" className="form-label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="title" placeholder="Enter product description" />

                    <button onClick={login} type="button" className="btn btn-primary mt-3">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;