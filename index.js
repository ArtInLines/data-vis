const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 88;

app.use('/assets', express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => `Server running...`);
