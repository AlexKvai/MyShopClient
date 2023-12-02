import { FC } from 'react'
import { TypePaginationProducts } from '../../../types/product.interface'
import Heading from '../../ui/Heading'
import Meta from '../../ui/Meta'
import Catalog from '../../ui/catalog/Catalog'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<Heading>Home</Heading>

			<Catalog products={products || []} />
		</Meta>
	)
}

export default Home
