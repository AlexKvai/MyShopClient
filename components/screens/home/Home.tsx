import { FC } from 'react'
import Heading from '../../ui/Heading'
import Meta from '../../ui/Meta'
import Catalog from '../../ui/catalog/Catalog'

const Home: FC = () => {
	return (
		<Meta title='Home'>
			<Heading>Home</Heading>

			<Catalog />
		</Meta>
	)
}

export default Home
