import React from 'react'
import { render } from 'react-dom'
import { Router, Link } from '@reach/router'
import SerarchParams from './SerarchParams'
import Detials from './Detials'

const App = () => {
	return (
		<div>
			<header>
				<Link to='/'>Adopt Me!</Link>
			</header>
			<Router>
				<SerarchParams path='/' />
				<Detials path='/details/:id' />
			</Router>
		</div>
	)
}

render(<App />, document.getElementById('root'))
