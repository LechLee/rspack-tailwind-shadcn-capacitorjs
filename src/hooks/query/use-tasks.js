import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { apiFetch } from '@/lib/api-fetch'
import { statuses, priorities } from '@/lib/data-dictionary'

export function useTasks(pagination, searchParams) {
	const { pageIndex = 0, pageSize = 10 } = pagination || {}
	const { data, isPending, isFetching, refetch } = useQuery({
		queryKey: ['use-tasks', pageIndex, pageSize, ...Object.entries(searchParams || {})],
		queryFn: () =>
			// apiFetch('/api/tasks', {
			// 	params: {
			// 		page: pageIndex,
			// 		pageSize,
			// 		...searchParams
			// 	}
			// }),
			{
				return {
					list: Array.from({ length: pageSize }, (_, index) => ({
						id: `task-${pageIndex * pageSize + index + 1}`,
						title: `Task ${pageIndex * pageSize + index + 1}`,
						status: statuses[Math.floor(Math.random() * statuses.length)].value,
						label: 'general',
						priority: priorities[Math.floor(Math.random() * priorities.length)].value
					})),
					total: 100
					// page: pageIndex,
					// pageSize
				}
			},
		placeholderData: keepPreviousData
	})

	return {
		isPending,
		isFetching,
		refetch,
		data: {
			list: data?.list || [],
			total: data?.total || 0,
			page: data?.page || 0,
			pageSize: data?.pageSize || 0
		}
	}
}
