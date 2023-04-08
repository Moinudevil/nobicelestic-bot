module.exports = {
  name: "hidetag",
  alias: ["htag","summon","summoning"],
  desc: "Tag all group member without @ mention",
  category: "Group",
  usage: "htag <your message>",
  react: "🕸️",
  start: async (
    Miku,
    m,
    { text, prefix, isAdmin, participants, args }
  ) => {
    if (!isAdmin)
      return m.reply(mess.useradmin);

      var message = "*『 
⛭ꜱᴜᴍᴍᴏɴɪɴɢ ᴊᴜᴛꜱᴜ෴ 』*";

    if(m.quoted){
        message = "*『 ⛭ꜱᴜᴍᴍᴏɴɪɴɢ ᴊᴜᴛꜱᴜ෴ 』*";
      }
    else if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ''}`;
    }
    else if(args[0]){
      message = args.join(' ');
    }
    else if(text ===''){
      message = "*『 ⛭ꜱᴜᴍᴍᴏɴɪɴɢ ᴊᴜᴛꜱᴜ෴ 』*";
    }
   
    else{
      message = "*『 ⛭ꜱᴜᴍᴍᴏɴɪɴɢ ᴊᴜᴛꜱᴜ෴ 』*";
    }
    await Miku.sendMessage(
      m.from,
      { text: message, mentions: participants.map((a) => a.id) },
      { quoted: m }
    );
  },
};
