import { Toaster as SonnerToaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, MotionConfig, domMax } from 'framer-motion'
import { HotkeysProvider } from 'react-hotkeys-hook'
import { I18nextProvider } from 'react-i18next'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { ThemeWrapper } from '@/components/theme/theme-wrapper'
import { ThemesStyle } from '@/components/theme/themes-styles'
import { i18n } from '@/i18n'
import { queryClient } from '@/lib/query-client'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router'
import './styles/index.css'

// const loadFeatures = () => import('framer-motion').then((res) => res.default)

function App() {
	return (
		// <div>
		// 	<Suspense fallback={<div>Loading...</div>}>
		// 		<Outlet />
		// 	</Suspense>
		// </div>
		// <I18nextProvider i18n={i18n}>
		// 	<LazyMotion features={domMax} strict key="framer">
		// 		<MotionConfig
		// 			transition={{
		// 				type: 'tween',
		// 				duration: 0.15,
		// 				ease: 'easeInOut'
		// 			}}
		// 		>
		// 			<QueryClientProvider client={queryClient}>
		// 				<ThemeWrapper>
		// 					<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
		// 						<TooltipProvider>
		// 							<HotkeysProvider initiallyActiveScopes={['home']}>{children}</HotkeysProvider>
		// 						</TooltipProvider>
		// 						<ThemesStyle />
		// 						<SonnerToaster richColors />
		// 						<Suspense fallback={<div>Loading...</div>}>
		// 							<Outlet />
		// 						</Suspense>
		// 					</ThemeProvider>
		// 				</ThemeWrapper>
		// 			</QueryClientProvider>
		// 		</MotionConfig>
		// 	</LazyMotion>
		// </I18nextProvider>
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</QueryClientProvider>
	)
}

export default App
