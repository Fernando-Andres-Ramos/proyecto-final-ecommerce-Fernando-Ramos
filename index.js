/* Import dependencies */
import express from 'express';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';
import router from "./src/routes/routes.js"

//Create an express application
const app = express();

/* Create a PORT*/
const PORT = process.env.PORT || 8080;

/* Convert the URL of the current module to a file path */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Server static files from the 'public' directory
app.use(express.static(join(__dirname,'public')));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

/* Usde router */
app.use("/",router)

/* Initial message from server */
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))

/* Get response from the server */
app.get('/welcome', (req, res)=>{
  res.status(200).send(`<section>
                          <h2 style="text-align:center">Test endpoint route</h2>
                        </section>`)
})
