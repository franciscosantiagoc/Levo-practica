const {Message} = require('../db')

async function PutMessage(req, res){
  try {
    const {messageid,note} = req.body
    await Message.update(
      {
        note
      },
      {
        where: {messageid}
      }
      )
    res.send('success').status(200)
  } catch (error) {
    console.log('error', error)
    res.send('failed').status(400)
  }
  
} 

module.exports  = {
  PutMessage
}