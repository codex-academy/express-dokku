import express from 'express';

const app = express();

const PORT = 4007;

app.get('/', (req, res) => res.send('Hello!'));

app.listen(PORT, () => console.log(`App started : ${PORT}`))