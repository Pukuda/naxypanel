const chalk = require('chalk')
const fs = require('fs')

//Exports Menu
exports.mlist = (pushname, ucapanWaktu, botname) => {
	return`*Halo Kak ${pushname} 👋*
*${ucapanWaktu}*

*Berikut List Menu Yang Tersedia Di ${global.botname}*

*Jika Menemukan Bug Harap Dimaklumi Dan Laporkan Kepada*
*Owner Atau Creator Agar Segera Di Fix 😎*

*Terima Kasih 🙏*
`
}

exports.mpanel = ( prefix ) => {
  return`*Panel Menu*
🍃 ${prefix}listusr
🍃 ${prefix}addusr
🍃 ${prefix}delusr
🍃 ${prefix}detusr
🍃 ${prefix}listsrv
🍃 ${prefix}addsrv
🍃 ${prefix}delsrv
🍃 ${prefix}detsrv
🍃 ${prefix}updatesrv
🍃 ${prefix}reinstall
🍃 ${prefix}startsrv
🍃 ${prefix}stopsrv
🍃 ${prefix}restartsrv
`
}

exports.mstore = ( prefix ) => {
  return`*Store Menu*
🍃 ${prefix}list
🍃 ${prefix}addlist
🍃 ${prefix}dellist
🍃 ${prefix}updatelist
🍃 ${prefix}donasi
🍃 ${prefix}owner
🍃 ${prefix}sticker
🍃 ${prefix}stickerwm
🍃 ${prefix}runtime
🍃 ${prefix}ping
🍃 ${prefix}speedtest
🍃 ${prefix}kick
🍃 ${prefix}add
🍃 ${prefix}hidetag
🍃 ${prefix}linkgc
🍃 ${prefix}antilink
`
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})