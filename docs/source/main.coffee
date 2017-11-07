# require './slide_test.coffee'
{render,h,Component} = require 'preact'

url = require 'url'

Slide = require '../../lib/Slide.coffee'
{Grid,GridItem} = require '../../lib/Grid.coffee'


Markup = require 'preact-markup'
require '../../lib/style/intui.scss'
require './style.scss'
randomColor = require('random-color')
icons = require './icons.json'

require './lib/helpers'


# require 'preact/devtools'

DIM = 50


class IconCard extends Component
	componentWillMount: ()->
		
		if @props.color
			
			@bg = @props.color.hexString()
			@color = @props.color.clone().darken(0.7).hexString()
			@icon = @props.icon
		else
			@c = randomColor(0.7,0.99)
			@bg = @c.hexString()
			@color = @c.darken(0.7).hexString()
			@icon = icons[Math.floor(Math.random()*icons.length)]
			@forceUpdate()

	render: ()->
		
		
		h 'div',
			style:
				background: @bg
				color: @color
			className: 'center card'
			h 'i',
				className: 'material-icons'
				@icon
			


class SlideDemo1 extends Component
	constructor: (props)->
		super(props)
		@state = {}

	renderQuad: (step,root)->
		if step == 0
			return h Slide,
				beta: 50
				h IconCard
		h Slide,
			slide: yes
			beta: if root then 100 else 50
			pos: if @state['step_'+step] then 0 else 1
			onClick: (e)=>
				@state['step_'+step] = !@state['step_'+step]
				if @state['step_'+step] == true
					for i in [0...step]
						@state['step_'+i] = true

				@setState()
				e.stopPropagation()
				return false

			vert: step % 2 == 0
			h Slide,
				beta: 50
				h IconCard
			h Slide,
				beta: 50
				h IconCard
			@renderQuad(step-1)

	render: ()->
		h 'div',
			className: 'demo-container'
			@renderQuad(5,true)



class SlideDemo2 extends Component
	constructor: (props)->
		super(props)
		@state = 
			pos: 1

	renderQuad: (step,root)->
		if step == 0
			return h Slide,
				beta: 50
				h IconCard
		h Slide,
			slide: yes
			beta: if root then 100 else 50
			pos: if @state['step_'+step] then 0 else 1
			onClick: (e)=>
				@state['step_'+step] = !@state['step_'+step]
				if @state['step_'+step] == true
					for i in [0...step]
						@state['step_'+i] = true

				@setState()
				e.stopPropagation()
				return false

			vert: step % 2 == 0
			h Slide,
				beta: 50
				h IconCard
			h Slide,
				beta: 50
				h IconCard
			@renderQuad(step-1)

	render: ()->
		h 'div',
			className: 'demo-container'
			h Slide,
				slide: yes
				vert: yes
				pos: @state.pos
				
				h Slide,
					onClick: =>
						@state.pos = 1
						@setState()
					auto: yes
					h IconCard
				h Slide,
					auto: yes
					onClick: =>
						@state.pos = 0
						@setState()
					h IconCard,
						span: if @state.pos == 1 then null else RANDOM_TEXT.substr(0,155)
				h Slide,
					auto: yes
					onClick: =>
						@state.pos = 0
						@setState()
					h IconCard,
						span: if @state.pos == 1 then RANDOM_TEXT.substr(0,155) else null
				h Slide,
					beta: if @state.click2 % 2 == 0 then 30 else 40
					slide: yes
					pos: @state.click2
					inverse: no
					onClick: =>
						if !@state.click2
							@state.click2 = 0
						@state.click2 = (@state.click2+1) % 3
						@setState()
					h Slide,
						square: yes
						h IconCard
					h Slide,
						square: yes
						h IconCard
					h Slide,
						square: yes
						h IconCard



class GridDemo extends Component
	constructor: (props)->
		super(props)
		@state = {}


	buildItems: ()->
		@items = []
		for i in [0..200]
			@items.push h GridItem,
				className: 'grid-item'
				key: i
				i: i
				w: 1+Math.floor(Math.random()*2)
				h: 1+Math.floor(Math.random()*2)
				h IconCard
	componentDidMount: ()->
		@buildItems()
	# buildItem: (i)->
	# 	h GridItem,
	# 		key: i
	# 		i: i
	# 		w: 1+Math.floor(Math.random()*2)
	# 		h: 1+Math.floor(Math.random()*2)
	# 		h IconCard

	render: ()->
		# items = []
		# for i in [0..100]
		# 	items.push @renderItem(i)

		h 'div',
			className: 'demo-container grid-container'
			style: 
				height: '600px'
			h Grid,
				vert: yes
				className: 'grid-outer'
				size: 4
				@items


class GridDemo2 extends Component
	constructor: (props)->
		super(props)
		@state = 
			length: 12
			size: 8

	buildItems: ()->
		
		@items = []
		@append = []
		for i in [0..100]
			@items.push h GridItem,
				className: 'grid-item'
				key: i
				i: i
				w: 1+Math.floor(Math.random()*2)
				h: 1+Math.floor(Math.random()*2)
				h IconCard,
					color: randomColor(0.7,0.99)
					icon: icons[Math.floor(Math.random()*icons.length)]
	componentDidMount: ()->
		@buildItems()
	
	# buildItem: (i)->
	# 	h GridItem,
	# 		key: i
	# 		i: i
	# 		w: 1+Math.floor(Math.random()*2)
	# 		h: 1+Math.floor(Math.random()*2)
	# 		h IconCard

	addOne: =>
		@items.push h GridItem,
			className: 'grid-item'
			key: @items.length
			i: @items.length
			w: 1+Math.floor(Math.random()*2)
			h: 1+Math.floor(Math.random()*2)
			h IconCard,
				color: randomColor(0.7,0.99)
				icon: icons[Math.floor(Math.random()*icons.length)]
		@forceUpdate()


	onUnitMouseEnter: (r,c,i)=>
		# log @items[@state.move_i]
		if @state.move && @state.move_i? && @items[@state.move_i]
			if c+@items[@state.move_i].attributes.w <= @state.size && r+@items[@state.move_i].attributes.h <= @state.length
				@items[@state.move_i].attributes.r = r
				@items[@state.move_i].attributes.c = c
				@forceUpdate()
		else
			@state.move_i = i




	onMouseDown: (e)=>
		@state.mouse_down = true
	
	onMouseUp: (e)=>
		log 'MOUSE UP'
		if !@state.move
			@addOne()
		@state.mouse_down = false
		@state.move = false
		@state.move_i = undefined

	onMouseMove: ()=>
		if @state.mouse_down 
			@state.move = true

	render: ()->
		# items = []
		# for i in [0..100]
		# 	items.push @renderItem(i)
		log 'RENDER'


		h 'div',
			# onClick: @addOne
			onMouseDown: @onMouseDown
			onMouseUp: @onMouseUp
			onMouseMove: @onMouseMove
			className: 'demo-container grid-container'
			style: 
				height: '600px'
			h Grid,
				ease_dur: 0.3
				ease: 'linear'
				onUnitMouseEnter: @onUnitMouseEnter
				fixed: yes
				className: 'grid-outer'
				size: @state.size
				length: @state.length
				@items



class SlideDemo extends Component
	constructor: (props)->
		super(props)
	render: =>
		h Demo,
			pos: @props.pos





DOCS_TEXT = require './docs-text.html'
RANDOM_TEXT = require './random-text.txt'


class Docs extends Component
	constructor: (props)->
		super(props)
		c = randomColor(0.7,1.0)
		@bg = c.hexString()
		@color = c.darken(0.7).hexString()

	componentDidMount: ()->
		window.addEventListener 'resize',()=>
			@forceUpdate()


		# for title in @base.querySelectorAll('h2')
		# 	title.style.background = randomColor(0.5,1.0).hexString()

	renderHeader: ->





		h Slide,
			className: 'docs-header'
			vert: yes
			h: window.innerHeight
			h 'div',
				className: 'header center'
				style: 
					color: @color
					background: @bg
				h 'div',
					className: 'center title'
					'intui'
			
			# logo
			# h 'div',
			# 	className: 'description'
			# h 'div'
			# 	className: 'link github'
			# 	'goto github'



	renderBody: ->
		h Slide,
			className: 'docs-body'

			h Slide,
				beta: 50
				auto: yes
				vert: true
				className: 'docs-text'
				h Markup,
					markup: DOCS_TEXT
			h Slide,
				beta: 50
				vert: true
				auto: yes
				className: 'docs-demo'
				h SlideDemo1,
					top: @state.demo_1
				h SlideDemo2,
					top: @state.demo_2
				h GridDemo,
					top: @state.demo_3
				h GridDemo2,
					top: @state.demo_4




	render: =>
		header = @renderHeader()
		body = @renderBody()
		h 'div',
			className: 'docs-main'
			header
			body


@docs_el = null
render(h(Docs),document.body,@docs_el)
hljs.initHighlightingOnLoad()