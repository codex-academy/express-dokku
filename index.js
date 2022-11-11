import express from 'express';

const app = express();

const PORT = process.env.PORT || 4007;

app.get('/', (req, res) => res.send({ message: 'Hello!', status: 200}));

app.listen(PORT, () => console.log(`App started : ${PORT}`))