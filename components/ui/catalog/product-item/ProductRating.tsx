'use client'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'
import { ReviewService } from '../../../../services/review.service'
import { IProduct } from '../../../../types/product.interface'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const { data: rating } = useQuery({
		queryKey: ['get product rating'],
		queryFn: () => ReviewService.getAverageByProduct(product.id),
		select: ({ data }) => data
	})

	return (
		<div>
			<Rating
				readonly
				initialValue={rating}
				SVGstyle={{ display: 'inline-block' }}
				size={34}
				allowFraction
				transition
			/>

			<span>{product.reviews.length} reviews</span>
		</div>
	)
}

export default ProductRating
