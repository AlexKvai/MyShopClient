'use client'
import { useEffect, useState } from 'react'
import Meta from '../../../components/ui/Meta'
import Catalog from '../../../components/ui/catalog/Catalog'
import Layout from '../../../components/ui/layout/Layout'
import { CategoryService } from '../../../services/category.service'
import { ProductService } from '../../../services/product/product.service'
import { ICategory } from '../../../types/category.interface'
import { IProduct } from '../../../types/product.interface'

const CategoryPage = ({ params: { slug } }: { params: { slug: any } }) => {
	const [products, setProducts] = useState<IProduct[]>([])
	const [category, setCategory] = useState<ICategory>()

	useEffect(() => {
		const fetchData = async () => {
			const categorySlug = slug as string

			try {
				const { data: categoryData } =
					await CategoryService.getBySlug(categorySlug)
				setCategory(categoryData)

				const { data: productsData } =
					await ProductService.getByCategory(categorySlug)
				setProducts(productsData)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		if (slug) {
			fetchData()
		}
	}, [slug])

	return (
		<Meta title={category?.name || ''}>
			<Layout>
				<Catalog products={products} title={category?.name || ''} />
			</Layout>
		</Meta>
	)
}

export default CategoryPage
