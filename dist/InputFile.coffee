
# Input Text
Input = require './Input.coffee'
{createElement,Component} = require 'react'
el = createElement
cn = require 'classnames'

class InputFile extends Component
	constructor: (props)->
		@state = 
			focus: no
			initial_value: props.value
			value: props.value
			clicked: false
	# onFocus: ()=>
	# 	if @state.focus || @props.disabled then return false
	# 	@setState
	# 		focus: yes
	# 	$(@base).find('input').focus()
	# onBlur: ()=>
	# 	if !@state.focus then return false
	# 	@setState
	# 		focus: no
	# 	$(@base).find('input').blur()
	onBlur: (e)=>
		console.log 'blur'
	onClick: (e)=>
		if @state.clicked
			@setState
				clicked:false
			return false
		# console.log 'on click'
		@setState
			clicked:true
		$(@base).find('input[type=file]').trigger('click')
	onChange: (e)=>
		# console.log e.target.value
		@setState
			initial_value: null
			value: e.target.files[0].name
		@props.onChange && @props.onChange(e)
	# onComponentDidMount: (e)=>

	render: =>


		if @props.barColor
			style = 
				'border-color':@props.barColor
		
		
	

	
		el Input,
			onClick: @onClick
			# onFocus: @onFocus
			onBlur: @onBlur
			disabled: @props.disabled
			label: @props.label
			className: cn 'file',@props.className,!@state.value && 'focus',(@state.focus || @state.value) && 'has-data'
		,
			label = el 'input',
				type: 'text'
				disabled: true
				style: style
				className: cn '-i-input-text',!@state.value && 'hidden'
				value: @state.value
			icon = el 'i',
				className: cn 'material-icons',@state.value && 'hidden'
			,'file_upload'

			el 'input',
				name: @props.name
				# value: @state.initial_value || @state.value
				type: 'file'
				onBlur: @onBlur
				onChange: @onChange
			

		


module.exports = InputFile