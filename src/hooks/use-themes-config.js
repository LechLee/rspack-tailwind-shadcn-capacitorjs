import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { THEMES } from '@/lib/themes'

const configAtom =
	atomWithStorage <
	ThemesConfig >
	('themes:config',
	{
		activeTheme: THEMES[0]
	})

export function useThemesConfig() {
	const [themesConfig, setThemesConfig] = useAtom(configAtom)

	return { themesConfig, setThemesConfig }
}
