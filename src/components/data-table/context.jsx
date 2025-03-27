import * as React from 'react'

export const ProTableContext = React.createContext({
	table: null
})

export function useProTable() {
	return React.useContext(ProTableContext)
}
