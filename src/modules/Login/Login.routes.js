import { v4 as generateUUID } from 'uuid'
import { lazy } from 'react'
import { Navigate } from 'react-router'

const pages = [
	{
		uuid: generateUUID(),
		path: '/login',
		component: lazy(() =>
			import(
				/* webpackChunkName: "LoginModule.page" */
				/* webpackMode: "lazy" */
				`./Login.module`
			)
		),
		children: [
			{
				uuid: generateUUID(),
				path: '', // Empty path for the default route under /login
				element: <Navigate to="credential" replace /> // Redirect to /login/credential
			},
			{
				uuid: generateUUID(),
				path: 'credential',
				component: lazy(() =>
					import(
						/* webpackChunkName: "Credential.page" */
						/* webpackMode: "lazy" */
						`./pages/Credential`
					)
				)
			}
		]
	}
]

export default pages
