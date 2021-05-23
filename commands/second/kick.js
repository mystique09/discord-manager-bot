const {Command} = require('discord.js-commando');

class KickCommand extends Command {
  constructor(client){
    super(client, {
      name: 'kick', 
      aliases: ['kick', 'kick-member', 'kick-him', 'kick-her'], 
      group: 'second',
      memberName: 'kick', 
      description: 'This command is used to kick a member.', 
      clientPermissions: ['ADMINISTRATOR'], 
      userPermissions: ['KICK_MEMBERS'], 
      args: [{
          key: 'member', 
          prompt: 'Who would you like to kick?', 
          type: 'member',
        }]
    });
  }
  
  run(message, {member}){
    message.say('You are kicked from the server!')
  }
}

module.exports = KickCommand;