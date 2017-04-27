#Input base class

# Button = require './Button.coffee'
{createElement,Component} = require 'react'
el = createElement
cn = require 'classnames'
Slide = require './Slide.js'

class SlideButton extends Component
	
	constructor: (props)->
		super(props)
		@state = 
			pos: props.start || 0
	onClick: (e)=>
		if @props.disabled then return false
		@onEnter()
		@props.onClick && @props.onClick()

	onEnter: (e)=>
		# console.log @props.start
		# if @props.pos != null then return false
		if @props.disabled then return false
		@setState
			hover: yes
			pos: (1-(@props.start||0))
	onLeave: (e)=>
		# if @props.pos != null then return false
		# if @props.disabled then return false
		# console.log (@props.start||0)
		@setState
			hover: no
			pos: (@props.start||0)


	componentWillUpdate: (props,state)=>
		# console.log 'will update',@props.toggle
		if @props.toggle != props.toggle
			@setState
				pos: props.toggle
	render: =>
		# console.log 'render btn',@props.toggle
		# console.log @props.pos
		if @props.pos != null && @props.pos != undefined
			pos = @props.pos
		else
			pos = @state.pos
		# console.log pos
		# console.log @state.pos


		el 'div',
			className: cn('-i-slide-btn',@props.className,@props.disabled && 'disabled',@props.square && 'square')
			onMouseEnter: @props.hover && @onEnter
			onMouseLeave: @props.hover && @onLeave
			onClick: @onClick
		,
			el Slide,
				flip: no
				width: @props.width
				height: @props.height
				pos: pos
				slide: true
				index_offset: @state.hover && @props.index_offset || 0
				vertical: @props.vertical || false
			,
				el Slide,{},@props.children[@props.inverse && 1 || 0]
				el Slide,{},@props.children[!@props.inverse && 1 || 0]

SlideButton.defaultProps=
	pos: null
	hover: true

module.exports = SlideButton