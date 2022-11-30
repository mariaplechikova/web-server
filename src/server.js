// Подключить express  в наш сайт
import express from 'express'
import cors from 'cors'

import telegram from './telegram.js'
import mailer from './mailer.js'


//npm install  express
// node ./src/server.js   это ввести чтобы запустить сервер
// http://localhost:8080/ping     это адрес в браузере
//npm install cors
// npm install nodemailer
// npm install nodemon --save-dev
// npm run start:dev
// npm install dotenv

// Создаем клиента
// https://ethereal.email/
// Name	Hosea Lang
// Username	hosea87@ethereal.email (also works as a real inbound email address)
// Password	TfwRkhrHxRnC7yDJMp


// Создаем вебсервер
const server = express()

// Включаем поддержку json
server.use(express.json())
server.use(cors())

// Создаем обработчик GET метода по пути  /ping
server.get('/ping', (req, res) => {
    // Отправим стороку pong
    res.send('pong')
})

// Создадим обработчик POST метода по пути /send-email
server.post('/send-order', async (req, res) => {
    console.log(req.body)
    await telegram.sendToPrivateChat(`
    <b>Email: ${req.body.from}</b>\nMessage: ${req.body.text}`)
    res.send()
})


// Запустим сервер слушать порт 8080
server.listen(8080, () => {
    console.log('Server started on 8080 port')
})

