module.exports = {
  name: 'poop',
  description: 'Poop Command',
  execute(message,args){
        message.channel.send(`${message.author} loves poopin`);
  }
}
