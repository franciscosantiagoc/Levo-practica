const {Message} = require('../db')

async function GetMessage(req, res){
  try {
   const Messages =await Message.findAll();
    res.send(Messages).status(200)
  } catch (error) {
    console.log('error', error)//.status(400)
  }
  
} 

module.exports  = {
  GetMessage
}