/* Import dependencies */
import express from 'express';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

//Create an express application
const app = express();


/* Create a PORT*/
const PORT = process.env.PORT || 8080;


/* Convert the URL of the current module to a file path */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
console.log(__filename)
console.log(__dirname)

// Server static files from the 'public' directory
app.use(express.static(join(__dirname,'public')));


/* Initial message from server */
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))


/* Get response from the server */
app.get('/ping', (req, res)=>{
  res.status(200).send('<h1>¡Pong!</h1>')
})