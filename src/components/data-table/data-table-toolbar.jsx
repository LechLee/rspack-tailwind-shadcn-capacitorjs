import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { RefreshCcw } from 'lucide-react'
import * as React from 'react'

import { DataTableViewOptions } from './data-table-view-options'

export function DataTableToolbar({ table, onRefresh, isLoading, toolbar }) {
	const handleRefresh = async () => {
		if (!onRefresh || isLoading) return
		onRefresh()
	}

	return (
		<div className="flex items-center justify-between py-4">
			<div className="flex flex-1 items-center space-x-2">{toolbar}</div>
			<div className="flex items-center space-x-2">
				<DataTableViewOptions table={table} />
				<Button variant="outline" size="sm" onClick={handleRefresh} disabled={isLoading} className="size-8 p-0">
					<RefreshCcw className={cn('size-4', isLoading && 'animate-spin')} />
				</Button>
			</div>
		</div>
	)
}
