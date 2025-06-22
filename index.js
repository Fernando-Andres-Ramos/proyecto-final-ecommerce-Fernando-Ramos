/* Import dependencies */
import express from 'express';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';
import router from "./src/routes/routes.js"
import cors from 'cors'

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

app.use(cors())

/* Initial message from server */
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))

/* const corsOptions = {
  origin:['www.example.com'],
  methods:['GET,POST,PUT,DELETE'],
  allowedHeaders:['Content-Type','Authorization'],
  credentials:true
} */