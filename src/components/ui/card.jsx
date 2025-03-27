import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }) {
	return <div data-slot="card" className={cn('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className)} {...props} />
}

function CardHeader({ className, ...props }) {
	return (
		<div
			data-slot="card-header"
			className={cn('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className)}
			{...props}
		/>
	)
}

function CardTitle({ className, ...props }) {
	return <div data-slot="card-title" className={cn('leading-none font-semibold', className)} {...props} />
}

function CardDescription({ className, ...props }) {
	return <div data-slot="card-description" className={cn('text-muted-foreground text-sm', className)} {...props} />
}

function CardAction({ className, ...props }) {
	return <div data-slot="card-action" className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)} {...props} />
}

function CardContent({ className, ...props }) {
	return <div data-slot="card-content" className={cn('px-6', className)} {...props} />
}

function CardFooter({ className, ...props }) {
	return <div data-slot="card-footer" className={cn('flex items-center px-6 [.border-t]:pt-6', className)} {...props} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
;('use client')

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Checkbox({ className, ...props }) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="flex items-center justify-center text-current transition-none">
				<CheckIcon className="size-3.5" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	)
}

export { Checkbox }
