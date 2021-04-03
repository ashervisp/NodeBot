const prefix = '!'

module.exports = {
  name: 'help',
  description: 'Display Commands and their info',
  aliases:['commands','command','list'],
  execute(message,args){
    const data = [];
    const{commands} = message.client;

    if(!args.length){
      data.push('List of Commands:');
      data.push(commands.map(command => command.name).join(', '));
      data.push(`\nType \`${prefix}help [command name]\` for more info on the command`)

      return message.author.send(data, {split: true})
        .then(() => {
            if (message.channel.type === 'dm') return;
            message.reply('Here is a DM with all available commands!');
        })
        .catch(error =>{
            console.error(`Unable to send help DM to ${message.author.tag} \n`, error);
            message.reply('I cannot DM you at the moment. Are DMs disabled?')
        });
    }

    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases. includes(name));

    if(!command){
      return message.reply('not a valid command')
    }

    data.push(`**Name:** ${command.name}`);

    if(command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
    if(command.description) data.push(`**Description:** ${command.description}`);
    if(command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

    message.channel.send(data, {split:true});
  }
}
