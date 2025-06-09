import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))

app.get('/ping', (req, res)=>{
  res.status(200).send('<h1>¡Pong!</h1>')
})