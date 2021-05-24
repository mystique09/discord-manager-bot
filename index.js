const {
  CommandoClient
} = require('discord.js-commando');
const path = require('path');
const {
  DISCORD_TOKEN
} = require('./config.json');

const client = new CommandoClient({
  commandPrefix: '.',
  owner: '387156607059886083',
  invite: ''
});

client.registry
.registerDefaultTypes()
.registerGroups([
  ['first', 'Fun commands.'],
  ['second', 'Admin/Mods only command.']
])
.registerDefaultGroups()
.registerDefaultCommands({
  unknownCommand: false
})
.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', ()=> {
  console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
  client.user.setActivity(`Playing with my own feelings, she doesn't like me :sob:`);
});

client.on('guildMemberAdd', (member)=> {
  const memberLogChannel = member.guild.channels.cache.find(channel => channel.name === 'member-logs');

  if (!memberLogChannel) return;
  
  memberLogChannel.send(`Welcome to the server <@${member.user.id}>!`);
  const normalRole = member.guild.roles.cache.find(role => role.name === 'Member');
  member.roles.add(normalRole);
});

client.on('guildMemberRemove', (member)=> {
  const serverLog = member.guild.channels.cache.find(channel => channel.name === 'server-logs');

  if(!serverLog) return;
  serverLog.send(`${member.user.tag} left the server.`);
  return;
});

client.on('error', console.error);

client.login(DISCORD_TOKEN);