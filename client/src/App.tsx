import { useState } from 'react';

import './App.css';
import handleRequest from './functions/handleRequest.js';

function App() {

	const [comment, setComment] = useState('');
	handleRequest('get', '/api').then((result) => {
		setComment(result);
	});

	return (
		<div>Hello World {comment}</div>
	);
}

export default App;
