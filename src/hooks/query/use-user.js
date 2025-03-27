import { keepPreviousData, queryOptions, useMutation, useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

import { apiFetch } from '@/lib/api-fetch'

export const queryUser = () =>
	queryOptions({
		queryKey: ['userInfo'],
		queryFn: async () => apiFetch < IUserProfile > '/api/users'
	})

export const queryUserInfo = () =>
	queryOptions({
		queryKey: ['user-info'],
		queryFn: async () =>
			apiFetch <
			{
				data: IUserProfile
			} >
			`/api/users/info`
	})

export function useUser() {
	return useSuspenseQuery(queryUserInfo())
}

export function useUserLoginMutation() {
	return useMutation({
		mutationFn: async (loginForm) =>
			await apiFetch('/api/auth/login', {
				method: 'POST',
				body: loginForm
			}),
		mutationKey: ['user-login']
	})
}

export function useUserLogoutMutation() {
	const navigate = useNavigate()
	return useMutation({
		mutationFn: async () => await apiFetch('/api/logout'),
		mutationKey: ['user-logout'],
		onSuccess: () => {
			localStorage.clear()
			navigate('/login')
		}
	})
}

export function useUsers(pagination, searchParams) {
	const { pageIndex = 1, pageSize = 10 } = pagination || {}
	const { data, isPending, isFetching, refetch } = useQuery({
		queryKey: ['users', pageIndex, pageSize, ...Object.entries(searchParams || {})],
		queryFn: async () =>
			// apiFetch('/api/users', {
			// 	params: {
			// 		page: pageIndex,
			// 		pageSize,
			// 		...searchParams
			// 	}
			// }),
			{
				return {
					list: [
						{
							id: '1',
							amount: '100.00',
							status: 'active', // Replace with a valid value from userStatuses
							email: 'user@example.com',
							name: 'John Doe',
							avatar: 'JD',
							createdAt: '2023-01-01T00:00:00Z',
							role: 'admin', // Replace with a valid value from userRoles
							bio: 'This is a sample bio for John Doe.'
						},
						{
							id: '2',
							amount: '200.00',
							status: 'inactive',
							email: 'user2@example.com',
							name: 'Jane Smith',
							avatar: 'JS',
							createdAt: '2023-02-01T00:00:00Z',
							role: 'user',
							bio: 'This is a sample bio for Jane Smith.'
						},
						{
							id: '3',
							amount: '300.00',
							status: 'active',
							email: 'user3@example.com',
							name: 'Alice Johnson',
							avatar: 'AJ',
							createdAt: '2023-03-01T00:00:00Z',
							role: 'editor',
							bio: 'This is a sample bio for Alice Johnson.'
						},
						{
							id: '4',
							amount: '400.00',
							status: 'inactive',
							email: 'user4@example.com',
							name: 'Bob Brown',
							avatar: 'BB',
							createdAt: '2023-04-01T00:00:00Z',
							role: 'admin',
							bio: 'This is a sample bio for Bob Brown.'
						},
						{
							id: '5',
							amount: '500.00',
							status: 'active',
							email: 'user5@example.com',
							name: 'Charlie Davis',
							avatar: 'CD',
							createdAt: '2023-05-01T00:00:00Z',
							role: 'user',
							bio: 'This is a sample bio for Charlie Davis.'
						},
						{
							id: '6',
							amount: '600.00',
							status: 'inactive',
							email: 'user6@example.com',
							name: 'Diana Evans',
							avatar: 'DE',
							createdAt: '2023-06-01T00:00:00Z',
							role: 'editor',
							bio: 'This is a sample bio for Diana Evans.'
						},
						{
							id: '7',
							amount: '700.00',
							status: 'active',
							email: 'user7@example.com',
							name: 'Ethan Foster',
							avatar: 'EF',
							createdAt: '2023-07-01T00:00:00Z',
							role: 'admin',
							bio: 'This is a sample bio for Ethan Foster.'
						},
						{
							id: '8',
							amount: '800.00',
							status: 'inactive',
							email: 'user8@example.com',
							name: 'Fiona Green',
							avatar: 'FG',
							createdAt: '2023-08-01T00:00:00Z',
							role: 'user',
							bio: 'This is a sample bio for Fiona Green.'
						},
						{
							id: '9',
							amount: '900.00',
							status: 'active',
							email: 'user9@example.com',
							name: 'George Harris',
							avatar: 'GH',
							createdAt: '2023-09-01T00:00:00Z',
							role: 'editor',
							bio: 'This is a sample bio for George Harris.'
						},
						{
							id: '10',
							amount: '1000.00',
							status: 'inactive',
							email: 'user10@example.com',
							name: 'Hannah Irving',
							avatar: 'HI',
							createdAt: '2023-10-01T00:00:00Z',
							role: 'admin',
							bio: 'This is a sample bio for Hannah Irving.'
						},
						{
							id: '11',
							amount: '1100.00',
							status: 'active',
							email: 'user11@example.com',
							name: 'Ian Jackson',
							avatar: 'IJ',
							createdAt: '2023-11-01T00:00:00Z',
							role: 'user',
							bio: 'This is a sample bio for Ian Jackson.'
						}
					],
					total: 11,
					page: 1,
					pageSize: 10
				}
			},
		placeholderData: keepPreviousData
	})

	return {
		isPending,
		isLoading: isFetching,
		refetch,
		data: {
			list: data?.list || [],
			total: data?.total || 0,
			page: data?.page || 0,
			pageSize: data?.pageSize || 0
		}
	}
}

export function useUpdateUser() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (user) =>
			await apiFetch(`/api/${user.id}`, {
				method: 'PUT',
				body: user
			}),
		onSuccess: () => {
			// 更新用户列表缓存
			queryClient.invalidateQueries({ queryKey: ['users'] })
		}
	})
}
