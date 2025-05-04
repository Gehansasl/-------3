const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "☠️", // Reaction emoji when the command is triggered
    alias: ["jester", "king"],
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        // Owner's contact info
        const ownerNumber = '+94788770020'; // Replace this with the actual owner number
        const ownerName = '𝐉𝐄𝐒𝐓𝐄𝐑 𝐄𝐗𝐄'; // Replace this with the owner's name
        const organization = '*𝐒𝐄𝐍𝐔-𝐌𝐃* WHATSAPP BOT DEVALOPER 😈'; // Optional: replace with the owner's organization

        // Create a vCard (contact card) for the owner
        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  // Full Name
                      `ORG:${organization};\n` +  // Organization (Optional)
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` +  // WhatsApp ID and number
                      'END:VCARD';

        // Send the vCard first
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send a reply message that references the vCard
        await conn.sendMessage(from, {
            text: `𝐒𝐄𝐍𝐔-𝐌𝐃 𝗢𝗪𝗡𝗘𝗥: ${ownerName}\n\n\ *🄿🄾🅆🄴🅁🄳 🅱🆈 𝐒𝐄𝐍𝐔_𝐌𝐃 💛*`,
            contextInfo: {
                mentionedJid: [ownerNumber.replace('+94775877546') + '+94775877546@s.whatsapp.net'], // Mention the owner
                quotedMessageId: sentVCard.key.id // Reference the vCard message
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mek聽});
聽聽聽聽}
});
