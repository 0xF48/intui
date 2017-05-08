require './lib/polyfills.js'
require './lib/helpers.js'
stateHandle = require './lib/state-handle.js'
{h,render,Component} = require 'preact'
cn = require 'classnames'
require 'preact/devtools'

Slide = require '../../dist/Slide.coffee'
Grid = require '../../dist/TetrisGrid.js'
SquareButton = require '../../dist/SquareButton.coffee'

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





class ElementsPanel extends Component
	render: (props,state)->

		# types of elements
		elements = [

		]


		options = [
			h SquareButton,
				className: 'btn'
				activeClass: 'active'
				width: g.dim
				active: false
				vertical: yes
				inverse: yes
				onClick: ()->
					actions.resetGrid
				i: 'refresh'		
		]

		h Slide,
			className: 'elements-panel'
			vertical: yes
			beta: 100
			h Slide,
				vertical: no
				height: g.dim
				options
			# grid elements picker
			# h Grid,
			# 	width: 4
			# 	beta: 100
			# 	elements

class View extends Component
	render: (props,state)->
		grid_items = []
		h Slide,
			beta: 100
			slide: yes
			pos: @props.show_grid && 1 || 0
			h Slide,
				width: g.dim*6
				h ElementsPanel, @props
			h Slide,
				beta: 100







actions = 
	resetGrid: ->
		state.set 
			grid_items: []


state = 
	show_grid: no
	grid_items: []
	page: 0

window.state = new stateHandle(View,document.body,state)

require './style.scss'
