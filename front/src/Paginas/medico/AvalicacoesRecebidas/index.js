import React, { useState, useEffect } from 'react';
import './table.css';
import { Button, Table } from 'react-bootstrap';
import ExamesEnviados from '../ExamesEnviados';
import Axios from 'axios';

let array_dados = []
let array_cpf = []
let array_situacao = []
let array_posicao = []

function AvalicacoesRecebidas() {
    
  
  const [listaCpf, setListaCpf] = useState([])
  const [listaSituacao, setListaSituacao] = useState([])
  const [listaPosicao, setListaPosicao] = useState([])
 
  const [listaNomes, setListaNomes] = useState([])
  const [validar, setValidar] = useState(false)

  useEffect(() => {
    Axios.get('http://localhost:3000/medico/recebidas')
      .then((res) => {
        array_dados = []
        for (let x = 0; x < res.data.length; x++) {
          array_dados.push(res['data'][x]['nome'])
          array_cpf.push(res['data'][x]['cpf'])
          array_situacao.push(res['data'][x]['situacao'])
          array_posicao.push(res['data'][x]['posicao'])
        }
        
        setListaNomes(array_dados)
        setListaCpf(array_cpf)
        setListaSituacao(array_situacao)
        setListaPosicao(array_posicao)       
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
           {listaNomes.map((n, index) => {
              return (
                <tr>
                  <td>{n}</td>
                  <td>{listaCpf[index]}</td>
                  <td>{listaSituacao[index]}</td>
                  <td>{listaPosicao[index]}</td>
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
