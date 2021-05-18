// requiring dependencies
const express = require('express');
const translateRoute = require('./routes/translate');
const port = 3000;

const app = express();

// routers and middlewares
app.use(express.urlencoded({ extended: true }));
app.use('/translate', translateRoute);
// app.use('/delete');
// app.use('/deleteAll');

// setting up the server
app.listen(port, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Server started on port ${port}`);
	}
});
