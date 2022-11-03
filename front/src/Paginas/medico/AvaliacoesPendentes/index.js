import React, { useState, useEffect } from "react";
import "./table.css";
import { Button, Table, Form } from "react-bootstrap";
import SolicitarExame from "../SolicitarExame";
import Axios from "axios";


function AvalicacoesPendentes() {

  const [solicitar, setSoliticar] = useState(false)

  useEffect(() => {
    Axios.get('http://localhost:3000/medico/solicited')
    .then((res) =>{
      console.log(res.data)
    })
},[])

  useEffect(() => {
    Axios.get('http://localhost:3000/medico/pending')
    .then((res) =>{
      console.log(res.data)
    })
  },[])

  return (
    <>
      {solicitar ? (<SolicitarExame />) : (<>
        <Form.Group className="w-25 form mb-3" controlId="formBasicEmail">
          <Form.Label>Buscar:</Form.Label>
          <Form.Control className="buscar" type="text" placeholder="" />
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
              <td>Atleta1</td>
              <td>111.111.111-11</td>
              <td>
                <Button variant="success" size="sm" onClick={setSoliticar}>
                  Solicitar
                </Button>
              </td>
            </tr>
            <tr>
              <td>Atleta2</td>
              <td>111.111.111-11</td>
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
