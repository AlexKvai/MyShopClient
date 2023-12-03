import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { ProductService } from '../../../services/product/product.service'
import { EnumProductSort } from '../../../services/product/product.types'
import { TypePaginationProducts } from '../../../types/product.interface'
import Heading from '../Heading'
import Loader from '../Loader'
import Button from '../button/Button'
import ProductItem from './product-item/ProductItem'
import SortDropdown from './product-item/SortDropdown'

interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState(1)

	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const { data: response, isLoading } = useQuery({
		queryKey: ['products', sortType, page],
		queryFn: () =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType
			}),
		initialData: data,
		placeholderData: keepPreviousData
	})

	if (isLoading) return <Loader />

	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			{response.products?.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{response.products?.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='text-center mt-16'>
						<Button
							size='sm'
							variant='orange'
							onClick={() => setPage(page + 1)}
						>
							Load more
						</Button>
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
