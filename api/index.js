const { conn } = require('./src/db.js');
const server = require('./src/app.js');

server.listen(process.env.PORT||3001,  () => {
  conn.sync({ force: false }).then( async() => {
    console.log('%s listening at 3001'); 
  })
});