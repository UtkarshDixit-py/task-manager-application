const express = require('express');
const tasksRoutes = express.Router();
const app = express();
const port = 3002;
const fs = require('fs');
const cors = require('cors');
const tasksList = require('../tasksList.json');
const bodyParser = require('body-parser');
const path = require('path');

tasksRoutes.use(bodyParser.urlencoded({extended : false}));
tasksRoutes.use(bodyParser.json());


tasksRoutes.use(cors());



tasksRoutes.get('/',(req,res)=>{
    res.status(200).send(tasksList);
})

tasksRoutes.get('/:id',(req,res)=>{
    let taskId = req.params.id;
    let matchedTask = tasksList.find((el)=>el.id == taskId);
    res.status(200).send(matchedTask);
})

tasksRoutes.post('/',(req,res)=>{
    let newTask = req.body.task;
    let id = Math.floor(Math.random() * 100000) + 1;
    let writePath = path.join(__dirname,'..','tasksList.json');
    let tasksListUpdated = tasksList;
    tasksListUpdated.push({
        "id":id,
        "task":newTask
        })
    fs.writeFileSync(writePath,JSON.stringify(tasksListUpdated),{encoding:'utf8',flag:'w'});
    res.status(200).send("TASK ADDED SUCCESSFULLY");

})

tasksRoutes.delete('/',(req,res)=>{
    let idToDelete = parseInt(req.query.id);
    let updatedTasksList = tasksList.filter((el)=> el.id!==idToDelete);
    let writePath = path.join(__dirname,'..','tasksList.json');
    fs.writeFileSync(writePath,JSON.stringify(updatedTasksList),{encoding:'utf8',flag:'w'});
    res.status(200).send("TASK DELETED SUCCESSFULLY");

})

module.exports = tasksRoutes;