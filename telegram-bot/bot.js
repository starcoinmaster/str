const TelegramBot = require('node-telegram-bot-api');

// Replace with your actual bot token
const token = '7673978588:AAG01w7E48JEkHTIQ74S9pIHtiPgUw0iz9A';

// Create a bot that uses polling to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Respond to the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const message = "Welcome to the StarCoin Bot! Choose an option below:";

    // Path to the image file (ensure the image exists and is smaller)
    const photo = "starcommunity.png"; 

    // Define inline keyboard with two buttons
    const options = {
        caption: message, // Message attached as caption to the image
        reply_markup: {
            inline_keyboard: [
                [{ text: "Launch", url: "https://shorturl.at/TNcMl" }],
                [{ text: "Join Community", url: "https://t.me/joinchat/XYZCommunity" }]
            ]
        }
    };

    // Send the photo with the caption and buttons
    bot.sendPhoto(chatId, photo, options).catch(err => {
        console.error("Error sending photo:", err);
    });
});
