const Discord = require("discord.js");
const DEX = require("./Pokemon/MyPokeDex.json")

exports.run = (client, message, args) => {
    if (args[0] == "dex"){
        pkmn = DEX.filter(poke => poke.id == args[1])[0]
        if (pkmn == undefined){
            pkmn = DEX.filter(poke => poke.name.toLowerCase() == args[1].toLowerCase())[0]
        }
        if (pkmn == undefined){message.channel.send("Sorry, I couldn't find that one."); return;}

        pokeEmbed = new Discord.RichEmbed();
        pokeEmbed.title = pkmn.name + " #" + pkmn.id;
        pokeEmbed.description = pkmn.info[Math.floor(Math.random() * pkmn.info.length)];
        pokeEmbed.setImage("https://" + pkmn.img);
        pokeEmbed.setColor(client.config.embedColor);

        message.channel.send(pokeEmbed)
    }

}

exports.help = {
    name: "pkmn",
    description: "The `pkmn` command will return info on a certain pokemon using the subcommand `dex`",
    usage: "`yabe pkmn dex 255` or `yabe pkmn dex Torchic`"
}
