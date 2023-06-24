const express = require('express');
const tasksRoutes = express.Router();
const app = express();
const port = 3002;
const cors = require('cors');

const taskList = ["todo1","todo2","todo3","todo4"];

tasksRoutes.get('/',(req,res)=>{
    res.status(200).send(taskList);
})


module.exports = tasksRoutes;