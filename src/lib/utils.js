import { clsx } from 'clsx'
import { memoize } from 'lodash-es'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
	return twMerge(clsx(inputs))
}

export const getOS = memoize(() => {
	const { userAgent } = window.navigator
	const { platform } = window.navigator
	const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
	const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
	const iosPlatforms = ['iPhone', 'iPad', 'iPod']
	let os = ''

	if (macosPlatforms.includes(platform)) {
		os = 'macOS'
	} else if (iosPlatforms.includes(platform)) {
		os = 'iOS'
	} else if (windowsPlatforms.includes(platform)) {
		os = 'Windows'
	} else if (/Android/.test(userAgent)) {
		os = 'Android'
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux'
	}

	return os
})

export function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
export function getRedirectToLoginUrl() {
	const requestUrl = new URL(window.location.href)

	const loginParams = new URLSearchParams(requestUrl.search)
	if (!loginParams.has('redirectTo')) {
		loginParams.append('redirectTo', requestUrl.pathname)
	}
	return `/login?${loginParams.toString()}`
}
