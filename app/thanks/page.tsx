'use client'
import { NextPage } from 'next'
import Link from 'next/link'
import Heading from '../../components/ui/Heading'
import Meta from '../../components/ui/Meta'
import Layout from '../../components/ui/layout/Layout'

const ThanksPage: NextPage = () => {
	return (
		<Meta title='Thanks'>
			<Layout>
				<Heading>Thanks!</Heading>
				<Link
					href='/my-orders'
					className='flex w-[10rem] rounded-lg px-5 py-2 bg-primary text-white'
				>
					Мои заказы
				</Link>
			</Layout>
		</Meta>
	)
}

export default ThanksPage
