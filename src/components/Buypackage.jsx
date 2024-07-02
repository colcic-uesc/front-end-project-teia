import React, { useState } from 'react';
import './css/buypackage.css'; // Arquivo de estilos específicos
import axios from 'axios'; // Importando axios para fazer requisições HTTP
import Servicos from './Servicos'; // Importe o componente Servicos para acessar pacotes

const BuyPackage = () => {
  const pacotes = [
    { destino: 'Atenas', preco: 1000 },
    { destino: 'Itacaré', preco: 800 },
    { destino: 'Veneza', preco: 1200 },
  ];

  const [formData, setFormData] = useState({
    full_name: '',
    cpf: '',
    birth_day: '',
    password: '',
    email: '',
    user_name: '',
    role: '' // Deixe como string para armazenar o destino selecionado
  });

  // Handler para atualizar o estado do formulário conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Substitua a URL abaixo pela sua API ou endpoint de destino para enviar os dados
      const response = await axios.post('sua_url_de_destino', formData);
      console.log(response.data); // Log da resposta da API, se necessário
      // Limpar o formulário após o envio bem-sucedido, se desejado
      setFormData({
        full_name: '',
        cpf: '',
        birth_day: '',
        password: '',
        email: '',
        user_name: '',
        role: ''
      });
      alert('Dados enviados com sucesso!'); // Exemplo de mensagem de sucesso
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente.'); // Mensagem de erro
    }
  };

  return (
    <div className="buy-package">
      <h2>Compra de pacote</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="full_name">Nome Completo:</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birth_day">Data de Nascimento:</label>
          <input
            type="date"
            id="birth_day"
            name="birth_day"
            value={formData.birth_day}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_name">Nome de Usuário:</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Pacote:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o pacote</option>
            {pacotes.map((pacote, index) => (
              <option key={index} value={pacote.destino}>
                {pacote.destino} - R$ {pacote.preco}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default BuyPackage;
