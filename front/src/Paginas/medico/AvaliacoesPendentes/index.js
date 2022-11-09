import React, { useState, useEffect } from "react";
import "./table.css";
import { Button, Table, Form } from "react-bootstrap";
import SolicitarExame from "../SolicitarExame";
import Axios from "axios"

let array_nomes = []
let array_cpf = []

function AvalicacoesPendentes() {

  const [solicitar, setSoliticar] = useState(false)

  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")

  useEffect(() => {
    Axios.get('http://localhost:3000/medico/pending')
    .then((res) =>{
        array_nomes = []
        array_cpf = []
        for (let x = 0; x < res.data.length; x++) {
          array_nomes.push(res['data'][x]['nome'])
          array_cpf.push(res['data'][x]['cpf'])
        }
    })
},[])

const [buscar_nome, setBuscarnome] = useState("")

function chamar_nome(){
  let found_nome = array_nomes.find(element => element === buscar_nome);
  setNome(found_nome)
  let found_cpf = array_nomes.indexOf(buscar_nome);
  setCpf(array_cpf[found_cpf])
}

  return (
    <>
      {solicitar ? (<SolicitarExame />) : (<>
        <Form.Group className="w-25 form mb-3" controlId="formBasicEmail">
          <Form.Label>Nome:</Form.Label>
          <div className="d-flex">
          <Form.Control className="buscar mx-1" type="text" placeholder="" onChange={(e) => setBuscarnome(e.target.value)} />
          <Button variant="success" size="sm" onClick={chamar_nome}>Buscar</Button>
          </div>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Table striped bordered hover>
          <thead>
            <tr className="bg-tabela text-white">
              <th>Nome do Atleta:</th>
              <th>CPF:</th>
              <th>Solicitar:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{nome}</td>
              <td>{cpf}</td>
              <td>
                <Button variant="success" size="sm" onClick={setSoliticar}>
                  Solicitar
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </>)
      }
    </>
  );
}

export default AvalicacoesPendentes;