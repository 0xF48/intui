

global._ = require 'lodash'
global.p = require 'bluebird'

cfg = require './config.json'

global.log = console.log

argv = require 'yargs'
require 'colors'

for key,val of cfg
	if typeof val is 'object'
		argv.command(key,'cfg = '+JSON.stringify(val))
	else if typeof val is 'number'
		argv.command(key,'cfg = '+val).number(key)
	else
		argv.command(key,'cfg = '+val)
argv
.command('verbose')
.alias('v', 'verbose')
.default('verbose',3)
.help('h').alias('h', 'help')

global.argv = argv.argv
argv = global.argv

for key,val of cfg
	if argv[key] and typeof argv[key] is 'object'
		cfg[key] = JSON.parse(argv[key])
	else if argv[key]
		cfg[key] = argv[key]

global.cfg = cfg

global.warn= ->
	argv.verbose >= 0 && console.log(Array.prototype.slice.call(arguments).join(' ').bold.red)
global.info= ->
	argv.verbose >= 1 && console.log.apply(console,arguments)
global.de= ->
	argv.verbose >= 2 && console.log.apply(console,arguments)


global.ONE_SECOND = 1000
global.ONE_MINUTE = ONE_SECOND*60
global.ONE_HOUR = ONE_MINUTE*60
global.ONE_DAY = ONE_HOUR*24


global.pt = (json)->
    JSON.stringify json,null,3