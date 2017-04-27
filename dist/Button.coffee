require './style/Button.scss';
#Input base class

{createElement,Component} = require 'react'
el = createElement
cn = require 'classnames'
SlideMixin = require './SlideMixin.js'
class Button extends Component
	mixins: [SlideMixin]
	render: ->

		if @props.label
			label = el 'span',className:'label',@props.label
		else if @props.children && @props.children.length
			label = @props.children
		else if @props.i
			label = el 'i',className:'material-icons',@props.i
		if @props.size
			style = 
			
				width: @props.size + 'px'
				height: @props.size + 'px'

		el 'div',
			Object.assign @props,
				onClick: @props.onClick
				className: cn '-i-btn',@props.big && 'big',@props.square && 'square',@props.className,@props.disabled && 'disabled'
				style: style
		,
			@props.pre
			label


module.exports = Button