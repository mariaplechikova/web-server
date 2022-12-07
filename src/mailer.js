import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'hosea87@ethereal.email',
        pass: 'TfwRkhrHxRnC7yDJMp'
    },
    sacure: false,
    tls: {
        rejectUnauthorized: false,
    }
});

export  default {
    sendToMail(text){
        const mailOption = {
            // from: 'hosea87@ethereal.email',
            // to: 'hosea87@ethereal.email',
            // subject: 'Subject',
            // name: text
            // quantity: text
            // quantity: text
            // tariff: text
            // date: text
            // comment: text
        }
    
        return transporter.sendMail(mailOption)

    }
}