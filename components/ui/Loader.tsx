const Loader = () => {
	return (
		<svg
			width='50px'
			height='50px'
			viewBox='0 0 66 66'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			aria-hidden='true'
			role='img'
			preserveAspectRatio='xMidYMid meet'
			fill='#000000'
		>
			<g transform='rotate(0)'>
				<circle cx='33' cy='33' r='6' fill='#000000' fillOpacity='1'>
					<animateTransform
						attributeName='transform'
						type='rotate'
						from='0 33 33'
						to='360 33 33'
						dur='1s'
						repeatCount='indefinite'
					></animateTransform>
				</circle>
			</g>
		</svg>
	)
}

export default Loader
