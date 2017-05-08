
cn = require 'classnames'
SlideButton = require './SlideButton.coffee'
Button = require './Button.coffee'
{createElement,Component} = require 'react'
el = createElement

class SquareButton extends Component
	constructor: (props)->
		super(props)
	render: (props,state)=>
		if @props.inverse
			class1 = @props.staticClass
			class2 = @props.activeClass
			if @props.active
				pos = 0
				offset = 0
			else
				pos = 1
				offset = -@props.offset

		else
			class2 = @props.staticClass
			class1 = @props.activeClass
			if @props.active
				pos = 1
				offset = 0
			else
				pos = 0
				offset = @props.offset

		

		el SlideButton,
			width: @props.width || null
			height: @props.height || null
			className: 'btn '+@props.className
			onClick: @props.onClick
			vertical: @props.vertical
			hover: yes
			disabled: props.disabled
			index_offset: offset
			pos: pos
			el Button,
				i: @props.i
				className: cn 'btn',class2
			el Button,
				i: @props.i
				className: cn 'btn',class1

SquareButton.defaultProps=
	offset: 5

module.exports = SquareButton