var Tgfancy = require ('tgfancy');
var fs = require('fs');
var port = process.env.PORT || 8443;
var host = process.env.HOST;
var externalURL = process.env.CUSTOM_ENV_VARIABLE || 'https://changiairbot.herokuapp.com' ;

const QPX_API_KEY = process.env.QPX_API_KEY;
const Telegram_API_KEY =process.env.Telegram_API_KEY; 
const options = { write: __dirname + '\\data'};
var changiairbot = new Tgfancy (Telegram_API_KEY, {
	webHook: {
		port : port,
		host : host
	}
});

changiairbot.setWebHook(externalURL + ':443/bot' + Telegram_API_KEY);

changiairbot.on("text", function(message){
	console.log("Message received:" + message.text);
	changiairbot.sendMessage(message.chat.id , "Hi");
});
