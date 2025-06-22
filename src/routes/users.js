import { v4 as uuidv4 } from 'uuid';
import {Router} from "express"
import {usersDB} from "../db/usersDB.js"

const users = Router()

users.get('/', (req, res)=>{
  res.status(200).json(usersDB)
})

users.get('/:id',(req,res)=>{
  const {id} = req.params
  const userFinded = usersDB.filter((user)=>user.id==id)
  res.status(200).json(
    userFinded.length>0
    ?userFinded
    :{Message:"No existe el usuario"})
})

users.post('/',(req,res)=>{
  const {name,lastname} = req.body
  usersDB.push({name,lastname,id:uuidv4()})
  res.status(201).send({Message:"User created"})
})

users.delete('/:id',(req,res)=>{
    const {id} = req.params
    const newList = usersDB.filter((user)=>user.id!=id)
    res.status(200).send({Message:"Fake delete DB",Users:newList})
})

export default users