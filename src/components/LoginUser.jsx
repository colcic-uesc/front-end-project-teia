import React, { useState } from 'react';
import './css/LoginUse.css'; // Arquivo de estilos específicos

const LoginUser = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            User_Name: userName,
            Password: password
        };

        try {
            const response = await fetch('http://localhost:5088/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                console.log('Login bem-sucedido!');
                // Redirecionar ou realizar outras ações após o login bem-sucedido
            } else {
                const errorData = await response.json();
                console.error('Erro:', errorData);
                console.log(`Erro ao fazer login: ${JSON.stringify(errorData)}`);
            }
        } catch (error) {
            console.error('Erro:', error);
            console.log('Erro ao fazer login');
        }
    };

    return (
        <section className="login-form-section">
            <form className="login-form-container" onSubmit={handleSubmit}>
                <div>
                <h2>Login</h2>

                    <label>Nome de Usuário:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </section>
    );
};

export default LoginUser;
