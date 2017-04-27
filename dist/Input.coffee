require './style/Input.scss';
#Input base class

{createElement,Component} = require 'react'
el = createElement
cn = require 'classnames'

class Input extends Component
	render: ->
		if @props.label
			label = el 'span',className:'label',@props.label
		
		children = [label].concat @props.children
		
		el 'div',
			onClick:  @props.onClick || @props.onFocus
			className: cn '-i-input',@props.className,@props.disabled && 'disabled'
		,children


module.exports = Input