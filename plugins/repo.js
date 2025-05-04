const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    desc: "get bot repo.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const channel = 'SENU-MD';
        const repolink = `⭕ *𝐒𝐄𝐍𝐔-𝐌𝐃 Github Repository*

> https://github.com/Nod-cmd/QUEEN-SENU-V2.git

⭕ *𝐒𝐄𝐍𝐔-𝐌𝐃 DIPLOY HEROKU*

> https://dashboard.heroku.com/new-app?template=https://github.com/SENU-MDV1/SENU-MD-V1

⭕ *𝐒𝐄𝐍𝐔-𝐌𝐃 WEB*

> https://shenupairing.onrender.com

> https://senu-web-cocdas-projects.vercel.app/

*⭕ WHATSAPP CHANNEL :*

> https://whatsapp.com/channel/0029Vb5Wqjy4Crfc5I7ML60l

*⭕Contact Owner :*

> wa.me/94788770020`;

        return await conn.sendMessage(from, { 
            image: { url: "https://i.ibb.co/bjPrbF84/3174.jpg" },
            caption: repolink,contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400734168271@newsletter',
                    newsletterName: '𝐒𝐄𝐍𝐔-𝐌𝐃',
                    serverMessageId: -1
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
