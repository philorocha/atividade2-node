const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from root');
    res.end();
})

app.get('/cadastro', (req, res) => {
    res.send('Hello from cadastro');
    res.end();
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));