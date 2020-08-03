import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn, FiCoffee} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo3.svg';
import inclistImg from '../../assets/inclist.png';
// import lanlinkImg from '../../assets/lanlink.png';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', {id});

      localStorage.setItem('userId', id);
      localStorage.setItem('userName', response.data.name);

      history.push('/profile');
      
    } catch (err) {
      alert('Ops...falha no login, veja se seu ID está correto e tente novamente.');
    } 
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo Inc List" />
        
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Seu ID" 
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#2a5093"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={inclistImg} alt="Inclist" />

      <footer className="footer">
      {/* <img src={lanlinkImg} alt="lanlink"/> */}
        Made with 
        <FiCoffee size={16} color="#FFF" />
        by Allison Almeida
      </footer>
    </div>
  );
}