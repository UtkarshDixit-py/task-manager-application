const express = require('express');
const routes = express.Router();
const app = express();
const port = 3002;
const cors = require('cors');
const tasksController = require('./routes/tasks')

app.use(cors());
app.use(routes);

app.get('/',(req,res)=>{
    res.status(200).send("okokkokokoko")
})

routes.use('/tasks',tasksController);


app.listen(port,(err)=>{
    console.log("SERVER RUNNING ON PORT 3002");
})

