import * as React from 'react'

export function Empty(props) {
	return <div>{props.description || 'No results'}</div>
}
