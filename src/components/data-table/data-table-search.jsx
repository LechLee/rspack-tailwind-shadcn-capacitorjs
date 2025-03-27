import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ChevronDown, ChevronUp } from 'lucide-react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

function getSearchPlaceholder(search, columnName) {
	if (typeof search === 'object' && !React.isValidElement(search)) {
		return search.placeholder ?? `Search ${columnName}`
	}
	return `Search ${columnName}`
}

const createSearchSchema = (columns) => {
	const shape = columns.reduce((acc, column) => {
		acc[column] = z.string().optional().unwrap()
		return acc
	}, {})
	return z.object(shape)
}

export function DataTableSearch({ table, searchValues, onSubmit }) {
	const [expanded, setExpanded] = React.useState(false)
	const [searchSchema] = React.useState(() =>
		createSearchSchema(
			table
				.getAllColumns()
				.filter((column) => column.columnDef.search)
				.map((col) => col.id)
		)
	)

	const form = useForm({
		resolver: zodResolver(searchSchema),
		defaultValues: searchValues,
		values:
			searchValues &&
			Object.keys(searchSchema.shape).reduce((acc, key) => {
				acc[key] = searchValues[key] || ''
				return acc
			}, {})
	})

	const searchableColumns = table.getAllColumns().filter((column) => {
		return column.columnDef.search
	})

	const visibleColumns = expanded ? searchableColumns : searchableColumns.slice(0, 3)

	if (searchableColumns.length === 0) {
		return null
	}

	const handleSubmit = (value) => {
		onSubmit?.(value)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)}>
				<div className="rounded-md border">
					<div className="p-3">
						<div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							{visibleColumns.map((column) => {
								const columnDef = column.columnDef
								const columnName = String(columnDef.header || column.id)

								return (
									<div key={column.id} className="flex items-center gap-1.5">
										<span className="w-20 shrink-0 text-sm font-medium text-muted-foreground">{columnName}</span>
										<FormField
											control={form.control}
											name={column.id}
											render={({ field }) => (
												<FormItem className="flex-1 space-y-0">
													<FormControl>
														{typeof columnDef.search === 'object' && columnDef?.search?.render ? (
															columnDef?.search.render({
																value: field.value || '',
																onChange: field.onChange,
																placeholder: getSearchPlaceholder(columnDef.search, columnName)
															})
														) : (
															<Input {...field} value={field.value || ''} placeholder={getSearchPlaceholder(columnDef.search, columnName)} className="h-8" />
														)}
													</FormControl>
												</FormItem>
											)}
										/>
									</div>
								)
							})}
						</div>

						<div className="flex items-center justify-end gap-2">
							{searchableColumns.length > 3 && (
								<Button type="button" variant="ghost" size="sm" className="px-2" onClick={() => setExpanded(!expanded)}>
									{expanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
									<span className="ml-1">{expanded ? 'Less' : 'More'}</span>
								</Button>
							)}
							<Button
								type="button"
								size="sm"
								variant="secondary"
								onClick={() => {
									form.reset()
									form.handleSubmit(handleSubmit)()
								}}
							>
								Reset
							</Button>
							<Button type="submit" size="sm" variant="secondary">
								Search
							</Button>
						</div>
					</div>
				</div>
			</form>
		</Form>
	)
}
