// SERVIDOR
const express = require('express')
const server = express()

const {
  pageLandign, 
  pageStudy, 
  pageGiveClasses, 
  saveClasses
} = require('./pages')

//configurar nunjucks, configurar o caminho das pastas html
// TEMPLATE ENGINE
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
  express: server,
  noCache: true
})

//INICIO E CONFIGURAÇÃO DO SERVIDOR
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))

//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static('public'))

//rotas da aplicação
.get('/', pageLandign)
.get('/study', pageStudy)
.get('/give-classes',pageGiveClasses)
.post('/save-classes',saveClasses)


//START DO SERVIDOR
.listen(5000)

//
