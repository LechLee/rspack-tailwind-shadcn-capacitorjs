import { cn } from '@/lib/utils'

export function DataTableColumnCell({ column, row, className, render }) {
	if (render) {
		return <div className={cn(className)}>{render(row.getValue(column.id))}</div>
	}
	return <div className={cn(className)}>{row.getValue(column.id)}</div>
}
