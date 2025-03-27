import { v4 as generateUUID } from 'uuid'
import { lazy } from 'react'
import { Navigate } from 'react-router'

const pages = [
	{
		uuid: generateUUID(),
		path: '/forms',
		component: lazy(() => import(`./Forms`)),
		children: [
			{
				uuid: generateUUID(),
				path: '', // Empty path for the default route under /login
				element: <Navigate to="basic-form" replace /> // Redirect to /login/credential
			},
			{
				uuid: generateUUID(),
				path: 'basic-form',
				component: lazy(() => import(`./pages/BasicForm`))
			}
		]
	}
]

export default pages
