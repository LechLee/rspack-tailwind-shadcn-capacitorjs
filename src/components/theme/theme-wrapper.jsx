import { useConfig } from '@/hooks/use-config'
import { cn } from '@/lib/utils'

export function ThemeWrapper({ defaultTheme, children, className }) {
	const [config] = useConfig()

	return (
		<div
			className={cn(`theme-${defaultTheme || config.theme}`, 'w-full', className)}
			style={{
				'--radius': `${defaultTheme ? 0.5 : config.radius}rem`
			}}
		>
			{children}
		</div>
	)
}
