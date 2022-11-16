import React, { useState, useEffect } from 'react';
import './table.css';
import { Button, Table } from 'react-bootstrap';
import ExamesEnviados from '../ExamesEnviados';
import Axios from 'axios';

function AvalicacoesRecebidas() {

  let array_nomes = []
  let array_cpf = []
  let array_relacao = []
  let array_justificativa = []

  const [nomes, setNomes] = useState([])
  const [cpf, setCpf] = useState([])
  const [relacao, setRelacao] = useState([])
  const [justificativa, setJustificativa] = useState([])
  

  
  const [validar, setValidar] = useState(false)

  useEffect(() => {
    Axios.get('http://localhost:3000/medico/recebidas')
      .then((res) => {
        array_nomes = []
        for (let x = 0; x < res.data.length; x++) {
          array_nomes.push(res['data'][x]['nome'])
          array_cpf.push(res['data'][x]['cpf'])
          array_relacao.push(res['data'][x]['situacao'])
          array_justificativa.push(res['data'][x]['justificativa'])
        }
        setNomes(array_nomes)
        setCpf(array_cpf)
        setRelacao(array_relacao)
        setJustificativa(array_justificativa)
      })
  }, [])


  
  return (
    <>
      {validar ? (<ExamesEnviados />) : (<>
        <Table responsive striped bordered hover >
          <thead>
            <tr className="bg-tabela text-white" >
              <th >Nome do Atleta:</th>
              <th>CPF:</th>
              <th>Relação:</th>
              <th>Justificativa:</th>
              <th>Exame:</th>
            </tr>
          </thead>
          <tbody>
           {nomes.map((n, index) => {
            console.log(n)
              return ( 
                <tr>
                  <td>{n}</td>
                  <td>{cpf[index]}</td>
                  <td>{relacao[index]}</td>
                  <td>{justificativa[index]}</td>
                  <td><Button variant="success" onClick={setValidar}>Visualizar</Button></td>
                </tr>
               )
            })}
          </tbody>
        </Table>
      </>)
      }
    </>
  );
}

export default AvalicacoesRecebidas;
