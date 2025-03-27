import { toast } from 'sonner'

export function setClipboardText({ text, info }) {
	if (!navigator.clipboard) {
		toast.error('Clipboard API not available')
		throw new Error('Clipboard API not available')
	}
	if (!text) {
		toast.error('Text is empty')
		throw new Error('Text is empty')
	}
	navigator.clipboard.writeText(text)
	toast.info(`${info ?? ''} copied to clipboard`)
}
