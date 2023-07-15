import React, { useState } from "react";
import InputField from "./InputField";

function LoginForm2(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                placeholder="Enter your username"
            />
            <InputField
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Enter your password"
            />
            <button type="submit">Log in</button>
        </form>
    );
}

export default LoginForm2;
