import React, { useState, useEffect } from "react";
import "./table.css";
import { Button, Table, Form } from "react-bootstrap";
import SolicitarExame from "../SolicitarExame";
import Axios from "axios";

let array_nomes = [];
let array_cpf = [];

function AvalicacoesPendentes() {
  const [solicitar, setSolicitar] = useState("")
  const [nome, setNome] = useState("")
  useEffect(() => {
    Axios.get('http://localhost:3000/medico/solicited')
    .then((res) =>{
        array_nomes = []
        for (let x = 0; x < res.data.length; x++) {
          array_nomes.push(res['data'][x]['nome'])
          array_cpf.push(res['data'][x]['cpf'])
        }
        console.log(array_nomes)
    })
},[])
const [nomex , setNomex] = useState("")

const chamar_nome = () => {
  let found = array_nomes.find(element => element === nomex);
  setNome(found) 
}
  return (
    <>
      {solicitar ? (<SolicitarExame />) : (<>
        <Form.Group className="w-25 form mb-3" controlId="formBasicEmail">
          <Form.Label>Buscar:</Form.Label>
          <Form.Control className="buscar" placeholder="" onChange={(e) => setNomex(e.target.value)}/>
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
              <td>111.111.111-11</td>
              <td>
                <Button variant="success" size="sm" onClick={chamar_nome}>
                  Solicitar
                </Button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>111.111.111-11</td>
              <td>
                <Button variant="success" size="sm" onClick={setSolicitar}>
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
