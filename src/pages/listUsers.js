import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import Card from '../components/cards'
import './listUsers.css'

function ListUsers() {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    const token =  JSON.parse(localStorage.getItem('token'))

    api.interceptors.request.use(
      config => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    )

    async function getUsers() {
     await api.get('/projects').then((response) => {
      console.log(response.data.user);
      setUsers(response.data.user)
    })}
  getUsers();
  },[])

  return(
    <div className="container-listuser">
      <div className="header">
        <div className="link-back">
        <Link to="/cadastro">Voltar</Link>
        </div>
        <div className="title">
        <h1>Lista de usuarios</h1>
        </div>
      </div>
      <div className="container-cards">
        {users.map((user) => <Card data={user}/>)}
      </div>
    </div>
  );
}

export default ListUsers;