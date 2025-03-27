import { TableCell, TableRow } from '@/components/ui/table'

export function DataTableSkeleton({ pagination, columns = 10 }) {
	return (
		<>
			{Array.from({ length: pagination?.pageSize ?? 10 }).map((_, rowIndex) => (
				<TableRow key={`skeleton-row-${rowIndex}`}>
					{Array.from({ length: columns }).map((_, colIndex) => (
						<TableCell key={`skeleton-cell-${rowIndex}-${colIndex}`}>
							<div className="h-4 w-full animate-pulse rounded-md bg-muted" />
						</TableCell>
					))}
				</TableRow>
			))}
		</>
	)
}
