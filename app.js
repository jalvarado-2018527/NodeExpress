const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola Mundo!')
})

app.get("/kinal", (req, res) =>{
    res.send("hola a todos desde kinal")
})

app.listen(port, () => {
  console.log(`Ejemplo de app escuchando en el puerto ${port}`)
})