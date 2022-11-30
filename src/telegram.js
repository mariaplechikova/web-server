import TelegramBot from 'node-telegram-bot-api' 
import  dotenv from 'dotenv'

dotenv.config()

const token = process.env.TELEGRAM_TOKEN;
const chatId = +process.env.TELEGRAM_CHAT_ID

console.log(token)
console.log(chatId)

const bot = new TelegramBot(token, {polling: true});

export default {
    sendToPrivateChat(text) {
        return bot.sendMessage(chatId, text, {
            parse_mode: 'HTML'
        });
    }
}

