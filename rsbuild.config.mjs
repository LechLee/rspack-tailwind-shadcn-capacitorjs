import path from 'path'
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const packageJson = require('./package.json')

export default defineConfig({
	// source: {
	// 	exclude: [
	// 		join(process.cwd(), 'ios'), // Targets './ios' at root
	// 		join(process.cwd(), 'android') // Targets './android' at root
	// 	]
	// },
	output: {
		assetPrefix: `/${packageJson.name}/`, // e.g., '/my-rsbuild-project/'
		distPath: {
			root: 'dist' // Default, no need to change unless desired
		}
	},
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
	},
	html: {
		meta: {
			viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover'
		}
	}
})
