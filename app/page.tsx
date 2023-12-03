'use client'
import { useEffect, useState } from 'react'
import Home from '../components/screens/home/Home'
import { ProductService } from '../services/product/product.service'
import { TypePaginationProducts } from '../types/product.interface'

const HomePage: React.FC<TypePaginationProducts> = () => {
	const [data, setData] = useState<TypePaginationProducts>({
		products: [],
		length: 0
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await ProductService.getAll({
					page: 1,
					perPage: 4
				})
				setData(data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	return <Home products={data.products} length={data.length} />
}

export default HomePage
