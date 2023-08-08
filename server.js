import express from 'express';
import dotenv from 'dotenv';
import Routes from './routes/route.js';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
dotenv.config();
app.use(bodyParser.json({externals:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.use('/',Routes);

const PORT = process.env.PORT;
// const DB_URL = process.env.DB_URL;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
