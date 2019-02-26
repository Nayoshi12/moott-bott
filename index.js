var Discord = require("discord.js");
var fs = require("fs");
const bot = new Discord.Client();

const token = "NTQ4MTkxOTg1OTQxNDc5NDI2.D1BvkA.up0xQIjrEPAkqlbfu64nT7dh2hY";

const statsfile = "stats.json";

bot.on('ready',()=>{
  console.log("lock and loaded my dude");

      fs.readFile(statsfile,{flag:'r+'},(err,data)=>{
        if(err.errno == -2){
            fs.writeFile(statsfile,"{}",(err)=>{
              if(err)
                console.log(err);
            });
        }
      });
    // }

})

bot.on('message',(message)=>{
  if(message.author.id == bot.user.id){
    return;
  }
  if(message.author.id == "263417510253035530")
    message.react("🔔");
  var lol = /(lol)|(lmao)|(lmfao)|(kek)/i;
  var d = message.content.match(lol);
  if(d != null){
    // message.channel.send(d[0]);
    fs.readFile(statsfile,{flag:'r+'},(err,data)=>{
      if(err.errno == -2){
          fs.writeFile(statsfile,"{}",(err)=>{
            if(err)
              console.log(err);
          });
      }
    });
  }
});

bot.login(token);
