import { z } from 'zod'

export const userProfileSchema = z.object({
	userId: z.string(),
	avatar: z.string(),
	password: z.string(),
	birthdate: z.date(),
	registeredAt: z.date(),
	username: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters.'
		})
		.max(30, {
			message: 'Username must not be longer than 30 characters.'
		})
		.default(''),
	email: z
		.string({
			required_error: 'Please select an email to display.'
		})
		.email()
		.default(''),
	bio: z.string().max(160).min(4).default(''),
	urls: z
		.array(
			z.object({
				value: z.string().url({ message: 'Please enter a valid URL.' })
			})
		)
		.optional()
		.default([])
})
export const userStatuses = ['active', 'inactive', 'busy']

export const userRoles = ['admin', 'user', 'guest', 'member']

export const userSchema = z.object({
	id: z.string(),
	amount: z.string(),
	status: z.enum(userStatuses),
	email: z.string().email(),
	name: z.string(),
	avatar: z.string(),
	createdAt: z.string(),
	role: z.enum(userRoles),
	bio: z.string()
})

export const loginFormSchema = z.object({
	email: z
		.string()
		.min(1, {
			message: 'Email is required'
		})
		.email(),
	password: z.string().min(1, {
		message: 'Password is required'
	})
})

export const userStatus = ['active', 'inactive', 'pending']
