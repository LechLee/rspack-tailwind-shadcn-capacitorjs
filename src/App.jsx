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
import { cn } from './lib/utils'

// const loadFeatures = () => import('framer-motion').then((res) => res.default)

const Loading = ({ size = 24, className, ...props }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-100/50 backdrop-blur-sm z-50">
			<div className="flex flex-col items-center gap-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					{...props}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={cn('animate-spin', className)}
				>
					<path d="M21 12a9 9 0 1 1-6.219-8.56" />
				</svg>
				{/* <span className="text-muted-foreground text-lg">Loading...</span> */}
			</div>
		</div>
	)
}
function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<LazyMotion features={domMax} strict key="framer">
				<MotionConfig
					transition={{
						type: 'tween',
						duration: 0.15,
						ease: 'easeInOut'
					}}
				>
					<QueryClientProvider client={queryClient}>
						<ThemeWrapper>
							<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
								<TooltipProvider>
									<HotkeysProvider initiallyActiveScopes={['home']}>
										<Suspense fallback={<Loading />}>
											<Outlet />
										</Suspense>
									</HotkeysProvider>
								</TooltipProvider>
								<ThemesStyle />
								<SonnerToaster richColors />
							</ThemeProvider>
						</ThemeWrapper>
					</QueryClientProvider>
				</MotionConfig>
			</LazyMotion>
		</I18nextProvider>
	)
}

export default App
