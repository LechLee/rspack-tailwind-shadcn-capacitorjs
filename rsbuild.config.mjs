import path from 'path'
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
	// source: {
	// 	exclude: [
	// 		join(process.cwd(), 'ios'), // Targets './ios' at root
	// 		join(process.cwd(), 'android') // Targets './android' at root
	// 	]
	// },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	plugins: [pluginReact()],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['postcss-loader'],
				type: 'css'
			}
		]
	}
})
