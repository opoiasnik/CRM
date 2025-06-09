const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('OK'));
app.listen(3005, () => console.log('❤️  Test server up on port 3000'));
