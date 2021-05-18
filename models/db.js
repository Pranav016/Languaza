const mongoose = require('mongoose');

const translateSchema = new mongoose.schema({
	from: {
		type: String,
		required: true,
	},
	to: {
		type: String,
		required: true,
	},
	translationString: {
		type: String,
		required: true,
	},
	translatedString: {
		type: String,
		required: true,
	},
	date: Date.now(),
});

module.exports = mongoose.model('translate', translateSchema);
