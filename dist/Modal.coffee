require './style/Modal.scss'
{h,Component} = require 'preact'
Overlay = require './Overlay.js'
cn = require 'classnames'

class Modal extends Component
	constructor: (props)->
		super(props)
		@mouse = props.mouse || [0,0]
		@stage =
			x: 0
			y: 0
		@state =
			start_radius: 10


	attr: (b,a,delta)->
		b - (b-a) * delta


	
	draw_rect: (ctx)->
		if !@_canvas
			return
		ctx.clearRect 0,0,@_canvas.clientWidth,@_canvas.clientWidth
		ctx.beginPath()
		for i in [0..3]
			# log @pos[i]
			ctx.lineTo(@pos[i].x,@pos[i].y)
		ctx.closePath()
		ctx.fill()



	show: ()=>
		

		# console.log @root
		rect = @_content.getBoundingClientRect()
		@rect = rect
		ctx = @_canvas.getContext('2d')
		@_canvas.width = @_overlay.refs.overlay.clientWidth
		@_canvas.height = @_overlay.refs.overlay.clientHeight
		ctx.fillStyle = @props.backColor

		@perim = [
			{ x:rect.left, y:rect.top }
			{ x:rect.left + rect.width , y:rect.top }
			{ x:rect.left + rect.width, y:rect.top + rect.height }
			{ x:rect.left, y:rect.top + rect.height }
		]

		r = @state.start_radius

		log @props.backColor

		x = @mouse[0]
		y = @mouse[1]

		
		# x = Math.random()* @_canvas.width
		# y = Math.random() * @_canvas.height

		@perim_start = [
			{x: x, y: y }
			{x: x + r, y: y}
			{x: x + r,y:  y + r}
			{x: x, y: y + r }
		]

		@pos = @perim.slice(0)


		for i in [3..0]
			TweenLite.fromTo @pos[i],0.2+(i*0.1),
				x: @perim_start[i].x
				y: @perim_start[i].y
			,
				x: @perim[i].x
				y: @perim[i].y
				ease: Elastic.easeOut.config(0.2)
				onUpdate: ()=>
					# console.log 'draw'
					@draw_rect(ctx)			


	componentDidUpdate:(props,state)->
		if @props.show == true && @props.show != props.show
			@show()
	componentDidMount: (props,state)->
		if @props.show == true
			@show()
			
	
	render: =>
		h Overlay,
			className: '-i-modal-wrap'
			onClick: @props.onClick
			show: @props.show
			ref: (el)=>
				@_overlay = el
			# ref: @props.canvas
			h 'canvas',
				className: '-i-modal-canvas'
				ref: (el)=>
					@_canvas = el 
				# ref: 'canvas'
			h 'div',
				onClick: (e)->
					e.stopPropagation()
				ref: (el)=>
					@_content = el 
				# ref: 'content'
				className: cn '-i-modal-content',@props.className
				@props.children


module.exports = Modal

