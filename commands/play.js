const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
  name: 'play',
  description: 'Plays Music in voice channel',
  async execute(message,args){

    const voiceChannel = message.member.voice.channel;

    if(!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has('CONNECT')) return message.channel.send('You dont have the right permissions')
    if(!permissions.has('SPEAK')) return message.channel.send('You dont have the right permissions')
    if(!args.length) return message.channel.send('You need a second argument')

    const connection = await voiceChannel.join();

    const videoFinder = async(query) => {
      let website = 'https://www.youtube.com/watch?v=';
      if(query.startsWith(website)){
        query = query.slice(website.length)
        if(query.includes('=')){
          query = query.split('&')
          query = query[0];
        }
        console.log(query)
      }
      const videoResult = await ytSearch(query);

      return(videoResult.videos.length > 1) ? videoResult.videos[0]:null;

    }

    const video = await videoFinder(args.join(' '))

    if(video){
      const stream = ytdl(video.url,{filter:'audioonly'});
      connection.play(stream,{seek:0, volume:5})
      .on('finish',() =>{
          voiceChannel.leave()
      });

      await message.reply(`Now Playing **${video.title}**`)
    } else{
      message.channel.send('No video found');
    }
  }
}
