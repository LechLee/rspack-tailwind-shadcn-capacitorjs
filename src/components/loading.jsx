import { cn } from '@/lib/utils'

import { Icons } from './icons'

export function Loading({ className, ...props }) {
	return (
		<div className={cn('flex items-center justify-center text-sm text-muted-foreground', className)} {...props}>
			<div className="flex items-center justify-center">
				<Icons.spinner className="mr-2 size-4 animate-spin" />
				<span>Loading...</span>
			</div>
		</div>
	)
}
