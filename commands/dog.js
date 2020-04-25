const randomPuppy = require("random-puppy");
const snekfetch = require("snekfetch")

module.exports.run = async (bot, message, args) => {

let reddit = [
  "meme",
  "animemes",
  "MemesOfAnime",
  "animememes",
  "AnimeFunny",
  "dankmemes",
  "dankmeme",
  "wholesomememes",
  "MemeEconomy",
  "techsuppotanimals",
  "meirl",
  "me_irl",
  "2meirl4meirl",
  "AdviceAnimals"
]
   let subreddit = reddit[Math.floor(Math.random() * reddit.lenght - 1)];

    message.channel.startTyping();

   randomPuppy(subreddit).then(url => {
         snekfetch.get(url).then(async res => {
            await message.channel.send({
                files: [{
                    attachment: res.body,
                    name: "dog.png"
                }]
            })
         });  
   });
};

module.exports.help = {
   name: "dog",
   aliases: ["dogs"]
}