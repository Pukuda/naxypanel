const fs = require('fs')
const chalk = require('chalk')
//===> FREE API
global.domain = "https://panel.naxybot.me"
global.apikey = "ptla_arujXKbxXtksMycgpjsJKwu7mHfjTg4rdKsd9voEG6V"
global.capikey = "ptlc_OuWrbBalXO8YVTuJIqh3h1cCQS7RE8hrjzmxyJFLHXS"
global.lannkey = ''//Apikey Login Di https://api.lannn.me
global.owner = ['6283826733522','6285842647866', '62882005687229', '6285692006004','628812813281']
global.ownernomer = '6285842647866', '62882005687229','628812813281'
global.premium = ['6283826733522','6285842647866', '62882005687229','628812813281']
global.ownername = 'Naxy',
global.packname = 'Free Rest Api'
global.author = 'https://api.lannn.me'
global.sessionName = 'session'
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.thumb = fs.readFileSync('./media/image/tio.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.donasi = fs.readFileSync('./media/image/donasi.jpg')
global.vids = fs.readFileSync('./media/image/vids.mp4')
global.doc = fs.readFileSync('./media/doc/hoream.pdf')
global.gif = 'https://telegra.ph/file/a0a48565a8a6fd4feb514.mp4'
global.mygit = 'https://github.com/ERLANRAHMAT'
global.webmy = 'https://api.lannn.me'
global.ghme = 'https://github.com/ERLANRAHMAT'
global.gcbot = "https://api.lannn.me"
global.botname = 'Lann'
global.omlen = '© Lann'
global.weem = 'Lann'

global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
