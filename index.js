
const {CommandoClient} = require('discord.js-commando');
const path = require('path');
const {DISCORD_TOKEN} = require('./config.json');

const client = new CommandoClient({
  commandPrefix: '.', 
  owner: '387156607059886083', 
  invite: ''
});

client.registry
     .registerDefaultTypes()
     .registerGroups([
       ['first', 'Fun commands.'], 
       ['second','Admin/Mods only command.'], 
       ['third', 'Meme commands.']
       ])
     .registerDefaultGroups()
     .registerDefaultCommands({
       unknownCommand: false
     })
     .registerCommandsIn(path.join(__dirname, 'commands'));
     
client.once('ready', ()=>{
  console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
  client.user.setActivity('with DiscordBot Manager.')
})

client.on('error', console.error);

client.login(DISCORD_TOKEN);