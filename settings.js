//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: Zeeker bot MD" //ur yt chanel name
global.socialm = "GitHub: xdamirubot" //ur github or insta name
global.location = "Srilanka, Colombo " //ur location

//new
global.botname =  'zeeker bot MD' //ur bot name
global.ownernumber = '+94 74 374 7913' //ur owner number
global.ownername = ' X-Bot --DAMIRU' //ur owner name
global.websitex = ""
global.wagc = "https://whatsapp.com/channel/0029VaJgHDB1t90b7wH2Lz3m"
global.themeemoji = '🧨'
global.wm = "Zeeker Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD10' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n94743747913"
global.creator = "94743747913@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["94743747913"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = true  //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
