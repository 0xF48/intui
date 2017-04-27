pkg = require './package.json'
cfg = require './config.json'
express = require 'express'
require './globals.coffee'




app = express()

app.use(express.static './demo/static')

# app
# .set 'view engine','pug'
# .set 'views','./client-views'
# .use app_session
# .use(passport.initialize())
# .use(passport.session())
# .use bodyParser.urlencoded extended:true
# .use routes


# http server
server = app.listen cfg.port, ->
	info '- intui -'.bold.cyan
	info 'mode:',cfg.mode.bold
	info 'port:',String(server.address().port).bold
