import React, { useState , useEffect } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import '../SolicitarExame/solicitarExame.css';
import Axios from "axios"

let array_nomes = []
let array_modalidade = []
let array_cpf = []

function SolicitarExame() {

  const [nome, setNome] = useState("")
  const [modalidade, setmodalidade] = useState("")
  const [cpf, setCpf] = useState("")


  useEffect(() => {
    Axios.get('http://localhost:3000/medico/notSolicited')
    .then((res) =>{
        array_nomes = []
        array_modalidade = []
        array_cpf = []
        for (let x = 0; x < res.data.length; x++) {
          array_nomes.push(res['data'][x]['nome'])
          array_modalidade.push(res['data'][x]['modalidade'])
          array_cpf.push(res['data'][x]['cpf'])
        }
    })
},[])

const [buscar_cpf, setBuscarcpf] = useState("")

function chamar_cpf(){
  let found_cpf = array_cpf.find(element => element === buscar_cpf);
  setCpf(found_cpf)
  let found_index = array_cpf.indexOf(buscar_cpf);
  setmodalidade(array_modalidade[found_index])
  setNome(array_nomes[found_index])
}

  const options = [
    { value: 'exame1', label: 'Exame1' },
    { value: 'exame2', label: 'Exame2' },
    { value: 'exame3', label: 'Exame3' },
  ]

  return (
    <Container className='mt-5'>
      <Row className='justify-content-md-center '>
        <Form className='w-50 m-auto form '>
          <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>CPF:</Form.Label>
          <div class="d-flex">
            <Form.Control type="text" placeholder="" className='mx-1' onChange={(e) => setBuscarcpf(e.target.value)}/>
            <Button variant="success" size="sm" onClick={chamar_cpf}>Buscar</Button>
            </div>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Nome do Atleta: </Form.Label>
            <Form.Control type="text" placeholder="" disabled value={nome}/>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicCheckbox">
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Modalidade:</Form.Label>
            <Form.Control type="text" placeholder="" disabled value={modalidade}/>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicCheckbox">
          </Form.Group>
          <Form.Label>Tipo do Exame:</Form.Label>
          <Select
            placeholder="Clique para selecionar"
            isMulti
            options={options}
          />
          <div className='text-center'>
            <Button variant="success mt-4">Enviar</Button>
          </div>

        </Form>
      </Row>
    </Container>
  );
}

export default SolicitarExame;