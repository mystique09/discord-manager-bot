const {Command} = require('discord.js-commando');
const axios = require('axios');

class UselessFactCommand extends Command {
  constructor(client){
    super(client, {
      name: 'useless-facts', 
      aliases: ['useless-fact', 'useless'], 
      group: 'first', 
      memberName: 'useless-facts', 
      description: 'Will respond a useless fact.', 
      throttling: {
        usages: 1,
        duration: 5,
      }
    });
  }
  
  async run(message){
    try {
      const response = await axios('https://uselessfacts.jsph.pl/random.json?language=en', {
        method: "GET", 
        headers: {
          "Content-Type": "application/json"
        }
      });
      const {text} = await response.data;
      message.say(text);
    }catch(e){
      message.say('An error occurred, contact the admin.');
      console.error(e);
    }
  }
}

module.exports = UselessFactCommand;