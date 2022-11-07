export const accordion = (node, isOpen) => {
	let initialHeight = node.offsetHeight
	node.style.height = isOpen ? 'auto' : 0
	node.style.overflow = 'hidden'

	let animation = node.animate(
		[
			{
				height: 0
			},
			{
				height: `${initialHeight}px`
			}
		],
		{
			duration: 300,
			fill: 'both',
			easing: 'ease',
			direction: isOpen ? 'reverse' : 'normal'
		}
	)
	animation.pause()

	animation.onfinish = ({ currentTime }) => {
		if (!currentTime) {
			animation.reverse()
			animation.pause()
		}
		const expanded = Boolean(isOpen ? !currentTime : currentTime)
		node.dispatchEvent(
			new CustomEvent('animationEnd', {
				detail: {
					expanded
				}
			})
		)
	}

	return {
		update: () => (animation.currentTime ? animation.reverse() : animation.play())
	}
}


