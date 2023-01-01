import axios from 'axios';
import { words } from 'constants/index';

const client = axios.create({
	baseURL: process.env.REACT_APP_DB_PORT,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `${words.BEARER} ${localStorage.getItem(words.SIGNIN)}`,
	},
});

export default client;
