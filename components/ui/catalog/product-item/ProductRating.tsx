'use client'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { IProduct } from '../../../../types/product.interface'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating, setRating] = useState<number>(
		Math.round(product.reviews.reduce((acc, review) => acc + review.rating, 0))
	)

	return (
		<div>
			<span>
				<Rating
					readonly
					initialValue={rating}
					SVGstyle={{ display: 'inline-block' }}
					size={34}
					allowFraction
					transition
				/>
				<span
					style={{
						color: '#FFBC0D'
					}}
				>
					{rating}
				</span>
			</span>
			<span>{product.reviews.length} reviews</span>
		</div>
	)
}

export default ProductRating
