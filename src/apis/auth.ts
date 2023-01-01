import client from 'apis';
import { words } from 'constants/index';

interface Auth {
	Body: { email: string; password: string };
	tab: string;
}
type Token = {
	access_token: string;
};

const getToken = async ({ Body, tab }: Auth) => {
	const result = await client.post<Token>(`${words.auth}${tab}`, Body);
	return result;
};
const authApi = async ({ Body, tab }: Auth) => {
	let error = false;
	try {
		const token = await getToken({ Body, tab });

		localStorage.clear();
		localStorage.setItem(words.SIGNIN, token.data.access_token);
	} catch (e) {
		error = true;
	}

	return error;
};

export default authApi;
