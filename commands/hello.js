module.exports = {
  name: 'hello',
  description: 'Howdy!',
  execute(message,args){
    message.channel.send('Howdy Fellow!');
  }
}
