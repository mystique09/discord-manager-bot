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
        }],
      ownerOnly: true, 
    });
  }
  
  run(message, {member}){
    message.say('You got banned!');
    // BAN COMMAND HERE
  }
}

module.exports = BanCommand;