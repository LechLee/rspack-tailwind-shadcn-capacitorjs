export function themeColorsToCssVariables(colors) {
	const cssVars = colors
		? Object.fromEntries(
				Object.entries(colors).map(([name, value]) => {
					if (value === undefined) return []
					const cssName = themeColorNameToCssVariable(name)
					return [cssName, value]
				})
		  )
		: {}

	for (const key of Array.from({ length: 5 }, (_, index) => index)) {
		cssVars[`--chart-${key + 1}`] = cssVars[`--chart-${key + 1}`] || `${cssVars['--primary']} / ${100 - key * 20}%`
	}

	return cssVars
}

export function themeColorNameToCssVariable(name) {
	return `--${name.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`
}
