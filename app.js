const express = require('express');
const app = express();

app.get('/api/email', (req, res) => {
	res
		.status(200)
		.json({ name: 'Pasang Lama', email: 'pasanghyolmo28@gmail.com' });
});

const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
