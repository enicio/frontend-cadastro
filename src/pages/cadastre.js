import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './cadastre.css'
import logo from '../images/logo1.png';

function Cadastre() {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setbirthday] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    const userAdmin =  JSON.parse(localStorage.getItem('admin'));
    console.log(userAdmin)

  async function updateToken(){
    await api.post('/auth/authenticate',
      {
        "email": userAdmin.email,
        "password": userAdmin.password
      }).then(function (response) {
        // handle success
        console.log(response.data.token);
        localStorage.setItem('token',JSON.stringify(response.data.token))
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
    updateToken();

    setTimeout(()=> {
      updateToken();
    },2000)
  }, [])

 async function CadastreUser(){
    console.log("ops", name, lastname, address,email, phone, birthday, password, )

   await api.post('/auth/register',
   {
    "name": name,
    "lastname": lastname,
    "address": address,
    "phone": phone,
    "birthday": birthday,
    "email": email,
    "password": password,
  }
    ).catch(function (error) {
      console.log(error);
    });

  }

  return(
    <div className="container-cadastro">
      <div className="container-forms">
        <img className="logo" src={ logo } alt="logo"/>
      <form>
        <input
          placeholder="Digite seu nome"
          name="name"
          type="name"
          value={ name }
          onChange={ ({ target: {value } }) => setName(value) }
        />
         <input
          placeholder="Digite seu Sobrenome"
          name="lastname"
          type="name"
          value={ lastname }
          onChange={ ({ target: {value } }) => setLastName(value) }
        />
        <input
          placeholder="Telefone"
          name="telefone"
          type="name"
          value={ phone }
          onChange={ ({ target: {value } }) => setPhone(value) }
        />
          <input
          placeholder="E-mail"
          name="name"
          type="name"
          value={ email }
          onChange={ ({ target: {value } }) => setMail(value) }
        />
        <input
          placeholder="Data de nascimento"
          name="birthday"
          type="date"
          value={ birthday }
          onChange={ ({ target: {value } }) => setbirthday(value) }
        />
         <input
          placeholder="Digite seu Endereço"
          name="address"
          type="name"
          value={ address }
          onChange={ ({ target: {value } }) => setAddress(value) }
        />
        <input
          placeholder="Digite sua senha"
          name="password"
          type="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
        <button
          type="button"
          onClick={ () => CadastreUser() }
        >
          Cadastrar Usuário
        </button>
        <Link to="/listusers"><button>Ver lista de Usuário</button></Link>
      </form>
      </div>
    </div>
  );
}

export default Cadastre;