const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
  to : 'danishkumar1997@gmail.com',
  from : 'danishkumar1997@gmail.com',
  subject : 'Gand Maar dengay !!',
  text : 'Bhag Bhosdike'
})

const sendWelcomeEmail = (email , name) => {
  sgMail.send({
    to : email,
    from : 'danishkumar1997@gmail.com',
    subject : 'Madarchood Randhway',
    text : 'Welcome to the App Bhosdike'
  })
} 

const sendcancelEmail = (email , name) => {
  sgMail.send({
    to : email,
    from : 'danishkumar1997@gmail.com',
    subject : 'Maa Chuda',
    text : 'Welcome to the App Bhosdike'
  })
} 

module.exports = {
  sendWelcomeEmail,
  sendcancelEmail
  
}