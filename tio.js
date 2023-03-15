require('./setting')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const { ytMp4, ytMp3, ytPlay } = require('./lib/ytdl')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const fetch = require("node-fetch");
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const maker = require('mumaker')
const naztod = require("tod-api")
const request = require('request');
const crypto = require("crypto");
const textpro = require('./lib/textpro')
const bochil = require('@bochilteam/scraper')
const { mediafireDl } = require('./lib/mediafire.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const esce = ('© Lann')

const ini_kangbaned = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
global.prem = require("./lib/premium")
gambar = fs.readFileSync('./media/image/tio.jpg')
//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 
 
// read database
let game = db.data.game
let tebaklagu = game.tebaklagu = []
let _family100 = game.family100 = []
let kuismath = game.math = []
let tebakgambar = game.tebakgambar = []
let tebakkata = game.tebakkata = []
let caklontong = game.lontong = []
let caklontong_desk = game.lontong_desk = []
let tebakkalimat = game.kalimat = []
let tebaklirik = game.lirik = []
let tebaktebakan = game.tebakan = []
let vote = db.data.others.vote = []

module.exports = tio = async (tio, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = body.substring(body.indexOf(" ") + 1);
const pushname = m.pushName || "No Name"
const botNumber = await tio.decodeJid(tio.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list')

// Group
const groupMetadata = m.isGroup ? await tio.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || isCreator || prem.checkPremiumUser(m.sender, premium);
const sotoy = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🔔',
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔  Win',
'🍒 : 🍒 : 🍒 Win',
'🍌 : 🍌 : 🍌 Lose'
]

 
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
const klqor = ['😁','🥰','😇','🥲','🙃','🙂','🤑','😑','♻️','🔞','✅','🙏','❤','🔴','❗','〽️','🎶','🤗','👤','🔎','🔋','📚','🎬','🐵','🐒','🐦','🍌','🍎','🥝','🥒','🫓','🍒','🍐','🥦','🌍','🌎','🎃','🎄','🥎','🎖','🏆','🏅','🥇','🥈','🥉','🎗','🎟','🎫','🎁','🎀','👑','💎','⚠️']
const kloadq = klqor[Math.floor(Math.random() * klqor.length)]
const filsj = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf']
const filsk = filsj[Math.floor(Math.random() * filsj.length)]

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
if (!('nsfw' in chats)) chats.nsfw = false

} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
nsfw: false,

}


let setting = global.db.data.settings[botNumber]

if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateVideo' in setting)) setting.templateVideo = false
if (!('templateLocation' in setting)) setting.templateLocation = false
if (!('templateDocument' in setting)) setting.templateDocument = true

} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
templateImage: false,
templateVideo: false,
templateLocation: false,
templateDocument: true,

}

} catch (err) {
console.error(err)
}
//Respon Gc Only

/*if (!m.isGroup) {
 return
}*///Buat Fitur Gc Doang Ga Bisa Dibuat Button On Off
/*if (db.data.chats[m.chat].gconly && !m.isGroup) {
 return
}*///Yg Ini Masuk Db Chat Bot
/*if (db.data.settings[botNumber].onlyGroup && !m.isGroup) {
 return
}*///YG INI MASUK DB SETTINGS BOT
// Public & Self
if (!tio.public) {
if (!m.key.fromMe) return
}
if (m.message) {
tio.readMessages([m.key])
}
//  Di sini editing autovn dan auto ketik
// selebihnya jangan di edit nanti error
   if (m.message) {
tio.sendPresenceUpdate('composing', m.chat)
tio.readMessages([m.key])
}
 if (m.message) {
tio.sendPresenceUpdate('recording', m.chat)
tio.readMessages([m.key])
}


if (m.text.includes('🗿')) {
tio.sendMessage(m.chat, {
  react: {
text: '🗿',
key: m.key
  }})
}
//Console logs by Tio
   if (m.message) {
  await console.log(chalk.black(chalk.bgRed('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.white(chalk.bgBlue(isCmd ? body : m.mtype || body.slice(0, 20))) + '\n' + chalk.black(chalk.bgCyan('[ ~> from ]')), chalk.black(chalk.bgWhite(pushname)), chalk.black(chalk.bgYellow(m.sender)) + '\n' + chalk.black(chalk.bgMagentaBright('[ ~> in ]')), chalk.black(chalk.bgYellow(m.isGroup ? pushname : 'Private Chat')), chalk.black(chalk.bgCyan(m.chat)))
  console.log('\n')  
}   
//Premium Exp
prem.expiredCheck(tio, m, premium);

//Function
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//sticker url
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './database/stick' + names + '.png', async function () {
console.log('selesai');
let filess = './database/stick' + names + '.png'
let asw = './database/stick' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
tio.sendMessage(to, { sticker: media}, {quoted: m})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

// Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
let gclink = (`https://chat.whatsapp.com/`+await tio.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
if (isAdmins) return m.reply(`*maaf kamu admin*`)
if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
tio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}


// Store
const db_respon_list = JSON.parse(fs.readFileSync('./fitur/list-message.json'))
if (m.isGroup && isAlreadyResponList(from, body, db_respon_list)) {
  var get_data_respon = getDataResponList(from, body, db_respon_list)
  if (get_data_respon.isImage === false) {
  var butstore = [{ buttonId: `.menu`, buttonText: { displayText: 'Contact Owner 👦' }, type: 1 }]
  tio.sendMessage(from, { text: sendResponList(from, body, db_respon_list), mentions: [getDataResponList, m.sender] }, { quoted : m })
  } else {
  imgstore = await getBuffer(get_data_respon.image_url)
  var butstore = [{ buttonId: `.menu`, buttonText: { displayText: 'Contact Owner 👦' }, type: 1 }]
  tio.sendMessage(from, { image: imgstore, caption: get_data_respon.response, buttons: butstore, mentions: [getDataResponList, m.sender]}, { quoted: m })
  }
  }

//Store Lagi
if ((budy) && ["p", "proses", "Proses", "P"].includes(budy) && !isCmd) {
  if (!m.isGroup) return
  if (!isAdmins && !isOwner) return
  if (!m.quoted) throw 'Reply Pesan!'
  let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
  let proses = (db.data.chats[m.chat].setProses || `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@catatan\n\nPesanan @user sedang di proses!`).replace('@tanggal', `${tanggal(new Date())}`).replace('@jam', time).replace('@catatan', `${tek ? tek : '-'}`).replace('@user', '@' + m.quoted.sender.split('@')[0])
  tio.sendTextWithMentions(m.chat, proses, m)
  }
if ((budy) && ["d", 'done', "Done", "D"].includes(budy) && !isCmd) {
  if (!m.isGroup) return
  if (!isAdmins && !isOwner) return
  if (!m.quoted) throw 'Reply Pesan!'
  let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
  let sukses = (db.data.chats[m.chat].setDone || `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n@catatan\n\nTerimakasih @user Next Order ya🙏`).replace('@tanggal', `${tanggal(new Date())}`).replace('@jam', time).replace('@catatan', `${tek ? tek : '-'}`).replace('@user', '@' + m.quoted.sender.split('@')[0])
  tio.sendTextWithMentions(m.chat, sukses, m)
  }

//PANELL MARK 🗿
global.addUserPanel = (email, username, expired, _db) => {
var obj_add = {
email: email,
username: username,
expired: expired
}
_db.push(obj_add)
fs.writeFileSync('./database/user.json', JSON.stringify(_db, null, 3))
} 
  //Resize
 const reSize = async(buffer, ukur1, ukur2) => {
 return new Promise(async(resolve, reject) => {
 let jimp = require('jimp')
 var baper = await jimp.read(buffer);
 var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
 resolve(ab)
 })
 }
 
 //Fake
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `${weem}`, orderTitle: 'Tio', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `${weem}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "extendedTextMessage": {"text":`${weem}`, "title": `${botname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `${weem}`, "description": `${botname}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": `${weem}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${weem}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${weem}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `${weem}`, "caption": `${weem}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${weem}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${weem}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${weem}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
const floc2 = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `${weem}`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${weem}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;weem,;;;\nFN:weem\nitem1.TEL;waid=6285875158363:6285875158363\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await reSize(thumb, 100, 100), thumbnail: await reSize(thumb, 100, 100),sendEphemeral: true}}}
const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `${weem}`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": await reSize(thumb, 100, 100),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}


// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})

// total hit
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/tio.com/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/tio.com${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
// auto set bio
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await tio.setStatus(`${tio.user.name} | Runtime : ${runtime(uptime)}`)
setting.status = new Date() * 1
}
}
  const deploy = (teks) => { tio.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
 
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: tio.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, tio.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
tio.ev.emit('messages.upsert', msg)
}
//Casenya 
switch(command) {
//Store Menu Nya Mark 🗿
case 'store-list': {
  if (!m.isGroup) return m.reply(mess.group)
  if (db_respon_list.length === 0) return m.reply('Tidak Ada List Message Di Dalam Database')
  if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply('Tidak Ada List Message Yang Terdaftar Untuk Grup Ini')
  //var sender = m.sender
  var arr_rows = [];
  for (let x of db_respon_list) {
  if (x.id === from) {
  arr_rows.push({
  title: x.key,
  rowId: x.key
  })
  }
  }
  var listMsg = {
  text: `*Hai.. @${sender.split("@")[0]} 👋*\n\n*Ini Adalah Daftar List Yang Tersedia Untuk Group ${groupName}*\n\n*Gunakan Dengan Bijak!*`,
  buttonText: 'Klik Disini 👋',
  footer: `${groupName} || ${global.ownername}`,
  mentions: [m.sender],
  sections: [{
  title: groupName, rows: arr_rows
  }]
  }
  tio.sendMessage(from, listMsg)
  }
  break
case 'addlist': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner) return m.reply(mess.admin)
  //var sender = m.sender
  var args1 = q.split("@")[0]
  var args2 = q.split("@")[1]                
  if (!q.includes("@")) return m.reply(`Gunakan Dengan Cara ${command} *key@response*\n\nContoh :\n\n${command} Creator@Nzrl Afndi`)
  if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List Dengan Key : *${args1}* Sudah Tersedia Di Group Ini.`)
  if (/image/.test(mime)) {
  let media = await tio.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  addResponList(m.chat, args1, args2, true, url, db_respon_list)
  m.reply(`Sukses set list message dengan key : *${args1}*`)
  if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
  addResponList(from, args1, args2, false, '-', db_respon_list)
  m.reply(`Sukses Set List Message Dengan Key : *${args1}*`)
  }
  }
  break
case 'dellist': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner) return m.reply(mess.admin)
  //var sender = m.sender
  if (db_respon_list.length === 0) return m.reply('Tidak Ada List Message Di Dalam Database')
  if (!q) return m.reply(`Gunakan Dengan Cara ${command} *key*\n\n_Contoh_\n\n${command} Creator`)
  if (!isAlreadyResponList(from, q, db_respon_list)) return m.reply(`List Dengan Key *${q}* Tidak Tersedia Di Dalam Database!`)
  delResponList(from, q, db_respon_list)
  m.reply(`Sukses Delete List Message Dengan Key *${q}*`)
  }
  break
case 'updatelist': case 'update': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner) return m.reply(mess.admin)
  //var sender = m.sender
  var args1 = q.split("@")[0]
  var args2 = q.split("@")[1]
  if (!q.includes("@")) return m.reply(`Gunakan Dengan Cara ${command} *key@response*\n\nContoh :\n\n${command} Creator@Nzrl Afndi`)
  if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Maaf, Key *${args1}* Belum Terdaftar Di Group Ini`)
  if (/image/.test(mime)) {
  let media = await tio.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  updateResponList(from, args1, args2, true, url, db_respon_list)
  m.reply(`Sukses update list message dengan key : *${args1}*`)
  if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
  updateResponList(from, args1, args2, false, '-', db_respon_list)
  m.reply(`Sukses Update List Dengan Key *${args1}*`)
  }
  }
  break

case 'donasi': case 'donate': case 'pay': case 'payment': {
tio.sendMessage(m.chat, { image: fs.readFileSync('./media/image/donasi.jpg'), caption: `*${ucapanWaktu} Kak ${m.pushName}*\n\n *Jika ingin berdonasi silahkan hubungi owner terlebih dahulu*\n\n_Terima kasih_` }, { quoted: m })
}
break

case 'owner': case 'creator': {
tio.sendContact(m.chat, global.owner, m)
}
break
 
case 'runtime': case 'tes': {
let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
tio.sendMessage(m.chat, { text: lowq }, {quoted: fkontak})
tio.setStatus(`${tio.user.name} | Runtime : ${runtime(process.uptime())}`)
}
break

case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 INFO SERVER
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'speedtest': {
m.reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = await exec('python3 speed.py')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}
}
break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await tio.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
let media = await quoted.download()
let encmedia = await tio.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
}
}
break
case 'stikerwm': case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'take': case 'wm': {
let [teks1, teks2] = text.split`|`
if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await tio.downloadMediaMessage(qmsg)
let encmedia = await tio.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await tio.downloadMediaMessage(qmsg)
let encmedia = await tio.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break

case 'antilink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif Kak Sebelumnya*`)
db.data.chats[m.chat].antilink = true
m.reply(`*Antilink Sekarang Aktif !*`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
db.data.chats[m.chat].antilink = false
m.reply(`*Antilink Sekarang Tidak Aktif !*`)
} else {
 let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On ⚡' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off ⚰️' }, type: 1 }
]
await tio.sendButtonText(m.chat, buttons, `Mode Antilink`, tio.user.name, m)
}
 }
 break

case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await tio.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await tio.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await tio.groupInviteCode(m.chat)
tio.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
tio.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break

//Fitur Panel
case "listusr": {
if (!isCreator) return m.reply(`HAI KAK INI KHUSUS OWNER Panel Naxybot`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let users = res.data
let sections = []
for (let user of users) {
let u = user.attributes
let obj = {
title: "Panel Naxybot",
rows: [
{ title: `${u.id}. ${u.username}`, rowId: `${prefix}detusr ` + u.id, description: u.first_name + ' ' + u.last_name },
]
}
await sections.push(obj)
if (sections.length === 50) {
sections.push({
title: "Panel Naxybot",
rows: [
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 5`, description: 'Page 5' },
]
})
}
}
await tio.sendMessage(m.chat, {
text: "List User Panel Naxybot",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: "*Panel Naxybot*",
buttonText: `${res.meta.pagination.count} Users`,
sections
},{ quoted : m })
}
break
case "addusr": {

if (!isCreator) return m.reply(`HAI KAK NI KHUSUS OWNER Panel Naxybot`)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah kak danz!*



Penggunaan:
${prefix + command} email,username,name,number/tag`);   
let username = t[1];    
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah kak danz!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await tio.onWhatsApp(u.split`@`[0]))[0] || {}
 let profil = d.exists ? crypto.randomBytes(2).toString('hex') : t[2]
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
 "email": 'panell' + profil.toString() + '@gmail.com',
"username": username, 
"first_name": 'Expired', 
"last_name": `${hariini}`, 
"language": "en",
"password": 'member' + password.toString(), 
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await tio.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

TYPE: user

ID: ${user.id}
UUID: ${user.uuid}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
LANGUAGE: ${user.language}
ADMIN: ${user.root_admin}

*Password telah dikirim di private chat @${u.split`@`[0]}*

1gb 1024
2gb 2048
3gb 3072
4gb 4096
5gb 5120
6gb 6144
7gb 7168
8gb 8192`, mentions:[u],
})
tio.sendMessage(m.chat, { text: `
.addsrv ${user.username}, ${hariiini},${user.id},15,1,ram/disk,cpu`, mentions:[u],
})
tio.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
📧EMAIL: ${user.email}
👤USERNAME: ${username}
🔐PASSWORD: member${password.toString()}
🌐LOGIN: ${domain}
🗓️CREATED AT: ${hariini}

📮 _*Syarat & Ketentuan*_

_Selalu backup data_
_Jangan beritahukan user password kepada orang lain ( kami tidak bertanggung jawab dengan hal ini_
_*sebelumnya kami mengalami kasus dimana user kami menjual akunnya ke orang lain dan selang beberapa hari meminta kami untuk reset password hal ini membuat nama panel kami dibilang scam untuk menanggulangi hal ini kami tidak akan lagi membantu melakukan reset password.*_`,
})
}
break
case "delusr": {

if (!isCreator) return m.reply(`HAI KAK NI KHUSUS OWNER Panel Naxybot`)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER TIDAK DITEMUKAN*')
m.reply('*SUKSES HAPUS USER*')
}
break
case "detusr": {
if (!isCreator) return m.reply(`HAI KAK NI KHUSUS OWNER Panel Naxybot`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json()
if (res.errors) return m.reply('*ID USER TIDAK DITEMUKAN*')
let u = res.attributes
let det_usr =`Type : users

\`\`\`ღ ID: ${u.id}

ღ UUID: ${u.uuid}

ღ USERNAME: ${u.username}

ღ EMAIL: ${u.email}

ღ NAME: ${u.first_name} ${u.last_name}

ღ LANGUAGE: ${u.language}

ღ ADMIN: ${u.root_admin}

ღ CREATED AT: ${u.created_at}\`\`\`
`
var rows = [
{title: "Delete User", rowId: `.delusr ${u.id}`}
]
var dep_but = {text: `${u.username.toUpperCase()} USER DETAILS\n\n${det_usr}`,
buttonText: "Klik Disini",
footer: ` ${u.first_name.toUpperCase()} - ${u.last_name.toUpperCase()}`,
sections: [ { title: `${hariini}`, rows } ]
}
tio.sendMessage(from, dep_but)
}
break
case "listsrv": {
if (!isCreator) return m.reply(`HAI KAK INI KHUSUS OWNER Panel Naxybot`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data
let sections = []
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let obj = {
title: "Panel Naxybot",
rows: [
{ title: `${s.id}. ${s.name}`, rowId: `${prefix}detsrv ` + s.id, description: `Status: ${data.attributes ? data.attributes.current_state : s.status}` },
]
}
await sections.push(obj)
if (sections.length >= 50 && res.meta.pagination.links.next) {
sections.push({
title: "Panel Naxybot",
rows: [
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 5`, description: 'Page 5' },
]
})
}
}
await tio.sendMessage(m.chat, {
text: "List Server Panel Naxybot",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: "*Panel Naxybot*",
buttonText: `${res.meta.pagination.count} Servers`,
sections
}, { quoted: m })
}
break
case "addsrv": {

if (!isCreator) return m.reply(`HAI KAK INI KHUSUS OWNER Panel Naxybot`)
let s = text.split(',');
if (s.length < 7) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} name,desc,userId,eggId,locId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`*SUKSES MENAMBAH SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
EXPIRED: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
case "delsrv": {

if (!isCreator) return m.reply(`HAI KAK INI KHUSUS OWNER Panel Naxybot`)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER TIDAK DITEMUKAN*')
m.reply('*SUKSES HAPUS SERVER*')
}
break
case "detsrv": {
if (!isCreator) return m.reply(`HAI KAK INI KHUSUS OWNER Panel Naxybot`)
let srv = args[0]
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
if (res.errors) return m.reply('*ID SERVER TIDAK DITEMUKAN*')
let s = res.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f2.json();
let t = data.attributes
let det_srv =`ღ Type : servers

\`\`\`ღ ID: ${s.id}

ღ UUID: ${s.uuid}

ღ NAME: ${s.name}

ღ DESCRIPTION: ${s.description}

ღ MEMORY: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}

ღ DISK: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}

ღ CPU: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}

ღ CREATED AT: ${s.created_at}\`\`\`
`
var rows = [
{title: "Start Server", rowId: `.startsrv ${s.uuid}`},
{title: "Restart Server", rowId: `.restartsrv ${s.uuid}`},
{title: "Stop Server", rowId: `.stopsrv ${s.uuid}`},
{title: "Reinstall Server", rowId: `.reinstall ${s.id}`},
{title: "Delete Server", rowId: `.delsrv ${s.id}`}, 
]
var dep_but = {text: `*${s.name.toUpperCase()}* SERVER DETAILS\n\n${det_srv}`,
buttonText: "Klik Disini",
footer: ` STATUS : ${data.attributes ? data.attributes.current_state.toUpperCase() : s.status.toUpperCase()}`,
sections: [ { title: `${hariini}`, rows } ]
}
tio.sendMessage(from, dep_but)
}
            break
        case 'reinstall': {
           if (!isCreator) return m.reply(`HAI KAK INI KHUSUS OWNER Panel Naxybot`)
            let srv = args[0]
            if (!srv) return m.reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply('*SERVER NOT FOUND*')
            m.reply('*REINSTALLING THE SERVER..*')
        }
            break
        case 'updatesrv': {
           if (!isCreator) return m.reply(`HAI KAK INI KHUSUS OWNER Panel Naxybot`)
            let t = text.split(',');
            if (t.length < 4) return m.reply(`Perintah :\n
${prefix + command} srvId,locId,memory/disk,cpu`)
            let srv = t[0];
            let loc = t[1];
            let memo_disk = t[2].split`/`;
            let cpu = t[3];
            let f1 = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let data = await f1.json()

            let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
                "method": "PATCH",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "allocation": parseInt(loc) || data.attributes.allocation,
                    "memory": memo_disk[0] || data.attributes.limits.memory,
                    "swap": data.attributes.limits.swap || 0,
                    "disk": memo_disk[1] || data.attributes.limits.disk,
                    "io": 500,
                    "cpu": cpu || data.attributes.limits.cpu,
                    "threads": null,
                    "feature_limits": {
                        "databases": 5,
                        "allocations": 5,
                        "backups": 5
                    }
                })
            })
            let res = await f.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            m.reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}
UPDATED AT: ${server.updated_at}`)
        }
            break
        case 'startsrv': case 'stopsrv': case 'restartsrv': {
            let action = command.replace('srv', '')
           if (!isCreator) return m.reply(`HAI KAK INI KHUSUS OWNER Panel Naxybot`)
            let srv = args[0]
            if (!srv) return m.reply('ID nya mana?')
            let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + capikey
                },
                "body": JSON.stringify({
                    "signal": action
                })
            })

            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            m.reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
        }
            break

//Menuu
case 'simplemenu': case 'menu': case 'help': {
let ownernya = '0@s.whatsapp.net'
let me = m.sender
let ments = [ownernya, me, ini_kangbaned]
let kukiw = `*Kak ${pushname}*`
var { mlist } = require('./fitur/menu.js')
let sections = [
{
   title: ' ∫ » Info Bot –––––––·•',
   rows: [
{title: "〽️ • Donasi", rowId: `donasi`, description: `KLIK UNTUK DONASI`},
{title: "📴 • Owner", rowId: `owner`, description: `KLIK UNTUK BERTANYA KEPADA OWNER`},
 {title: "🏎️• Ping", rowId: `ping`, description: `MENAMPILKAN SPEED BOT`}
  ]
},{
title: "⚠︎  ∫ » MENU BOT « ✧",
rows: [
{title: "✦  「 Store 」", rowId: `mstore`, description: `╰ ► 🛒Fitur Khusus Store`},
{title: "✦  「 Panel 」", rowId: `mpanel`, description: `╰ ► 💰Cari Panel? Di Sini Tempatnya 🤫`}
]
},{
   title: ' ∫ » Information –––––––·•',
   rows: [
{title: "🌀 • Speedtest", rowId: `speedtest`, description: `╰ ► 🌀 Test Speedtest.net ♕︎`},
{title: "⏰ • Runtime", rowId: `runtime`, description: `╰ ► ⏰ Runtime Bot ♕︎`}
]
},
]
 const listMessage = {
  text: mlist(pushname, ucapanWaktu, botname),
  footer: global.botname,
  buttonText: "KLIK DISINI 👋",
  sections
}
tio.sendMessage(m.chat, listMessage, {quoted: fkontak})
}
break

case 'mstore': case 'storemenu': {
var { mstore } = require('./fitur/menu.js')
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Back' }, type: 1 }, { buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
await tio.sendMessage(m.chat, { location: { jpegThumbnail: await reSize(faall, 200, 100)}, buttons: buttons, caption: mstore(prefix), footer: esce, m }, {quoted: fkontak})
}
break

case 'mpanel': case 'panelmenu': {
var { mpanel } = require('./fitur/menu.js')
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
await tio.sendMessage(m.chat, { location: { jpegThumbnail: await reSize(faall, 200, 100)}, buttons: buttons, caption: mpanel(prefix), footer: esce, m }, {quoted: fkontak})
}
break
 
//==========[Jangan Diapa Apain!!!!!!]=============\\                        
default:
if (budy.startsWith('~>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('.>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
tio.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
