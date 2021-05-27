const {Command} = require('discord.js-commando');

class MemeCommand extends Command {
  constructor(client){
    super(client, {
      name: 'meme',
      aliases: ['get-meme'], 
      group: 'first',
      memberName: 'meme', 
      description: 'Fetch a meme from api.',
      throttling: {
        usages: 2,
        duration: 10
      }
    });
  }
  
  run(message){
    message.say('Fetching meme');
  }
}

module.exports = MemeCommand;