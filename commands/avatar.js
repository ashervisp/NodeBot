module.exports = {
  name: 'avatar',
  description: 'Display Avatar Photo',
  execute(message,args){
    if(!message.mentions.users.size){
      return message.channel.send(`Display Icon: <${message.author.displayAvatarURL({format:'png',dynamic:true})}>`);
    }
  }
}
