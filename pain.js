require("./lib/global")

const func = require("./lib/place")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
    console.log(chalk.red.bold(`
  ｢ JUSTIN OFFICIAL V11｣
Developer : Justin Official
Owner : 081572074859
Status Script : Premium Useer

<INFO UPDATE SCRIPT>
https://whatsapp.com/channel/0029VaxxUio545v2bL3FE91g

POWERED BY JUSTIN OFFICIAL 
`))
const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: [ "Ubuntu", "Chrome", "20.0.04" ]   
// browser: ['Chrome (Linux)', '', '']
}
const mayor = func.makeWASocket(connectionOptions)
if(usePairingCode && !mayor.authState.creds.registered) {
		const phoneNumber = await question(color(`
   ｢ JUSTIN OFFICIAL V11 ｣
Script Version : 11.0.2
Developer : Justin Official
Subscribe YouTube : @JustinOfficial

Input Your Number = 628 :\n`, 'red'));
console.log(color(`
┏━━━━━━━━━━━━━━━•
┃Pairing Code Anda
┗━━━━━━━━━━━━━━━•`))
		const code = await mayor.requestPairingCode(phoneNumber.trim())
		console.log(chalk.green(`SCRIPT BY JUSTIN OFFICIAL : ${code} `))

	}
store.bind(mayor.ev)

mayor.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
mayor.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
mayor.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `JUSTIN OFFICIAL V11`)
mayor.sendMessage(`6283824084666@s.whatsapp.net`, { text: `｢ 𝐉𝐔𝐒𝐓𝐈𝐍 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 ｣
Status : Conect V11.2
Developer : Justin Official
Subscribe YouTube : @JustinOfficial
Scriptbot Versi : 11.0.2

Buy Sc Ini Versi No Enc? 65K
> Free Panel 
Join Reseller Panel? 20K
> Bebas Jualan Panel 
Join Reseller Script Bug? 100K
> Free Update Sc Setiapnya
> Bebas Jualan Sc

<INFO UPDATE SCRIPT BOT>
https://whatsapp.com/channel/0029VaxxUio545v2bL3FE91g`})
if (autoJoin) {
mayor.groupAcceptInvite(codeInvite)
}
}
})

mayor.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return mayor.readMessages([m.key])
if (!mayor.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(mayor, m, store)
require("./PAIN V3.js")(mayor, m, store)
} catch (err) {
console.log(err)
}
})

mayor.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = mayor.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

mayor.public = true

mayor.ev.on('creds.update', saveCreds)
return mayor
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})