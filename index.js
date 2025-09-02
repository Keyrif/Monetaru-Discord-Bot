//  (!) MADE BY KEYRIF, MADE THIS IN 2020-2022, DEPRECATED ON NEWER VERSIONS, STILL WORKS WITH D.JS 12
//  (!) THIS CODE SAW MANY CHANGES SO THERE CAN BE SOME JUNK LEFT HERE AND THERE. SORRY! NOTHING IS FATAL THOUGH, EVERYTHING IS WORKING FLAWLESSLY!

const punish = require('./punish.json');
const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config()
const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js');
const config = require('./config.json')
const mongoose = require('mongoose');
const color = process.env.COLOR;
const moment = require('moment')
const guilds = require('./guilds2.json');
var os = require('os');
var colors = require('colors');
const economy = require('./economy')
console.log(colors.green('> Starting...'));

client.on('ready', async () => {
    client.date = `${moment().utc().format('dddd, D MMMM YYYY')}`
	console.log('The client is ready!')

	const baseFile = 'command-base.js'
	const commandBase = require(`./${baseFile}`)

	const readCommands = (dir) => {
		const files = fs.readdirSync(path.join(__dirname, dir))
		for (const file of files) {
			const stat = fs.lstatSync(path.join(__dirname, dir, file))
			if (stat.isDirectory()) {
				readCommands(path.join(dir, file))
			} else if (file !== baseFile) {
				const option = require(path.join(__dirname, dir, file))
				commandBase(client, option)
			}
		}
	}

	readCommands('commands')

	client.user.setActivity(`monetaru.xyz | KEYRIF`, {
		type: 'WATCHING'
	});
})

client.on('message', async (message, member) => {
  if (message.content.toLowerCase() === ".getinvite"){
    let invite = await message.channel.createInvite({
     maxAge: 0,
     maxUses: 0
    }).catch(console.error);
    message.reply(`\n<:bump:909822887404380240> Am pregatit invitatia ta: ${invite}`)
  }
})

client.on('message', message => {
  if (message.content.toLowerCase() === '.invite') {
    const embedinvite = new MessageEmbed()
		.setColor(color)
		.setTitle('<:bump:909822887404380240> **INVITE BOT**')
    .addField('**<:50621:910603532737077338>   TOP.GG**', '[Click Here](https://top.gg/bot/864572735454445578)', false)
		.addField(`<:50621:910603532737077338>   **INVITE**‎`, `[Click Here](https://discord.com/oauth2/authorize?client_id=864572735454445578&scope=bot&permissions=268823761)`, false) 
    .setFooter('Pentru a seta botul folositi comanda .setup')
  message.channel.send(embedinvite)
  }
})

client.on('message', async message => {
  if (message.member.guild.me.hasPermission("ADMINISTRATOR"))
	if (message.content.toLowerCase() === ".setup") {
	message.channel.send("**Asigurati-va ca botul are permisiunile necesare pentru a creea canale si roluri!**\n \n\`#\`Create Channel -> **monetaru**\n\`#\`Create Roles -> **Booster** \`|\` **Master** \`|\` **ITEM: Pickaxe** \`|\` **ITEM: Special Map**\n...")
		let role = message.guild.roles.cache.find(role => role.name === "Monetaru");
		if ((message.guild.channels.cache.find(c => c.name.includes('monetaru')))) {
			message.channel.send(" <:rosu:909865200046473256> \`ERROR - CHANNEL\`: Un canal cu numele \`monetaru\` exista deja.")
			return
		}
		message.guild.channels.create('monetaru', { //Create a channel
			type: 'text', 
			permissionOverwrites: [
				{
					id: message.guild.roles.everyone, 
					deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'] //Deny permissions
				},
				{
					id: role.id,
					allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'] //Deny permissions
				}
			],
		});
		message.channel.send(" <:bump:909822887404380240> \`SUCCESS - CHANNEL\`: Un canal cu numele \`monetaru\` a fost adaugat.");	
	}
}
)

client.on('message', async message => {
    if (message.content.toLowerCase() === ".setup") {
	if (message.guild.roles.cache.find(role => role.name.includes("Booster"))) {
		message.channel.send("<:rosu:909865200046473256> \`ERROR - ROLE\`: Un rol cu numele \`Booster\` exista deja.")
		return
	} else {

		const guild = client.guilds.cache.get();
		message.guild.roles.create(
			{
				data: {
					name: 'Booster',
					color: '#f47fff',
				},
				reason: 'setup command',
			},
			message.channel.send("<:bump:909822887404380240> \`SUCCESS - ROLE\`: Un rol cu numele \`Booster\` a fost adaugat.")
		)
			.then(console.log)
			.catch(console.error);
	}
}
}
)

client.on('message', async message => {
    if (message.content.toLowerCase() === ".setup") {
	if (message.guild.roles.cache.find(role => role.name.includes("Master"))) {
		message.channel.send("<:rosu:909865200046473256> \`ERROR - ROLE\`: Un rol cu numele \`Master\` exista deja.")
		return
	} else {

		const guild = client.guilds.cache.get();
		message.guild.roles.create(
			{
				data: {
					name: 'Master',
					color: '#FFFF00',
				},
				reason: 'setup command',
			},
			message.channel.send("<:bump:909822887404380240> \`SUCCESS - ROLE\`: Un rol cu numele \`Master\` a fost adaugat.")
		)
			.then(console.log)
			.catch(console.error);
	}
}
}
)

client.on('message', async message => {
    if (message.content.toLowerCase() === ".setup") {
	if (message.guild.roles.cache.find(role => role.name.includes("ProtectionSafe"))) {
		message.channel.send("<:rosu:909865200046473256> \`ERROR - ROLE\`: Un rol cu numele \`ProtectionSafe\` exista deja.")
		return
	} else {

		const guild = client.guilds.cache.get();
		message.guild.roles.create(
			{
				data: {
					name: 'ProtectionSafe',
					color: 'WHITE',
				},
				reason: 'setup command',
			},
			message.channel.send("<:bump:909822887404380240> \`SUCCESS - ROLE\`: Un rol cu numele \`ProtectionSafe\` a fost adaugat.")
		)
			.then(console.log)
			.catch(console.error);
	}
}
}
)

client.on('message', async message => {
    if (message.content.toLowerCase() === ".setup") {
		if (message.guild.roles.cache.find(role => role.name.includes("Pickaxe"))) {
		message.channel.send("<:rosu:909865200046473256> \`ERROR - ROLE\`: Un rol cu numele \`Pickaxe\` exista deja.")
		return
	} else {

		const guild = client.guilds.cache.get();
		message.guild.roles.create(
			{
				data: {
					name: 'Pickaxe',
					color: '#808080',
				},
				reason: 'setup command',
			},
			message.channel.send("<:bump:909822887404380240> \`SUCCESS - ROLE\`: Un rol cu numele \`Pickaxe\` a fost adaugat.")
		)
			.then(console.log)
			.catch(console.error);
	}
}
}
)

client.on('message', message => {
    if (message.content.toLowerCase() === ".ad") {
    const gameembed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('<:bump:909822887404380240> SYKERN')
    .setThumbnail('https://img.itch.zone/aW1nLzcxNjM5MTgucG5n/347x500/fJ2UQ%2F.png')
    .setDescription('Sykern is an RPG action-adventure video game set in the medieval era that follows Mihay, a soldier who wakes up in a forest after a cruel battle during the war and finds out that he is the only survivor. Now he needs to do anything in order to survive and start a new life.')
    .addField('‎', '[**» VIEW GAME «**](https://keyrif.itch.io/sykern)', false)
    .setFooter('Game developed by KEYRIF')
    message.reply(gameembed)
    }
})

client.on('message', async message => {
    if (message.content.toLowerCase() === ".setup") {
	if (message.guild.roles.cache.find(role => role.name.includes("Special Map"))) {
		message.channel.send("<:rosu:909865200046473256> \`ERROR - ROLE\`: Un rol cu numele \`Special Map\` exista deja.")
		return
	} else {

		const guild = client.guilds.cache.get();
		message.guild.roles.create(
			{
				data: {
					name: 'Special Map',
					color: '#808080',
				},
				reason: 'setup command',
			},
			message.channel.send("<:bump:909822887404380240> \`SUCCESS - ROLE\`: Un rol cu numele \`Special Map\` a fost adaugat.")
		)
			.then(console.log)
			.catch(console.error);
	}
}
}
)


client.on('message', async message => {
	if (message.content.toLowerCase() === ".compatibility")
	message.channel.send('Acest bot inca nu este facut sa fie folosit pe mai multe servere.\nInca se lucreaza la acest lucru...')
})

client.on('message', async message => {
	if (message.content.toLowerCase() === ".serverlist")
	message.channel.send('Lista serverelor a fost trimisa in consola.')
	client.guilds.cache.forEach(guild => {
		console.log(`${guild.name} | ${guild.id}`);
	  })
})

client.on(`message`, async message => {
  if (message.author.bot) {
    return
  }
	if (!message.member.roles.cache.some(role => role.name.includes('ProtectionSafe'))) {
	const kanal = message.guild.channels.cache.find(ch => ch.name.includes('monetaru'));
    const bannedWords = [`https://di`, `http://di`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `join`, `discord gg /`]
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            if (message.author.id === message.guild.ownerID) return;
            await message.delete();
            await message.reply(`\n\`ANTI-LINK PROTECTION:\` Alta data bossule...`).then(msg => {
				msg.delete({ timeout: 10000});
			})
			await kanal.send(`\`WARNING:\` **${message.author}**(ID: **${message.author.id}**) a postat pe canalul **<#${message.channel.id}>** un mesaj ce contine linkuri interzise.`)
        }
    } catch (e) {
        console.log(e);
    }
	}
	if (message.member.roles.cache.some(role => role.name.includes("ProtectionSafe"))) {
		return
	}
})
 client.on('guildMemberRemove', async member => {
    const kanal = client.channels.cache.get("818232360909930507");
	const logs = await member.guild.fetchAuditLogs({ limit: 1, type: 'MEMBER_KICK' });
	const log = logs.entries.first();
	if (!log) return;
	if (Date.now() - log.createdTimestamp < 5000) {
	  kanal.send(`\`KICK:\` **${member.user.tag}** a fost dat afara de catre **${log.executor.tag}**`);
	}
 })
  

client.on('message', message => {
if (message.content.toLowerCase() === '.botstats' || message.content.toLowerCase() === '.ping' || message.content.toLowerCase() === '.uptime' || message.content.toLowerCase() === '.system' || message.content.toLowerCase() === '.panel' || message.content.toLowerCase() === '.sys') {
const days = Math.floor(client.uptime / 86400000)
const hours = Math.floor(client.uptime / 3600000) % 24
const minutes = Math.floor(client.uptime / 60000) % 60
const seconds = Math.floor(client.uptime / 1000) % 60
const lat = Date.now() - message.createdTimestamp
const apilat = Math.round(message.client.ws.ping)
const totalram = ((os.totalmem() / 10**9 + " ").split('.')[0]);
const core = os.cpus()[0]
const used = process.memoryUsage().heapUsed / 1024 / 1024;
const uptime = new Discord.MessageEmbed()
.setTitle('<:bump:909822887404380240> **BOT STATS**')
.setColor(color)
.addField(`<:bump:909822887404380240>  **Ping**`, `**»** Latency: **${lat <= '300' ? lat + '**ms  <:verde:909863626771410974>' : lat + '**ms  <:rosu:909865200046473256>'}\n**»** API Latency: **${apilat <= '450' ? apilat + '**ms  <:verde:909863626771410974>' : apilat + '**ms  <:rosu:909865200046473256>'}`)
.addField(`<:bump:909822887404380240> ‎ **Uptime**`, `**»**  **${days}** days **${hours}** hours‎ **${minutes}** minutes\n**»** Last time started: **${client.date}**`)
.addField('<:bump:909822887404380240>  **System**', `**»**  Platform: **${os.platform().toUpperCase()}**\n**»**  CPU: **${core.model}**\n**»**  RAM: **${totalram}** GB‎‎‎‎‎ ‎ ‎*(using ${Math.round(used * 1) / 1} GB)*\n**»** SERVERS: **${client.guilds.cache.size}**`)
	message.channel.send(uptime)
}
	if (message.content.toLowerCase() === '.version') {
		message.channel.send('\`version: v1.61a`\n\`Last updated: D:14/M:2/Y:2022`\n\`NEW:\` Report system **|** SetPrefix (soon in 1.6)')
	}
	if (message.content.toLowerCase() === '.azterixinfo') {
		const embed = new MessageEmbed()
		.setColor(color)
		.setTitle('<:bump:909822887404380240> **AZTERIX INFO**')
		.addField(`Azterix Level 0‎`, `» Tokens required: \`0\``, false)
		.addField(`Azterix Level 1‎`, `» Tokens required: \`1.000\``, false) 
		.addField(`Azterix Level 2‎`, `» Tokens required: \`10.000\``, false)
		.addField(`Azterix Level 3‎`, `» Tokens required: \`25.000\``, false)
		.addField(`Azterix Level 4‎`, `» Tokens required: \`50.000\``, false)
    .addField(`Azterix Level 5‎`, `» Tokens required: \`100.000\``, false)
		message.channel.send(embed)
	}
	if (message.content.toLowerCase() === '.jobs') {
		const jobEmbed = new MessageEmbed()
			.setColor(color)
			.setTitle('Job List')
			.setThumbnail('https://i.pinimg.com/originals/d7/c0/2e/d7c02e4ce9f4bbc900055e3b164ba147.png')
			.addField(`**💰︲ Treasure Hunter**`, `**»** Comanda: *.treasurehunt*\n**»** Descriere: *La acest job doar cauti comori, castigurile variaza mult si sunt in functie de norocul tau. Poti face aceasta activitate la un interval de 5 zile.*`, false)
			.addField(`**⛏️︲ Miner**`, '**»** Comanda: *.mine*\n**»** Descriere: *La acest job trebuie sa minezi, ai de ales 3 locuri. Poti sa muncesti odata la 30 minute.*', false)
		message.channel.send(jobEmbed);
	}
	if (message.content.toLowerCase() === '.compatibility') {
		const compmsg = new MessageEmbed()
			.setColor(color)
			.setDescription('**Deoarece botul este facut special pentru un singur server, in cazul in care este adaugat pe alte servere, pot aparea probleme de compatibilitate. \nUrmatoarele comenzi nu vor putea functiona:**')
			.setTitle('PROBLEME DE COMPATIBILITATE')
			.addField(`‎`, `\`.master\`\n\`.treasurehunt\`\n\`.boost\``, true)
		message.channel.send(compmsg)
	}
})


mongoose
	.connect(process.env.MONGODB_SRV,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		}
	)
	.then(() => {
		console.log('Connected to the database!');
	})
	.catch(err => {
		console.log(err);
	});
;

const http = require('http');
const server = http.createServer((req, res) => {
const days = Math.floor(client.uptime / 86400000)
const hours = Math.floor(client.uptime / 3600000) % 24
const minutes = Math.floor(client.uptime / 60000) % 60
const seconds = Math.floor(client.uptime / 1000) % 60
const totalram = ((os.totalmem() / 10**9 + " ").split('.')[0]);
const core = os.cpus()[0]
const used = process.memoryUsage().heapUsed / 1024 / 1024;
const uptime = new Discord.MessageEmbed()
	res.writeHead(200);
	res.end(`Platform: ${os.platform().toUpperCase()}\nCPU: ${core.model}\nRAM: ${totalram} GB  (using ${Math.round(used * 1) / 1} GB)`);
});
server.listen(3000);


client.login(process.env.TOKEN)
