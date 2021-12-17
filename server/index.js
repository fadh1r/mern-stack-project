import express, { Router } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import route from './route/routes.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/users', route);

const PORT = 8000;
const URL = 'mongodb://user:mernstack@clusterff-shard-00-00.6463a.mongodb.net:27017,clusterff-shard-00-01.6463a.mongodb.net:27017,clusterff-shard-00-02.6463a.mongodb.net:27017/mernStack?ssl=true&replicaSet=atlas-ny2eaj-shard-0&authSource=admin&retryWrites=true&w=majority';


mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running successfully on Port ${PORT}`);
    });
}).catch(error => {
    console.log('Error: ', error.message);
})
