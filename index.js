const fs = require('fs');
const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name,command);
}

const prefix = '!';

client.on('ready', () => {
  console.log('Thank you for keeping me alive :)');
  client.user.setActivity('Monster Hunter Rise')
});


client.on('message',message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.trim().split(/ +/)
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if(!command) return;



  try{
    command.execute(message,args);
  } catch(error){
    console.error(error);
    message.reply('Error! Oops')
  }

});

client.login(process.env.TOKEN);
