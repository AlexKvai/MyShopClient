'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import '../assets/styles/globals.css'
import { persistor, store } from '../store/store'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<body className={inter.className}>{children}</body>
					</PersistGate>
				</Provider>
			</QueryClientProvider>
		</html>
	)
}
