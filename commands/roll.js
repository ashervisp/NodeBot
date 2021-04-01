module.exports = {
  name: 'roll',
  description: 'Roll Dice',
  execute(message,args){
    if(args){
      for(let x in args){
        if(Number.isInteger(parseInt(args[x]))){
          const result = Math.floor(Math.random()*(args[x]-1) + 1);
          message.reply(`You Rolled a ${result}`)
        }
      }
    }
  }
}
