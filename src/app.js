import React from 'react'
import { render } from 'react-dom'
import SerarchParams from './SerarchParams'

const App = () => {
	return (
		<div>
			<h1 id='something-important'>Adopt Me!</h1>
			<SerarchParams />
		</div>
	)
}

render(<App />, document.getElementById('root'))
