const {Command} = require('discord.js-commando');

class MeowCommand extends Command {
  constructor(client){
    super(client, {
      name: 'meow', 
      aliases: ['cat-sound'], 
      group: 'first', 
      memberName: 'meow', 
      description: 'Replies with a meow.', 
      throttling: {
        usages: 1,
        duration: 10,
      }
    });
  }
  
  run(message){
    return message.say('Meow ^O^');
  }
}

module.exports = MeowCommand;