module.exports = (member)=> {
  const serverLog = member.guild.channels.cache.find(channel => channel.name === 'server-logs');

  if(!serverLog) return;
  serverLog.send(`${member.user.tag} left the server.`);
  return;
};