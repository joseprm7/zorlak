const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require("ytdl-core");

var servers = {};

const token = 'NzIzOTcwNjY3NzU3Njk5MDky.XxiMBg.RMtsrt41UDEqg9SAHj6zXlLyskY';

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "bot_commands");
    if (!channel) return;
    channel.send(`${member}, welcome to Brabus, caralho!`);
})

bot.on('message', async message => {
    if (message.content == "boas zor") {
        message.channel.send('Foda-se, que puta de atrasados mentais mano, SÃO DUAS AMÉLIAS QUE PUTA QUE PARIU!');
    }

    const PREFIX = '$'
    const args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0]) {
        case "clear" :
            if (!args[1]) return message.reply("ERROR: Please define your second argument.");
            message.channel.bulkDelete(args[1]);
        break;
        case "embed":
            const embed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('Nickname', message.author.username, true)
            .addField('Currrent Server', message.guild.name)
            .setColor(0x1B4F72)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter('KUKUKUKUKUKUKUKU') ;           
            message.channel.send(embed);
        break;   
        case "god":
            message.channel.send({files: ['./viadinh0.jpg']});
        break;
        case "verimek":
            message.channel.send({files: ['./verimek.png']});
        break;
        case "louis":
            /*if (message.member.roles.find(role => role.name === "Padre")) return message.channel.send("É só olhares para ti, burro!")
            .then(msg => msg.delete(10000));
            message.channel.send({files: ['./louis.png']});*/
            message.channel.send("O meu maior sonho era meter essa foto. Apenas a publicarei assim que o god Disney o permitir.");
        break;
        case "play":
            /*function play(connection, message) {
                var server = servers[message.guild.id];

                server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
                server.queue.shift();
                server.dispatcher.on("end", function() {
                    if (server.queue[0]) {
                        play(connection, message);
                    } else {
                        connection.disconnect();
                    }
                })
            }
            if (!args[1]) {
                message.channel.send("Preciso de um link, meu...");
                return;
            }
            if (!message.member.voice.channel) {
                message.channel.send("Precisas de estar num canal para me poder chamar.");
                return;
            }
            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];
                
            server.queue.push(args[1]);

            if (!message.member.voice.connection) message.member.voice.channel.join().then(function(connection){
                play(connection, message);
            })*/
            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel) return message.channel.send("Meu ganda burro! Precisas de estar num canal para me chamar.");
            const permissions = voiceChannel.permissionsFor(message.client.user);
            if (!permissions.has('CONNECT')) return message.channel.send("A probabilidade de eu ter acesso a esse canal equivale à probabilidade de perderes a virgindade.");
            if (!permissions.has('SPEAK')) return message.channel.send("Foda-se! Não tenho permissões para falar nesse canal.");

            try {
                var connection = await voiceChannel.join()
            } catch (error) {
                console.log(`Ocorreu um erro a entrar no canal: ${error}`);
                return message.channel.send("Erro ao entrar no canal... é mesmo de LCC o cabrão que fez isto.");
            }
            const dispatcher = connection.play(ytdl(args[1]))
            .on('finish', () => {
                voiceChannel.leave();
            })
            .on('error', error => {
                console.log(error);
            })
            dispatcher.setVolumeLogarithmic(5 / 5);
        break;
        case "skip":
            var server = servers[message.guild.id];
            if (server.dispatcher) server.dispatcher.end();
        break;
        case "stop":
            /*var server = servers[message.guild.id];
            if (message.member.voice.connection) {
                for (var i = server.queue.length - 1; i >= 0; i--) {
                    server.queue.splice(i, 1);
                }
                server.dispatcher.end();
                message.channel.send("Ending the fucking queue...");
                console.log('Parei!');
            }
            if (message.guild.connection) message.guild.voice.connection.disconnect();*/
        break;
        case 'smokes':
            if (!args[1]) {
                message.channel.send("Mas de que mapa, caralho?");
                return;
            }
            if (args[1] === "overpass") {
                message.channel.bulkDelete(1);
                if (!args[2]) {
                    message.author.send({files: ['./overpass1.png']});
                    message.author.send({files: ['./overpass2.png']});
                    message.author.send({files: ['./overpass3.png']});
                    message.author.send({files: ['./overpass4.png']});
                    message.author.send({files: ['./overpass5.png']});
                    message.author.send({files: ['./overpass6.png']});
                    message.author.send({files: ['./overpass7.png']});
                    message.author.send({files: ['./overpass8.png']});
                    message.author.send("WARNING: ESTA SMOKE É PARA SER FEITA SENTADO:");
                    
                }
            } else message.channel.send("Ou és uma merda a escrever ou o paneleiro do Gonçalo ainda não me enviou nada sobre esse mapa...");
        break;
        case "demos":
            if (!args[1]) {
                message.channel.send("Mas de que mapa caralho?");
                return;
            }
            if (args[1] === "help") {
                message.channel.send("```shell\ntype something like\n$demos [MAPA] [SPOT/t/ct (OPCIONAL)]" + 
                "\nif you want help in a specific map, just type\n$demos [MAPA] help```");
            }
            else if (args[1] === "inferno") {
                message.channel.bulkDelete(1);                
                if (!args[2]) {
                    message.author.send("[MAGISK]  [CT]  [PIT]: https://www.youtube.com/watch?v=Nwb1srFzh5A&t=3728s\n" + 
                    "[TWISTZ]  [T]  [CASA]: https://www.youtube.com/watch?v=ELhjYuyzaNA&t=2722s\n" + 
                    "[DEVICE]  [CT]  [LONG]: https://www.youtube.com/watch?v=2oNr5YNQrGo&t=2s\n" + 
                    "[ALMAZER]  [T]  [BANANA]: https://www.youtube.com/watch?v=Ez3S1LfDSTI&t=52s\n");
                } else if (args[2] === "help") {
                    message.channel.send("```shell\ntype something like\n$demos inferno [t/ct/pit/casa/long/banana]```");
                } else if (args[2] === "ct") {
                    message.author.send("[MAGISK]  [PIT]: https://www.youtube.com/watch?v=Nwb1srFzh5A&t=3728s\n" + 
                    "[DEVICE]  [LONG]: https://www.youtube.com/watch?v=2oNr5YNQrGo&t=2s\n");
                } else if (args[2] === "t") {
                    message.author.send("[TWISTZ]  [CASA]: https://www.youtube.com/watch?v=ELhjYuyzaNA&t=2722s\n" + 
                    "[ALMAZER]  [BANANA]: https://www.youtube.com/watch?v=Ez3S1LfDSTI&t=52s\n");
                } else if (args[2] === "pit") {
                    message.author.send("[MAGISK]  [CT]  [PIT]: https://www.youtube.com/watch?v=Nwb1srFzh5A&t=3728s\n");
                } else if (args[2] === "casa") {
                    message.author.send("[TWISTZ]  [T]  [CASA]: https://www.youtube.com/watch?v=ELhjYuyzaNA&t=2722s\n");
                } else if (args[2] === "long") {
                   message.author.send("[DEVICE]  [CT]  [LONG]: https://www.youtube.com/watch?v=2oNr5YNQrGo&t=2s\n"); 
                } else if (args[2] === "banana") {
                    message.author.send("[ALMAZER]  [T]  [BANANA]: https://www.youtube.com/watch?v=Ez3S1LfDSTI&t=52s\n");
                } else message.channel.send("Mano, não sei do que caralho estás a falar.");
            }
            else if (args[1] === "mirage") {
                message.channel.bulkDelete(1);
                if (!args[2]) {
                    message.author.send("[GLAIVE]  [CT]  [CONNECTOR]: https://www.youtube.com/watch?v=A_avtMsO-JE&t=799s\n" + 
                    "[ZORLAK]  [CT]  [SHORT]  [T]  [UNDERPASS]: https://www.youtube.com/watch?v=CU6T_3L5YC0\n" + 
                    "[KRIMZ]  [CT]  [CONNECTOR]  [T]  [MID]: https://www.youtube.com/watch?v=-aO7Zj1uuZ8&t=3175s\n" + 
                    "[SOM]  [CT]  [B]: https://www.youtube.com/watch?v=WycWHtuB-iw\n" + 
                    "[NEXA]  [CT]  [A]:https://www.youtube.com/watch?v=U8qKFb0fcyM\n");
                } else if (args[2] === "help") {
                    message.channel.send("```shell\ntype something like\n$demos mirage [t/ct/connector/short/mid/underpass/a/b]```");
                } else if (args[2] === "ct") {
                    message.author.send("[GLAIVE]  [CONNECTOR]: https://www.youtube.com/watch?v=A_avtMsO-JE&t=799s\n" + 
                    "[ZORLAK]  [SHORT]: https://www.youtube.com/watch?v=CU6T_3L5YC0\n" + 
                    "[KRIMZ]  [CONNECTOR]: https://www.youtube.com/watch?v=-aO7Zj1uuZ8&t=3175s\n" + 
                    "[SOM]  [B]: https://www.youtube.com/watch?v=WycWHtuB-iw\n");
                } else if (args[2] === "t") {
                    message.author.send("[ZORLAK]  [UNDERPASS]: https://www.youtube.com/watch?v=CU6T_3L5YC0\n" + 
                    "[KRIMZ]  [MID]: https://www.youtube.com/watch?v=-aO7Zj1uuZ8&t=3175s\n");
                } else if (args[2] === "connector") {
                    message.author.send("[GLAIVE]  [CT]  [CONNECTOR]: https://www.youtube.com/watch?v=A_avtMsO-JE&t=799s\n" + 
                    "[KRIMZ]  [CT]  [CONNECTOR]  [T]  [MID]: https://www.youtube.com/watch?v=-aO7Zj1uuZ8&t=3175s\n");
                } else if (args[2] === "short") {
                    message.author.send("[ZORLAK]  [CT]  [SHORT]  [T]  [UNDERPASS]: https://www.youtube.com/watch?v=CU6T_3L5YC0\n");
                } else if (args[2] === "mid") {
                    message.author.send("[KRIMZ]  [CT]  [CONNECTOR]  [T]  [MID]: https://www.youtube.com/watch?v=-aO7Zj1uuZ8&t=3175s\n");
                } else if (args[2] === "underpass") {
                    message.author.send("[ZORLAK]  [CT]  [SHORT]  [T]  [UNDERPASS]: https://www.youtube.com/watch?v=CU6T_3L5YC0\n");
                } else if (args[2] === "b") {
                    message.author.send("[SOM]  [CT]: https://www.youtube.com/watch?v=WycWHtuB-iw\n");
                } else if (args[2] === "a") {
                    message.author.send("[NEXA]  [CT]: https://www.youtube.com/watch?v=U8qKFb0fcyM\n");
                } else message.channel.send("Mano, não sei do que caralho estás a falar.");
            }
            else if (args[1] === "overpass") {
                message.channel.bulkDelete(1);
                if (!args[2]) {
                    message.author.send("[HATZ]  [CT]  [B]: https://www.youtube.com/watch?v=aLBJ40K2fYQ\n" + 
                    "[STADODO]  [CT]  [A]: https://www.youtube.com/watch?v=a02ilLuw_Xs\n" + 
                    "[COLDZERA]  [CT]  [B]  [T]  [CONNECTOR]: https://www.youtube.com/watch?v=aLBJ40K2fYQ\n" + 
                    "[MAGISK]  [CT]  [A]  [T]  [CONNECTOR]: https://www.youtube.com/watch?v=HhhkXYuOEOo\n" + 
                    "[ROEJ]  [T]  [LONG/MID]: https://www.youtube.com/watch?v=-ywuc6XJhtQ" + 
                    "[SIMPLE]  [CT]  [MID]  [T]  [MID]: https://www.youtube.com/watch?v=Gavh-DV5Tjw\n");
                } else if (args[2] === "help") {
                    message.channel.send("```shell\ntype something like\n$demos mirage [t/ct/a/b/connector/long/mid]```");
                } else if (args[2] === "ct") {
                    message.author.send("[HATZ]  [B]: https://www.youtube.com/watch?v=aLBJ40K2fYQ\n" + 
                    "[COLDZERA]  [B]: https://www.youtube.com/watch?v=aLBJ40K2fYQ\n" + 
                    "[STADODO]  [A]: https://www.youtube.com/watch?v=a02ilLuw_Xs\n" + 
                    "[MAGISK]  [A]: https://www.youtube.com/watch?v=HhhkXYuOEOo\n" + 
                    "[SIMPLE]  [MID]: https://www.youtube.com/watch?v=Gavh-DV5Tjw\n");
                } else if (args[2] === "t") {
                    message.author.send("[COLDZERA]  [CONNECTOR]: https://www.youtube.com/watch?v=aLBJ40K2fYQ\n" + 
                    "[MAGISK]  [CONNECTOR]: https://www.youtube.com/watch?v=HhhkXYuOEOo\n" + 
                    "[ROEJ]  [LONG/MID]: https://www.youtube.com/watch?v=-ywuc6XJhtQ\n" + 
                    "[SIMPLE]  [MID]: https://www.youtube.com/watch?v=Gavh-DV5Tjw\n");
                } else if (args[2] === "a") {
                    message.author.send("[STADODO]  [CT]: https://www.youtube.com/watch?v=a02ilLuw_Xs\n" + 
                    "[MAGISK]  [CT]: https://www.youtube.com/watch?v=HhhkXYuOEOo\n");
                } else if (args[2] === "b") {
                    message.author.send("[HATZ]  [CT]: https://www.youtube.com/watch?v=aLBJ40K2fYQ\n" + 
                    "[COLDZERA]  [CT]: https://www.youtube.com/watch?v=aLBJ40K2fYQ\n");
                } else if (args[2] === "connector") {
                    message.author.send("[COLDZERA]  [T]: https://www.youtube.com/watch?v=aLBJ40K2fYQ\n" + 
                    "[MAGISK]  [T]: https://www.youtube.com/watch?v=HhhkXYuOEOo\n");
                } else if (args[2] === "long") {
                    message.author.send("[ROEJ]  [T]: https://www.youtube.com/watch?v=-ywuc6XJhtQ");
                } else if (args[2] === "mid") {
                    message.author.send("[ROEJ]  [T]: https://www.youtube.com/watch?v=-ywuc6XJhtQ" + 
                    "[SIMPLE]  [CT]  [T]: https://www.youtube.com/watch?v=Gavh-DV5Tjw\n");
                } else message.channel.send("Mano, não sei do que caralho estás a falar.");
            }
        break;
    }
})

bot.login(token);

bot.once('ready', () => {
    console.log('O Zorlak está online!');
})