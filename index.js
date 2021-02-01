const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 88;

app.use('/assets', express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
}).get('/data/:dataset', (req, res) => {
	let fPath = path.join(__dirname, './data/' + req.params.dataset);
	const possibleEndings = ['.json', '.csv'];
	for (let i = 0; i < possibleEndings.length; i++) {
		const end = possibleEndings[i];
		if (fs.existsSync(fPath + end)) {
			fPath += end;
			break;
		}
	}
	const file = fs.readFileSync(fPath);
	res.send(file);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
