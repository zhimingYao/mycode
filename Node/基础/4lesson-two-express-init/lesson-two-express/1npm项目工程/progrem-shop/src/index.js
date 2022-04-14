
  const express = require('expresss');
  const app = express();
  app.get('*',function(){
    console.log("111");
  })
  app.listen(3000)
