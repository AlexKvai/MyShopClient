import { FC } from 'react'
import { TypePaginationProducts } from '../../../types/product.interface'
import Meta from '../../ui/Meta'
import Catalog from '../../ui/catalog/Catalog'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<Catalog title='Freshed products' products={products || []} />
		</Meta>
	)
}

export default Home
