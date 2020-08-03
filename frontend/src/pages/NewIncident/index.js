import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft, FiCoffee} from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo3.svg';
// import lanlinkImg from '../../assets/lanlink.png';

export default function NewIncident() {
  const [number, setNumber] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [date, setDate] = useState('');

  const userId = localStorage.getItem('userId');

  const history =  useHistory();

  async function handleNewincident(e) {
    e.preventDefault();

    const data = {
      number,
      title,
      description,
      client,
      date,
    };
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: userId,
        }
      });

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar incident, tente novamente.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo Inc List"/>

          <h1>Cadastrar novo incidente</h1>
          <p>Descreva os incidentes detalhadamente para fircamos atualizado.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#2a5093"/>
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewincident}>
          <input 
            placeholder="Número"
            value={number}
            onChange={e => setNumber(e.target.value)} 
          />

          <input 
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)} 
          />

          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input 
            placeholder="Cliente"
            value={client}
            onChange={e => setClient(e.target.value)} 
          />

          <input
            type="text" 
            onfocus="(this.type='date')"  
            placeholder="dd/mm/aaaa"
            value={date}
            onChange={e => setDate(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>

      <footer className="footer">
      {/* <img src={lanlinkImg} alt="lanlink"/> */}
        Made with 
        <FiCoffee size={16} color="#FFF" />
        by Allison Almeida
      </footer>
    </div>
  );
}