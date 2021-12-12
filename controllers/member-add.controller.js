module.exports = (member) => {
  const memberLogChannel = member.guild.channels.cache.find(channel => channel.name === 'member-logs');

  if (!memberLogChannel) return;
  
  memberLogChannel.send(`Welcome to the server <@${member.user.id}>!`);
  const normalRole = member.guild.roles.cache.find(role => role.name === 'Member');
  member.roles.add(normalRole);
};