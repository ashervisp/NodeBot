module.exports = {
  name: 'leave',
  description: 'Bot Stops',
   async execute(message,args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return channel.send('You gotta be in a voice channel first!')
        await voiceChannel.leave()
        await message.channel.send('Goodbye Fwends :(')
  }
}
