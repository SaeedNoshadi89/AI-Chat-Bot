import express, { json } from 'express';
import dotenv from 'dotenv';
import router from './router';

dotenv.config();
const app = express();
app.use(json());
app.use(router);
const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
