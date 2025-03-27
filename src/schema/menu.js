import { z } from 'zod'

const LucideIconSchema = z.custom(
	(data) => {
		return typeof data === 'function'
	},
	{
		message: 'Invalid Lucide icon'
	}
)

export const ChildrenMenuItemSchema = z.object({
	title: z.string(),
	label: z.string().optional(),
	icon: LucideIconSchema,
	to: z.string().url()
})

export const MenuItemSchema = z.object({
	title: z.string(),
	label: z.string().optional(),
	icon: LucideIconSchema,
	to: z.string().url(),
	children: z.array(ChildrenMenuItemSchema).optional()
})

export const MenuArraySchema = z.array(MenuItemSchema)
