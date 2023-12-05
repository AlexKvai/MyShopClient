import { Spinner } from '@chakra-ui/react'
import { FC } from 'react'

const Loader: FC = () => {
	return (
		<Spinner
			thickness='4px'
			speed='1s'
			emptyColor='gray.200'
			color='green'
			size='xl'
			display='block'
			className='mx-auto'
			marginTop={20}
		/>
	)
}

export default Loader
