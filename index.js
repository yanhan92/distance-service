var TelegramBot = require('node-telegram-bot-api');
var Tgfancy = require ('tgfancy');
var geolib = require('geolib');

var port = process.env.PORT || 8443;
var host = process.env.HOST;
var externalURL = process.env.CUSTOM_ENV_VARIABLE || 'https://location-bot2.herokuapp.com' ;

var token = process.env.Telegram_API_KEY;

var bot = new Tgfancy (token, {
	webHook: {
		port : port,
		host : host
	}
});

changiairbot.setWebHook(externalURL + ':443/bot' + token)

var datum_mbs = {latitude: 1.283448, longitude: 103.858977};
var datum_sail = {latitude: 1.280889, longitude: 103.852609};
var datum_LPS = {latitude: 1.280392, longitude: 103.850435};
var datum_bismilah = {latitude: 1.305061, longitude: 103.853657};

bot.on("text", function(message) {
  var fromId = message.from.id;
  var str=message.text+'';
  var token = str.split(", ");
  var datum = {};
  datum["latitude"] = token[0];
  datum["longitude"]=token[1];
  console.log(`latitude = ${token[0]}, longitude = ${token[1]}`);
  var distance = geolib.getDistance(
  		datum_mbs,
  		datum
  	);
  bot.sendMessage(fromId, "Distance between you and Marina Bay Sands: "+distance+"m");

  var distance = geolib.getDistance(
  		datum_sail,
  		datum
  	);
  bot.sendMessage(fromId, "Distance between you and The Sail: "+distance+"m");

  var distance = geolib.getDistance(
  		datum_LPS,
  		datum
  	);
  bot.sendMessage(fromId, "Distance between you and Lau Pa Sat: "+distance+"m");

  var distance = geolib.getDistance(
  		datum_bismilah,
  		datum
  	);
  bot.sendMessage(fromId, "Distance between you and Bismilah Briyani: "+distance+"m");
});

