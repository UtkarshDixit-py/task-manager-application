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
    let matchedTask = tasksList.tasks.find((el)=>el.id == taskId);
    res.status(200).send(matchedTask);
})

tasksRoutes.post('/',(req,res)=>{
    console.log(req);

    let newTask = req.body.task;
    let id = Math.floor(Math.random() * 100000) + 1;
    let writePath = path.join(__dirname,'..','tasksList.json');

    let tasksListUpdated = tasksList;
    tasksListUpdated.tasks.push({
        "task" : newTask,
        "id":id
        })
    fs.writeFileSync(writePath,JSON.stringify(tasksListUpdated),{encoding:'utf8',flag:'w'});
    res.status(200).send("TASK ADDED SUCCESSFULLY");

})

module.exports = tasksRoutes;