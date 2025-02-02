import { FC } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import { TypePaginationProducts } from '../../../types/product.interface'
import Meta from '../../ui/Meta'
import CatalogPagination from '../../ui/catalog/CatalogPagination'
import Layout from '../../ui/layout/Layout'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()
	return (
		<Meta title='Home'>
			<Layout>
				<CatalogPagination
					title='Freshed products'
					data={{ products, length }}
				/>
			</Layout>
		</Meta>
	)
}

export default Home
