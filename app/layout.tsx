'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import '../assets/styles/globals.css'
import AuthProvider from '../providers/auth-provider/AuthProvider'
import { TypeRoles } from '../providers/auth-provider/auth-page.types'
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
	children,
	Component
}: {
	children: ReactNode
	Component: TypeRoles
}) {
	return (
		<html lang='en'>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<AuthProvider Component={{ isOnlyUser: Component?.isOnlyUser }}>
							<body className={inter.className}>{children}</body>
						</AuthProvider>
					</PersistGate>
				</Provider>
			</QueryClientProvider>
		</html>
	)
}
