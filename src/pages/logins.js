import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../services/api';
import './logins.css'
import logo from '../images/logo1.png';


export default function LoginPage() {
  const [emailInput, setEmailInput] = useState('');
  const [password, setPassword] = useState('');
  const [ loginRedirect, setLoginRedirect] = useState(false);

  async function CadastreUserAdmin(){
    // console.log("ops", name, lastname, address,email, phone, birthday, password, );

      localStorage.setItem('admin', JSON.stringify({"email": emailInput,"password": password}))

   await api.post('/auth/register',
   {
    "name": "a",
    "lastname": "b",
    "address": "c",
    "phone": "d",
    "birthday": "e",
    "email": emailInput,
    "password": password
    }
    ).catch(function (error) {
      console.log(error);
    });
  }


  function handleSubmit() {
      CadastreUserAdmin()
      setLoginRedirect(true);
  }

  if (loginRedirect) {
    return <Redirect to="/cadastro" />;
  }
  return (
    <main className="main-container">
      <div className="login-page">
          <img className="logo" src={logo} alt="logo"/>
          <form>
            <input
              placeholder="Digite seu email"
              data-testid="email-input"
              type="email"
              value={ emailInput }
              onChange={ ({ target: { value } }) => setEmailInput(value) }
            />
            <input
              placeholder="Digite sua senha"
              data-testid="password-input"
              type="password"
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
            />
            <button
              data-testid="login-submit-btn"
              type="button"
              value={ password }
              onClick={ () => handleSubmit() }
            >
              Entrar
            </button>
          </form>
      </div>
    </main>
  );
}
