import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHandleEmail, useHandlePassword, useHandleTab } from 'hooks';
import { words, sentence } from 'constants/index';
import authApi from 'apis/auth';
import { SWrapper, SForm } from './HomeStyle';

function Home() {
	const { tab, handleTab } = useHandleTab();
	const { email, isEmail, handleEmail } = useHandleEmail();
	const { password, isPassword, handlePassword } = useHandlePassword();
	const [errorMessege, setErrorMessege] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		const token = localStorage.getItem(words.SIGNIN);
		if (token) {
			navigate('/todo');
		}
	}, [navigate]);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const Body = { email, password };
		const result = await authApi({ Body, tab });

		if (localStorage.getItem(words.SIGNIN)) navigate('/todo');
		if (result === true) {
			setErrorMessege(sentence.AUTH_ERROR_MESSAGE);
		}
	};

	return (
		<SWrapper>
			<h1>{tab}</h1>
			<SForm onSubmit={handleSubmit}>
				<span>{words.EMAIL}</span>
				<input type="email" value={email} onChange={handleEmail} />
				{email.length > 0 && !isEmail && <span>{sentence.isccorectEmail}</span>}
				<span>{words.PASSWORD}</span>
				<input type="password" onChange={handlePassword} />
				{password.length > 0 && !isPassword && <span>{sentence.isccorectPassword}</span>}
				<br />
				<input type="submit" disabled={!(isEmail && isPassword)} />
			</SForm>
			<button type="button" onClick={handleTab}>
				{tab === words.SIGNIN ? words.SIGNUP : words.SIGNIN}
			</button>
			{errorMessege}
		</SWrapper>
	);
}
export default Home;
