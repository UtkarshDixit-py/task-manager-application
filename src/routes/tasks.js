const express = require('express');
const tasksRoutes = express.Router();
const app = express();
const port = 3002;
const cors = require('cors');
const tasksList = require('../tasksList.json');


tasksRoutes.get('/',(req,res)=>{
    res.status(200).send(tasksList);
})

tasksRoutes.get('/:id',(req,res)=>{
    let taskId = req.params.id;
    let matchedTask = tasksList.tasks.find((el)=>el.id == taskId);

    res.status(200).send(matchedTask);
})


module.exports = tasksRoutes;