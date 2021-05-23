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
        }, {
          key: 'reason', 
          prompt: 'Provide a reason.',
          type: 'string'
        }]
    });
  }
  
  async run(message, {member, reason}){
    try {
      const kicked = await member.kick(reason);
      message.say(`Successfully kicked ${member.user.tag}.`);
    } catch (e) {
      message.say(`You don't have the permission.`);
    }
  }
}

module.exports = KickCommand;