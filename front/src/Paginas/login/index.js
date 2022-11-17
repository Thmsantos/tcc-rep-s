import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import login from '../../assets/atleta.png';
import Sesi from '../../assets/logo2.jpg';
import './style.css';

import Axios from "axios";
import { Button } from 'react-bootstrap';

function Login(){
  const [emailAccount, setEmail] = useState("")
  const [pswd, setPassword] = useState("")

  const handleLogin = () => {
    window.location.href = '/home'
      Axios.post("http://localhost:3001/login", {
      email: emailAccount,
      password: pswd,
    }).then((response) => {
      if(response.data.msg === 1){
        window.location.href = '/home'
      }
      else{
        alert('Senha incorreta!!!')
      }
    }); 
  };

  
  return (
    
        <div className="container-login">
          <div className="img-box">
            <img src={login} alt="teste"/>
          </div>
          <div className="content-box">
              <div className="form-box">
                <div className='segundo'>
                  <h3>BEM-VINDO AO</h3>
                </div>
                  <div className="titulo-segundario">
                    <h2>PORTAL ESPORTE</h2>
                  </div>
                  <img src={Sesi} className="logo"/>

                  <form>
                      <div className="input-box">
                          <span>Digite o CPF:</span>
                          <input type="text" className='reste' placeholder="___.___.___-__" onChange={e => setEmail(e.target.value)}/>
                          <div className="mb-3">
                      </div>
                      </div>

                      <div className="input-box">
                          <span>Digite a senha:</span>
                          <input className='border-2' type="password" placeholder="Informe sua senha" onChange={e => setPassword(e.target.value)}/>
                      </div>



                      <div className="input-box">
                        <Button onClick={handleLogin} className="btnEntrar">Entrar</Button>
                      </div>
                      <div className="remember">
                          <Link to="/Redefinir">
                          Esqueceu a Senha?
                          </Link>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Login;