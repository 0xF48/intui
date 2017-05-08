# The official slide component by Intui
# For use with Preact library
# Preact can be found at https://github.com/developit/preact
# Created by Yury Sidorov. arxii @ https://github.com/arxii

# Best used with Coffeescript and Preact
_extends = require './lib/_extends'

{h,Component} = require 'preact'
cn = require 'classnames'


if !Object.assign
	throw 'Object.assign not found, use polyfill'
if !cn
	throw 'classnames not found'

class Slide extends Component

	# init
	constructor: (props)->
		super(props)
		@state=
			ok:yes
	

	# verify if child is a slide component
	isSlide: (child)->
		
		if !child then return no
		if !child.nodeName then return no
		if child.nodeName.name == 'Slide' then return yes
		return false

	# check if child is outer element
	isChild: (child)->
		if !child then return no
		if child.getAttribute('class') && child.getAttribute('class').match(/-i-slide-outer|-i-slide-static/) != null then return yes
		return no
		
	# get the rect
	rect: ()->
		rect=
			width: @props.width || @_outer.clientWidth
			height: @props.height || @_outer.clientHeight	

	events: [
		'onClick'
		'onMouseEnter'
		'onMouseLeave'
	]

	# pass down any event handlers that are part of the array above to the topmost element
	passProps: ()->
		@pass_props = {}
		@events.forEach (e)=>
			if @props[e]
				@pass_props[e] = @props[e];

	getIndexXY: (pos)->
		o_w = @_outer.clientWidth
		o_h = @_outer.clientHeight


		child = @_inner.children[pos]

		max_x = Math.abs(child.offsetLeft)
		max_y = Math.abs(child.offsetTop)

		

		if !@props.vertical
			x = child.offsetLeft
			y = 0
		else
			y = child.offsetTop
			x = 0
		
		if @props.vertical && child.offsetTop > max_y
			y = max_y
		else if child.offsetLeft > max_x
			x = max_x


		if @props.index_offset
			if @props.vertical
				y += @props.index_offset
			else
				x += @props.index_offset

		
		return [-x,-y]
	
	
	toIndex: ()=>
		pos = @getIndexXY @props.pos
		console.log pos
		@_inner.style.transition = !@props.scroll && ('transform ' + @props.ease_dur + 's ' + @props.ease) || ''
		@_inner.style.transform = 'matrix(1, 0, 0, 1, ' + pos[0] + ', ' + pos[1] + ')'
		# @setState
		# 	transform: 

	setIndex: ()=>
		pos = @getIndexXY @props.pos
		console.log pos
		@_inner.style.transition = ''
		@_inner.style.transform = 'matrix(1, 0, 0, 1, ' + pos[0] + ', ' + pos[1] + ')'



	diffAnimation: (props,state)->
		if @props.slide && (@props.pos != null || @props.index_offset != null)
			if props.pos != @props.pos || props.index_offset != @props.index_offset
				setTimeout @toIndex,100

	componentDidUpdate: (props,state)->
		@diffAnimation(props,state)

	componentDidMount: (props,state)->
		if @props.slide && @props.pos
			setTimeout @setIndex,0

	componentWillMount: ()->
		@passProps()

	getBeta: ()->
		beta = @props.beta + '%';
		if (@props.offset)
			return 'calc(' + beta + ' ' + (this.props.offset > 0 ? '+ ' : '- ') + Math.abs(this.props.offset) + 'px)' 
		else
			return beta
	
	componentWillUnUnmount: ()->
		# window.removeEventListener ('resize',this.resize.bind(this))
		# window.removeEventListener ('resize',this.resize)

	getOuterHW: (w,h)->
		

		w =  (!this.context.vertical && this.props.size) || this.props.width
		h =  (this.context.vertical && this.props.size) || this.props.height

		h = (@context.vertical && @props.auto) && 'auto' || (h && h + 'px')
		w = (!@context.vertical && @props.auto) && 'auto' || (w && w + 'px')

		if (this.context.vertical)
			w = w || '100%'
			h = h || this.getBeta()
		else
			w = w || this.getBeta()
			h = h || '100%'


		[w,h]


	# render component
	render: (props,state)->

		o_c = cn '-i-slide-outer', @props.className, @props.outerClassName, (@props.height != null || @props.width != null) && ' -i-slide-fixed'
		
		
		outer_hw = @getOuterHW()


		# This Slide does animation sliding.
		if @props.slide
			inner = []
			outer = []
			for item in props.children
				if @isSlide(item)
					inner.push(item)
				else
					outer.push(item)
			ret = h 'div',
				className: o_c
				style: _extends {},@props.outerStyle,{width:outer_hw[0],height:outer_hw[1]}
				ref: (ref)=>
					@_outer = ref
				h 'div',
					_extends {}, @pass_props,
						ref: (ref)=>
							@_inner = ref
						className: cn '-i-slide-inner', @props.vertical && '-i-slide-vertical', @props.innerClassName, @props.center && '-i-slide-center'
						style:
							_extends {},
								width: @props.vertical && '100%' || 'auto'
								height: @props.vertical && 'auto' || '100%'
								# transform: @state.transform
								
								@props.innerStyle
					
					# inner slides go in the -i-slide-inner element
					inner
				# children that are not slides go into the -i-slide-outer element
				outer

		else
			ret = h 'div',
				_extends {},@pass_props,
					className: o_c
					style: _extends {},@props.outerStyle,
						width: outer_hw[0]
						height: outer_hw[1]
				@props.children


		return ret




Slide.defaultProps=
	scroll: no
	ease: 'cubic-bezier(0.25, 0.34, 0, 1)'
	ease_dur: 0.4
	pos: 0 #initial position of the slide (0,1,2,3....)
	animate: false #3d transitions
	offset: 0 #offset in pixels (positive...how much to add, negative will subtract)
	slide: no #slides through children, if disabled will ignore all internal slide logic, and apply default flex CSS.
	beta: 100 #beta variable
	width: null #width number in pixels
	height: null #same as width
	center: no #css flex center
	vert: no #css flex direction column
	inverse: no #css flex direction inverse





module.exports = Slide





