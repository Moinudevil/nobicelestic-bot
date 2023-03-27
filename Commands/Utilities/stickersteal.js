const { Sticker, StickerTypes } = require('wa-sticker-formatter')

module.exports = {
    name: "steal",
    alias: ["take","tk","get"],
    desc: "To steal a sticker",
    category: "Utilities",
    usage: "steal <reply to sticker>",
    react: "🥷",
    start: async (Miku, m, { text, prefix,quoted, packName, pushName,mime,args }) => {
        if(!args.join(" ")){
            var packName = packName;
            var authorName = pushName;
        }
        else if(args.join(" ").includes("|")){
            var packName = packName.split("|")[0];
            var authorName = args.join(" ").split("|")[1];
        }
        else{
            var packName = packName;
            var authorName = args.join(" ");
        }
        if (/webp/.test(mime)) {
            let mediaMess = await quoted.download();
            let stickerMess = new Sticker(mediaMess, {
                pack: packName,
                author: authorName,
                type: StickerTypes.FULL,
                categories: ['🐈‍⬛', '🖤'],
                id: '12345',
                quality: 70,
                background: 'transparent'
            });
            const stickerBuffer = await stickerMess.toBuffer()
            Miku.sendMessage(m.from, {sticker:stickerBuffer}, { quoted: m })
        }
       else{
        Miku.sendMessage(m.from,{text:`Baka! mention an *Sticker* and type *${prefix}steal <packname | authorname>* to create sticker with your name.`},{quoted:m})
    } 
}}
