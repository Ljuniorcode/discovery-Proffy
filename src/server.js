// DADOS
const proffys = [
  {
    name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "6199892121", 
    bio: 'Entusiasta das melhores tecnologias de química avançada...', 
    subject: "Química", 
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220]
  },

  {
    name: "Luciano Junior", 
    avatar: "https://avatars2.githubusercontent.com/u/59096165?s=460&u=cfa7751ada8a4093f0068156cb1fb428adea8d3e&v=4", 
    whatsapp: "6199892121", 
    bio: 'Entusiasta das melhores tecnologias de Matemática...', 
    subject: "Matemática", 
    cost: "30", 
    weekday: [1], 
    time_from: [720], 
    time_to: [1220]
  },

]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

// FUNCIONALIDADES

function getSubject(subjectNumber){
  const arrayPosition = +subjectNumber - 1
  return subjects[arrayPosition]
}


function pageLandign(req,res) {
  return res.render("index.html")
}

function pageStudy(req,res){
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req,res){
  const data = req.query
  
  data.subject = getSubject(data.subject)
  
  //se tiver data adicionar
  const isNotEmpty = Object.keys(data).length > 0

  if (isNotEmpty) {

    //add data a lista proffys
    proffys.push(data)

    //return res.redirect('/study')
  }


  //se não, não mostrar a página
  return res.render("give-classes.html", { subjects, weekdays })
}

// SERVIDOR
const express = require('express')
const server = express()


//configurar nunjucks, configurar o caminho das pastas html
// TEMPLATE ENGINE
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
  express: server,
  noCache: true
})

//INICIO E CONFIGURAÇÃO DO SERVIDOR
server

//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static('public'))

//rotas da aplicação
.get('/', pageLandign)
.get('/study', pageStudy)
.get('/give-classes',pageGiveClasses)

//START DO SERVIDOR
.listen(5000)

//
