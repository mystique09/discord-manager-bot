const {
  Command
} = require('discord.js-commando');
const axios = require('axios');

class PunCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pun',
      description: 'Fetch a pun/jokes from api.',
      group: 'first',
      memberName: 'pun',
      aliases: ['joke', 'fetch-pun'],
      throttling: {
        usages: 1,
        duration: 5
      }
    });
  }

  async run(message) {
    const response = await axios("https://dad-jokes.p.rapidapi.com/random/joke", {
      method: "GET",
      headers: {
        'x-rapidapi-key': '6b5bda7774msh39305ed45cf20b8p13c09djsn7f508ee41568',
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
      }
    });
    try {
      const jokes = await response.data.body;
      const filter = m => m.author.id === message.author.id;

      if (jokes.length > 0) {
        message.say(jokes[0].setup).then(()=> {
          message.channel.awaitMessages(filter, {
            time: 15000, max: 1, errors: ['time']}). then((collected)=> {
            message.say(jokes[0].punchline);
          }).catch((err)=> {
            message.reply('Timeout!');
          });
        });
      }
    }catch(e) {
      message.say('An error occurred, try again later or try to contact the admin.');
      console.error(e);
    }
  }
}

module.exports = PunCommand;