const {Message} = require('../db')

async function PostMessage(req, res){
  try {
    const {name,email,message} = req.body
    if(name && email && message && /[a-zA-Z0-99áéíóúÁÉÍÓÚ_\ ]$/.test(name) && /[a-zA-Z0-9áéíóúÁÉÍÓÚ.-_]$/.test(email) && /[a-zA-Z0-9áéíóúÁÉÍÓÚ_¿?!¡,.\- ]$/.test(message)){
      const registro =await Message.create({name, email, message});
      return res.send({status: 'success'}).status(200)
    }
  } catch (error) {
    console.log('error', error)//.status(400)
    res.send({status: 'failed'}).status(400)
  }
  
} 

module.exports  = {
  PostMessage
}