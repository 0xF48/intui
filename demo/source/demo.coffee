require './lib/polyfills.js'
require './lib/helpers.js'
stateHandle = require './lib/state-handle.js'
{h,render,Component} = require 'preact'
cn = require 'classnames'
require 'preact/devtools'



# global variables
window.g =
	isSafari : /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
	colors : [ '#aa00ff', '#ff0000', '#0088ff', '#e55c00', '#00d991', '#3600cc', '#bf0000', '#0077b3', '#ff0044', '#00ccff', '#00f2e2', '#d9ca00', '#36cc00', '#bf00b3', '#b27700', '#b20047' ]
	dim : 50
	dark : '#171a1c'
	light : '#fff'
	gain_c: '#1294bf'
	loss_c: '#FF5027'
	slide_duration: 400
	mouse: [0,0]

document.addEventListener 'mousemove', (e)->
	g.mouse[0] = e.clientX
	g.mouse[1] = e.clientY







class View extends Component
	render: (props,state)->
		








state = 
	page: 0

window.state = new stateHandle(View,document.body,state)

require './style.scss'
