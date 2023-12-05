'use client'
import { useQuery } from '@tanstack/react-query'
import Heading from '../../components/ui/Heading'
import Meta from '../../components/ui/Meta'
import Layout from '../../components/ui/layout/Layout'
import { NextPageAuth } from '../../providers/auth-provider/auth-page.types'
import { OrderService } from '../../services/order.service'
import { IOrder } from '../../types/order.interface'
import { convertPrice } from '../../utils/convertPrice'

const MyOrdersPage: NextPageAuth = () => {
	const { data: orders } = useQuery({
		queryKey: ['my orders'],
		queryFn: () => OrderService.getAll(),
		select: ({ data }: { data: any }) => data
	})

	return (
		<Meta title='My Orders'>
			<Layout>
				<Heading>My Orders</Heading>

				<section>
					{orders?.length ? (
						orders.map((order: IOrder) => (
							<div
								key={order.id}
								className='bg-white shadow flex gap-10 p-7 my-7 rounded-lg'
							>
								<span>#{order.id}</span>
								<span>{order.status}</span>
								<span>{order.status}</span>
								<span>
									{new Date(order.createdAt).toLocaleDateString('ru-Ru')}
								</span>
								<span>{convertPrice(order.total)}</span>
							</div>
						))
					) : (
						<div>Order not found!</div>
					)}
				</section>
			</Layout>
		</Meta>
	)
}

MyOrdersPage.isOnlyUser = true

export default MyOrdersPage
