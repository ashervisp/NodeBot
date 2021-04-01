module.exports = {
  name: 'hug',
  aliases:['hugs','hugging'],
  description: 'Hug Indivdual',
  execute(message,args){
    message.channel.send(`Hugs ${message.author}! Wow you're a great hugger`);
  }
}
