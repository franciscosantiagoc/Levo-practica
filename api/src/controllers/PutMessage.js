const {Message} = require('../db')

async function PutMessage(req, res){
  try {
    const {messageid,note} = req.body
    if(messageid && note && /[a-zA-Z0-9\-]$/.test(messageid) && /[a-zA-Z0-99áéíóúÁÉÍÓÚ_¿?!¡,.\- ]$/.test(note)){// verificamos que los valores de los datos recibidos cumplan con el formato admitido y no sean vacios
      let mess_upd=await Message.update(
        {
          note
        },
        {
          where: {messageid}
        }
        )
      console.log('mess_upd', mess_upd)
      if(mess_upd!=null)return res.send({status: 'success'}).status(200)
      return res.json({status: 'failed', error: 'Dato inexistente'}).status(400)
    }
    res.send({status: 'failed', error: 'Formato de datos incorrectos'}).status(400)
  } catch (error) {
    console.log('error', error)
    res.send({status: 'failed'}).status(400)
  }
  
} 

module.exports  = {
  PutMessage
}