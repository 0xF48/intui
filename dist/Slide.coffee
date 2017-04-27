# The official slide component by Intui
# For use with Preact library
# Preact can be found at https://github.com/developit/preact
# Created by Yury Sidorov. arxii @ https://github.com/arxii

# Best used with Coffeescript and Preact

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
	isChild: (c)->
		log c
		return no
	

	# get the rect
	rect: ()->
		rect=
			width: @props.width || @_outer.clientWidth
			height: @props.height || @_outer.clientHeight	
	

	componentWillMount: ()->


	componentWillUnUnmount: ()->


	# render component
	render: (props,state)->

		items = props.children || []

		if !Array.isArray(props.children) && props.children != null
			items = [props.children]
		else if props.children == null
			items = []

		inner = []
		outer = []

		for item in items
			if isChild(item)
				inner.push(item)
			else
				outer.push(item)




		i_c = cn 'i-slide-inner', props.outerClassName,(props.height != null || props.width != null ? ' -i-slide-fixed' : '')


		if @props.slide
			children = h 'div',
				className: i_c
				ret_items



		opt = 
			


		# render output
		h 'div',opt,inner,outer

















Slide.defaultProps=
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





