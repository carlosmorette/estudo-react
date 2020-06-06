const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/data', (request, response ) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")

  console.log(response.body)

  fs.writeFile('../data/data.txt', String(response.body) , {flag: 'a'} , (err) => console.log('ERRO', err))
  console.log('DADOS RECEBIDOS')
})

app.listen(3030, () => console.log('Rodando na porta 3030'))