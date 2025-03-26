import React from 'react'
import { Outlet } from 'react-router'

export default function LoginModule() {
	return (
		<div>
			{/* <h1>Login Module</h1> */}
			{/* Child routes (like Credential) will render here */}
			<Outlet />
		</div>
	)
}
