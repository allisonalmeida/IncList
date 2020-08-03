import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogOut, FiTrash2, FiCoffee} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo3.svg';
//.import lanlinkImg from '../../assets/lanlink.png';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [userId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: userId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar incident, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
  <div className="profile">
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="logo Inc List"/>
        <span>Bem vindo, {userName}</span>
        <Link className="button" to="/incidents/new">Cadastrar novo incidente</Link>
        <button onClick={handleLogout} type="button">
          <FiLogOut size={20} color="#2a5093" />
        </button>
      </header>

      <h1>Incidentes Cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>NÚMERO:</strong>
            <p>{incident.number}</p>
          
            <strong>TÍTULO:</strong>
            <p>{incident.title}</p>
          
            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>
          
            <strong>CLIENTE:</strong>
            <p>{incident.client}</p>
          
            <strong>DATA:</strong>
            <p>{incident.date}</p> 
            
          <button onClick={() => handleDeleteIncident(incident.id)} type="button">
            <FiTrash2 size={20} color="2a5093" />
          </button>
        </li>
        ))}
      </ul>
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