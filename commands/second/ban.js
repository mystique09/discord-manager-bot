const {Command} = require('discord.js-commando');

class BanCommand extends Command {
  constructor(client){
    super(client, {
      name: 'ban', 
      aliases: ['ban', 'ban-member', 'ban-him', 'ban-her'], 
      group: 'second',
      memberName: 'ban', 
      description: 'This command is used to ban a member.',
      args: [{
          key: 'member', 
          prompt: 'Who would you like to ban?', 
          type: 'member',
        }, {
          key: 'reason', 
          prompt: 'Provide a reason!',
          type: 'string'
        }],
      clientPermissions: ['ADMINISTRATOR'], 
      userPermissions: ['BAN_MEMBERS']
    });
  }
  
  async run(message, {member, reason}){
    const serverLog = member.guild.channels.cache.find(channel => channel.name === 'server-logs');
    const member_tag = member.user.tag;
  
  if (!serverLog) return;
    try {
      const banned = await member.ban({days: 0.000005, reason});
      if(banned){
        serverLog.send(`${member_tag} is banned from the server.`);
        return;
      }
    }catch(e){
      message.say(`You don't have the permission.`);
    }
  }
}

module.exports = BanCommand;