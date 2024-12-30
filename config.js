require("./lib/module")

// SETTING 
global.owner = "6285819914586"
global.ownername = "𝐉𝐔𝐒𝐓𝐈𝐍 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋"
global.ownernumber = "6285819914586"
global.Creator = "Developer JustinOfficial"
global.Dec = "JustinOfficialV11"
global.autoJoin = false
global.antilink = false

// THUMBNAIL 
global.imageurl = 'https://files.catbox.moe/yry79z.jpg'
global.channel = 'https://whatsapp.com/channel/0029VaxxUio545v2bL3FE91g'

// STICKER
global.packname = "Sticker By"
global.author = "𝐉𝐔𝐒𝐓𝐈𝐍 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋"
global.jumlah = "5"


//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = false //auto view status/story
















// RESPON BOT
global.onlyprem = `\`Developer JustinOfficial\` \n*Only Premium User*`
global.onlyown = `\`Developer JustinOfficial\` \n*Only Owner*`
global.onlygroup = `\`[V11] Justin\` \n*Only Group*`
global.onlyadmin = `\`[V11] Justin\` \n*Only Admin*`
global.notext = `\`[V11] Justin\` \n*No Text*`
global.noadmin = `\`[V11] JustinOfficial\` \n*You Are Not Admin*`
global.succes = `\`[V11] 𝐉𝐔𝐒𝐓𝐈𝐍 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋\` \n*Done Brohhh!*`
global.invalid = `\`[V11] 𝐉𝐔𝐒𝐓𝐈𝐍 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋\` \n*Invalid Command Text*`
global.bugrespon = `\`[V11] 𝐉𝐔𝐒𝐓𝐈𝐍 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋\` \n*OTW ATTACK WHATSAPP TARGET!*`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})