import { v4 as generateUUID } from 'uuid'
import { lazy } from 'react'
import { Navigate } from 'react-router'

const pages = [
	{
		uuid: generateUUID(),
		path: '/table',
		component: lazy(() => import(`./Table`)),
		children: [
			{
				uuid: generateUUID(),
				path: '', // Empty path for the default route under /login
				element: <Navigate to="data-table" replace /> // Redirect to /login/credential
			},
			{
				uuid: generateUUID(),
				path: 'data-table',
				component: lazy(() => import(`./pages/DataTable`))
			},
			{
				uuid: generateUUID(),
				path: 'table-list',
				component: lazy(() => import(`./pages/TableList`))
			}
		]
	}
]

export default pages
