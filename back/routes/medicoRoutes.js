// Importacão das bibliotecas 
const express = require('express'); // Recebe o express


// Importação dos módulos
const medicoControllers = require('../controllers/medicoControllers'); // Armazena o aquivo do controller 

const router = express.Router(); // Armazena o "Router" do express

router
    .post('/nome_medico_cov', medicoControllers.nome_mdc_conv)
    .get('/pending', medicoControllers.listAtlhetePending)
    .get('/recebidas', medicoControllers.avaliacoesRecebidas)
    .get('/solicited', medicoControllers.listAtlheteSolicited)
    .get('/notSolicited', medicoControllers.listAtlheteNotSolicited)
    .put('/recuperarSenha', medicoControllers.recuperarSenha)
    .put('/verificarCodigo', medicoControllers.verifyCode)
    .post('/solicitarExame', medicoControllers.solicitarExame)
    .get('/verExameEnviado/:id_atleta', medicoControllers.verExameEnviado)
    .put('/avaliarExame/:idexame', medicoControllers.avaliarExame)
// Exportação do módulo
module.exports = router  