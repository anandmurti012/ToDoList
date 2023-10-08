const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/ToDoRoute');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
.then( () =>{
    console.log('Db connected')
}).catch((error) =>{
    console.log(error);
});

app.use(routes);

const PORT = process.env.PORT;


app.listen(PORT, () =>
    console.log(`Server is listening on ${PORT}`)
);