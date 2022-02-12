const {Message} = require('../db')

async function PostMessage(req, res){
  try {
    const {name,email,message} = req.body
    console.log('Message', message)
    const registro =await Message.create({name, email, message});
    res.send('Registro exitoso').status(200)
  } catch (error) {
    console.log('error', error)//.status(400)
  }
  
} 

module.exports  = {
  PostMessage
}