import "bootstrap/dist/css/bootstrap.min.css";
import { use, useState } from "react";
function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function register() {
        const user = {
            username: username,
            password: password,
            email: email
        }
        fetch("http://localhost:8080/auth/register", {
            headers: {
                "content-Type": "application/json"
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
                    <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="title" placeholder="Username" />
                    <label htmlFor="description" className="form-label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="title" placeholder="Password" />
                    <label htmlFor="description" className="form-label">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="title" placeholder="Email" />
                    <button onClick={register} type="button" className="btn btn-primary mt-3">Register</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;