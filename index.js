// requiring dependencies
const express = require('express');
const port = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));

// setting up the server
app.listen(port, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Server started on port ${port}`);
	}
});
