const axios = require("axios");

module.exports = {
  name: "igdl2",
  alias: ["instagram2", "instadl2", "instagramdl2", "igvid2", "igdl","ig"],
  desc: "To download an instagram video",
  category: "Media",
  usage: `igdl2 <video link>`,
  react: "🎥",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a Instagram Video link Baka !` },
        { quoted: m }
      );
    if (!args[0].includes("instagram.com"))
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a valid Instagram Video link !` },
        { quoted: m }
      );
    
    
    var queryURL = args.join(" ");
      m.reply("*Please wait, I'm downloading your video...🐇*")
      let res = await axios.get("https://fantox001-scrappy-api.vercel.app/instadl?url=" + queryURL)
      const scrappedURL = res.data.videoUrl
      
      return Miku.sendMessage(m.from, { video: { url: scrappedURL }, caption: `Downloaded by: *${botName}* \n\n_*Powered by:*_ *ɳσႦιƚα API - by ɳσႦιƚα*\n\n_   \n`},{ quoted: m } );
  },
};
