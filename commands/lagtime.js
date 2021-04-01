module.exports = {
  name: 'lag',
  description: 'Display Netcode',
  execute(message,args){
    const timeLag = message.createdTimestamp - Date.now();
    message.reply(`This took latency of ${timeLag}ms.`)
  }
}
