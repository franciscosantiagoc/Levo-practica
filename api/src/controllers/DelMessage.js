const {Message} = require('../db')

async function DelMessage(req, res){
  try {
    const {messageid} = req.params
    await Message.update(
      {
        status:false
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
  DelMessage
}