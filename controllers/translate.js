const express = require('express');
const mongoose = require('mongoose');
const translate = require('translate');
const bodyParser = require('body-parser');

module.exports.translate = async (req, res) => {
	try {
		const text = req.body.text;
		const translateFrom = req.body.from || 'en';
		const translateTo = req.body.to;
		console.log({ text, translateFrom, translateTo });
		translate.engine = 'libre';
		translate.from = translateFrom;
		const translatedText = await translate(text, { to: translateTo });
		return res.send(translatedText);
	} catch (err) {
		console.log(err);
		res.status(404).send(err);
	}
};
