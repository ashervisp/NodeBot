module.exports = {
  name: 'birthday',
  description: 'Shows Available Birthdays',
  execute(message,args){
        message.channel.send(`Happy Birthday!`);
  }
}
