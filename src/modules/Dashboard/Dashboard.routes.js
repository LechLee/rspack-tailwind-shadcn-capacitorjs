import { v4 as generateUUID } from 'uuid'
import { lazy } from 'react'
import { Navigate } from 'react-router'

const pages = [
	{
		uuid: generateUUID(),
		path: '/dashboard',
		component: lazy(() => import(`./Dashboard`)),
		children: [
			{
				uuid: generateUUID(),
				path: '', // Empty path for the default route under /login
				element: <Navigate to="overview" replace /> // Redirect to /login/credential
			},
			{
				uuid: generateUUID(),
				path: 'overview',
				component: lazy(() => import(`./pages/Landing`))
			}
		]
	}
]

export default pages
