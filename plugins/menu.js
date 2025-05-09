const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const imageUrl = 'https://i.ibb.co/bjPrbF84/3174.jpg';

cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "commands"],
    desc: "Get Bot Menu",
    category: "main",
    use: '.menu',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const selectionMessage = `

╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
      𝐇ɪɪɪɪɪ......🍷 *${pushname}*
     *𝐒ᴇɴᴜ 𝐌ᴅ 𝐂ᴏᴍᴍᴀɴᴅ 𝐋ɪꜱᴛ*
     
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*╭────────────●●►*
*│𝐋ɪꜱᴛ  𝐌ᴇɴᴜ......☘️*
*│⟻⟻⟻⟻⟻⟻⟻*
*│1. 𝐃ᴏᴡɴʟᴏᴀᴅ 𝐌ᴇɴᴜ*
*│2. 𝐒ᴇᴀʀᴄʜ 𝐌ᴇɴᴜ* 
*│3. 𝐀ɪ 𝐌ᴇɴᴜ*
*│4. 𝐎ᴡɴᴇʀ 𝐌ᴇɴᴜ*
*│5. 𝐆ʀᴏᴜᴘ 𝐌ᴇɴᴜ*
*│6. 𝐈ɴꜰᴏ 𝐌ᴇɴᴜ*
*│7. 𝐂ᴏɴᴠᴇʀᴛᴇʀ 𝐌ᴇɴᴜ*
*│8. 𝐑ᴀɴᴅᴏᴍ  𝐌ᴇɴᴜ*
*│9. 𝐖ᴀʟʟᴘᴀᴘᴇʀꜱ  𝐌ᴇɴᴜ*
*│10. 𝐎ᴛʜᴇʀ 𝐌ᴇɴᴜ*
*╰────────────●●►*
𝐑ᴇᴘʟʏ 𝐓ʜᴇ 𝐍ᴜᴍʙᴇʀ 𝐘ᴏᴜ 𝐖ᴀɴᴛ 𝐓ᴏ 𝐒ᴇʟᴇᴄᴛ.......👁️❗
`;

        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // පරිශීලක ප්‍රතිචාර ලබා ගැනීම
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                let responseText;

                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📥 𝐃ᴏᴡɴʟ 𝐎ᴀᴅᴇʀ-𝐌ᴇɴᴜ 📥* *❒⁠⁠⁠⁠* 
*┋* *.𝐒ᴏɴɢ*
*┋* *.𝐕ɪᴅᴇᴏ*
*┋* *.𝐓ɪᴋᴛᴏᴋɪᴋ*
*┋* *.𝐅ʙ*
*┋* *.𝐈ɴꜱᴛᴀ*
*┋* *.𝐌ᴇᴅɪᴀꜰɪʀᴇ*
*┋* *.𝐀ᴘᴋ*
*┋* *.𝐘ᴛᴘᴏꜱᴛ*
*┋* *.𝐓ᴡɪᴛᴛᴇʀ*
*┋* *..𝐑ɪɴɢᴛᴏɴᴇ*
*╰───────────────────❒*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐒ᴇɴᴜ_𝐌ᴅ......👁️❗
`;
                        break;
                    case '2': // SEARCH MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔎 𝐒ᴇᴀʀᴄʜ-𝐌ᴇɴᴜ 🔍* *❒⁠⁠⁠⁠* 
*┋* *.𝐓ɪᴋᴛᴏᴋ 𝐒ᴛᴀʟᴋ*
*┋* *.𝐓ɪᴋᴛᴏᴋ 𝐒ᴇᴀʀᴄʜ*
*┋* *.𝐌ᴏᴠɪᴇ*
*┋* *.𝐈ᴍɢ*
*┋* *.𝐋ᴏɢᴏ 𝐋ɪꜱᴛ*
*┋* *.𝐑ᴡ*
*┋* *.𝐒ʀᴇᴘᴏ*
*╰───────────────────❒*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐒ᴇɴᴜ_𝐌ᴅ......👁️❗
`;
                        break;
                    case '3': // AI MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🧠 𝐀ɪ-𝐌ᴇɴᴜ  🧠* *❒⁠⁠⁠⁠* 
*┋* *.𝐀ɪ*
*┋* *.𝐎ᴘᴇɴᴀɪ*
*┋* *.𝐃ᴇᴇᴘꜱᴇᴇᴋ*
*┋* *.𝐀ɪ 𝐈ᴍɢ*
*╰───────────────────❒*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐒ᴇɴᴜ_𝐌ᴅ......👁️❗
`;
                        break;
                    case '4': // OWNER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👨‍💻 𝐎ᴡɴᴇʀ-𝐌ᴇɴᴜ 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *.𝐔ᴘᴅᴀᴛᴇ*
*┋* *.𝐑ᴇꜱᴛᴀʀᴛ*
*┋* *.𝐁ʟᴏᴄᴋ*
*┋* *.𝐔ɴʙʟᴏᴄᴋ*
*╰───────────────────❒*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐒ᴇɴᴜ_𝐌ᴅ......👁️❗
`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👥 𝐆ʀᴏᴜᴘ-𝐌ᴇɴᴜ 👥* *❒⁠⁠⁠⁠* 
*┋* *.𝐊ɪᴄᴋᴀʟʟ*
*┋* *.𝐓ᴀɢᴀʟʟ*
*┋* *.𝐇ɪᴅᴇᴛᴀɢ*
*┋* *.𝐀ᴅᴅ*
*┋* *.𝐒ᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*┋* *.𝐒ᴇᴛɢᴏᴏᴅʙʏᴇ*
*┋* *.𝐃ᴇʟ*
*┋* *.𝐃ᴇᴍᴏᴛᴇ*
*┋* *.𝐏ʀᴏᴍᴏᴛᴇ*
*┋* *.𝐔ɴᴍᴜᴛᴇ*
*┋* *.𝐌ᴜᴛᴇ*
*┋* *.𝐆ᴊᴊᴅ*
*┋* *.𝐒ᴇᴛᴘᴘ*
*╰───────────────────❒*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐒ᴇɴᴜ_𝐌ᴅ......👁️❗
`;
                        break;
                    case '6': // INFO MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *💾 𝐈ɴꜰᴏ-𝐌ᴇɴᴜ 💾* *❒⁠⁠⁠⁠* 
*┋* *.𝐀ʟɪᴠᴇ*
*┋* *.𝐌ᴇɴᴜ*
*┋* *.𝐏ɪɴɢ*
*┋* *.𝐎ᴡɴᴇʀ*
*╰───────────────────❒*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐒ᴇɴᴜ_𝐌ᴅ......👁️❗
`;
                        break;
                    case '7': // CONVERTER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔄 𝐂ᴏɴᴠᴇʀᴛᴇʀ-𝐌ᴇɴᴜ 🔄* *❒⁠⁠⁠⁠* 
*┋* *.𝐓ᴛꜱ2*
*┋* *.𝐓ᴏᴜʀʟ*
*┋* *.𝐒ᴛɪᴄᴋᴇʀ*
*╰───────────────────❒*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐒ᴇɴᴜ_𝐌ᴅ......👁️❗
`;
                        break;
                    case '8': // WALLPAPERS MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *⛱️ 𝐑ᴀɴᴅᴏᴍ-𝐌ᴇɴᴜ ⛱️* *❒⁠⁠⁠⁠* 
*┋* *.𝐇ᴀᴄᴋ*
*┋* *.𝐖ᴇᴀᴛʜᴇʀ*
*┋* *.𝐍ᴇᴡꜱ*
*┋* *.𝐇ɪʀᴜᴄʜᴄᴋ*
*┋* *.𝐕𝐕*
*╰───────────────────❒*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐒ᴇɴᴜ_𝐌ᴅ......👁️❗
`;
                        break;
                    case '9': // WALLPAPER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🏜️ 𝐖ᴀʟʟᴘᴀᴘᴇʀꜱ-𝐌ᴇɴᴜ 🏜️* *❒⁠⁠⁠⁠* 
*┋* *.𝐀ɴɪᴍᴇɢɪʀʟ1*
*┋* *.𝐀ɴɪᴍᴇɢɪʀʟ2*
*┋* *.𝐀ɴɪᴍᴇɢɪʀʟ3*
*┋* *.𝐀ɴɪᴍᴇɢɪʀʟ4*
*┋* *.𝐀ɴɪᴍᴇɢɪʀʟ5*
*┋* *.𝐑ᴅᴀɴɪᴍᴇ*
*╰───────────────────❒*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐒ᴇɴᴜ_𝐌ᴅ......👁️❗
`;
                        break;
                    case '10': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🌐 𝐎ᴛʜᴇʀ-𝐌ᴇɴᴜ 🌐* *❒⁠⁠⁠⁠* 
*┋* *.𝐏ᴀɪʀ*
*┋* *.𝐆ᴇᴛᴘᴘ*
*╰───────────────────❒*

> 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ 𝐒ᴜʟᴀ_𝐌ᴅ......👁️❗
`;
                        break;
                    default:
                        responseText = "*❌ Invalid option. Please enter a valid number (1-10)*";
                }

                // තෝරාගත් මෙනුව WhatsApp chat එකට යවයි.
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*⚠ An error occurred: ${e.message}*`);
    }
});

