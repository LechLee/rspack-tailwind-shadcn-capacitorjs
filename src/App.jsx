import React, { Suspense } from 'react'
import { Outlet } from 'react-router'
import './styles/index.css'

function App() {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default App
