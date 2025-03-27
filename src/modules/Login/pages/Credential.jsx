import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'

export default function Component() {
	const navigate = useNavigate() // Hook to programmatically navigate
	const [rememberMe, setRememberMe] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const togglePasswordVisibility = () => setShowPassword(!showPassword)

	const onClickSignIn = () => {
		navigate('/dashboard') // Navigate to /dashboard on click
	}
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
				{/* Sign In Title */}
				<h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>

				{/* Form */}
				<form>
					{/* Username Field */}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
							Username
						</label>
						<div className="relative">
							<input type="text" id="username" readOnly className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" />
							{/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
							</span> */}
						</div>
					</div>

					{/* Password Field */}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
							Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? 'text' : 'password'}
								id="password"
								readOnly
								className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
							/>
							{/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-4-4c0-1.1.9-2 2-2s2 .9 2 2m-6 4h12" />
								</svg>
							</span> */}
							<button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center pr-3">
								<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									{/* {showPassword ? (
					  <path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
					  />
					) : (
					  <path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					  />
					  <path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
					  />
					)} */}
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
									/>
								</svg>
							</button>
						</div>
					</div>

					{/* Remember Me Checkbox */}
					<div className="mb-6 flex items-center">
						<input
							type="checkbox"
							id="rememberMe"
							checked={rememberMe}
							onChange={() => setRememberMe(!rememberMe)}
							className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
						/>
						<label htmlFor="rememberMe" className="ml-2 text-gray-700 text-sm">
							Remember me on this computer
						</label>
					</div>

					{/* Sign In Button */}
					<Button onClick={onClickSignIn} className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition duration-200">
						Sign In
					</Button>
				</form>
			</div>
		</div>
	)
}
