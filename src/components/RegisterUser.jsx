import React, { useState } from 'react';
import './css/RegisterUse.css'; // Arquivo de estilos específicos da LandingPage

const RegisterUser = () => {
    const [fullName, setFullName] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            Full_Name: fullName,
            CPF: cpf,
            Password: password,
            Email: email,
            User_Name: userName,
            Role: role
        };

        try {
            const response = await fetch('http://localhost:5088/users/create_account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                console.log('Usuário cadastrado com sucesso!');

                setFullName('');
                setCpf('');
                setPassword('');
                setEmail('');
                setUserName('');
                setRole('');
            } else {
                const errorData = await response.json();
                console.error('Erro:', errorData);
                console.log(`Erro ao cadastrar usuário: ${JSON.stringify(errorData)}`);
            }
        } catch (error) {
            console.error('Erro:', error);
            console.log('Erro ao cadastrar usuário');
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>Cadastro</h2>
            <div>
                <label>Nome Completo:</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div>
                <label>CPF:</label>
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
            </div>
            <div>
                <label>Senha:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Nome de Usuário:</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            </div>
            <div>
                <label>Role:</label>
                <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default RegisterUser;
