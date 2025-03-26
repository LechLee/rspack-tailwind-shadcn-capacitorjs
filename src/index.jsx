import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import loginRoutes from './modules/Login/Login.routes'
import dashboardRoutes from './modules/Dashboard/Dashboard.routes'
import App from './App'

const allRoutes = [...dashboardRoutes, ...loginRoutes].map((route) => ({
	path: route.path,
	element: <route.component />,
	children: (() => {
		if (!route.children) {
			return undefined
		}
		return route.children.map((child) => ({
			path: child.path,
			element: child.element || <child.component />,
			index: child.index || undefined
		}))
	})()
}))

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Navigate to="/login" replace />
			},
			...allRoutes
		]
	}
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
