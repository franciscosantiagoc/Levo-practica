const { conn } = require('./src/db.js');
conn.sync({ force: true }).then( async() => {
  console.log('%s listening at 3001'); 
})