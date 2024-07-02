import React, { useState } from "react";

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            User_Name: userName,
            Password: password
        };

        try {
            const response = await fetch('http://localhost:5088/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                console.log('Usuário logado com sucesso.');
                setUserName('');
                setPassword('');
                const x = await response.json();
                console.log(x.token);
            } else {
                const errorData = await response.json();
                console.error('Erro: ', errorData);
                console.log(`Erro ao logar usuário: ${JSON.stringify(errorData)}`);
            }
        } catch (error) {
            console.error('Erro: ', error);
            console.log('Erro ao logar usuário.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <label>Username:</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            </div>

            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <button type="submit">Confirmar</button>
        </form>
    );
};

export default LoginForm;
