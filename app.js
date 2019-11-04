/*
    app.js
    The main file.
    This starts the bot and everything else.

    Created: 4.11.2019
    Authors: Emilius123
*/

//-- Variables --\\
const config = require("./config") //A config doesn't exist yet, but it will. ;)
const Discord = require("discord.js");
const client = new Discord.Client();

//-- Finally logging in --\\
client.login(config.Token)