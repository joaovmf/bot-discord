const accountSid = 'ACdccb68b6a2beb30e8b9298e2954da416'; 
const authToken = '58a29035420619a6ab8bdf0ce393e997'; 
const client = require('twilio')(accountSid, authToken); 
 
sendMessage = (param) => {
client.messages 
      .create({ 
         body: 'Olá, eu sou o bot do joão!', 
         from: 'whatsapp:+14155238886',       
         to: `whatsapp:+55${param}`
       }) 
      .then(message => console.log(message.sid)) 
      .done();
}

module.exports = { sendMessage }