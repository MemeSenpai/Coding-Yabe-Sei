exports.run = (client, message,args, tools) => {
    let mod = message.guild.roles.find(role => role.name === "Mods");
    let userinp = parseInt(args[0], 10)

    if(!message.member.roles.has(mod.id)) return message.reply('You are not allowed to use this command.');

    if(isNaN(userinp)) return message.reply("Please supply a number of messages to delete.");

    if(userinp > 100 || userinp < 2) return message.reply('Please supply a number between 2 and 100 to delete.');

    message.channel.bulkDelete(userinp + 1).then(messages => console.log(`Bulk deleted ${messages.size} messages`)).catch(console.error);
}