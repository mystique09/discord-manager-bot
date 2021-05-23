
const {Command} = require('discord.js-commando');

class CleanCommand extends Command {
  constructor(client){
    super(client, {
      name: 'clean', 
      aliases: ['bulk-delete', 'clean', 'clean-channel'],
      group: 'second', 
      memberName: 'clean', 
      description: 'This command is use to delete multiple messages',
      args: [
        {
          key: 'amount',
          prompt: 'Maximum amount is 100',
          type: 'integer'
        }], 
        clientPermissions: ['ADMINISTRATOR', 'MANAGE_MESSAGES'], 
        userPermissions: ['MANAGE_MESSAGES']
    })
  }
  
 async run(message, {amount}){
   try {
     const promptMessage = await message.channel.send(`Deleting ${amount} messages`);
     await promptMessage.delete({timeout: 3000});
     
     const bulkDeleted = await message.channel.bulkDelete(amount);
     
     if(bulkDeleted){
       const success_delete = await message.channel.send(`Successfully deleted ${amount} message${amount < 2 ? '' : 's'}`);
       await success_delete.delete({timeout: 1000});
     }
     
   }catch(e){
     message.say(`You don't have the permission to do that!`);
   }
  }
}

module.exports = CleanCommand;