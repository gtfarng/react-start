var express = require('express'), 
var app = express();
var session = require('express-session');
  
app.use(session({ secret: 'keyboard cat', 
	cookie: { maxAge: 60000 }, resave: true, saveUninitialized:true
 	})) 
app.use(function(req, res, next) { 
   var sess = req.session 
   if (sess.views) { 
      sess.views++ 
   } else { 
      sess.views = 1 
   } 
   console.log(sess.views);
   next();
})

app.get('/',(res,req) => {
	res.send('session: '+ req.session.views)
})

  
app.listen(8000);