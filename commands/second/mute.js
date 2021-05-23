const {Command} = require('discord.js-commando');

class MuteCommand extends Command {
  constructor(client){
    super(client, {
      name: 'mute', 
      aliases: ['mute', 'mute-member', 'mute-him', 'mute-her'], 
      group: 'second', 
      memberName: 'mute', 
      description: 'This command is used to mute a member at a certain duration.', 
      clientPermissions: ['ADMINISTRATOR'], 
      userPermissions: ['MUTE_MEMBERS'], 
      args: [{
          key: 'member', 
          prompt: 'Who would you like to mute?', 
          type: 'member',
        }]
    });
  }
  
  run(message, {member}){
    message.say('You got mute!')
  }
}