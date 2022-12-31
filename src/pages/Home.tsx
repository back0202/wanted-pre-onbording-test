import React from 'react';
import { useHandleEmail, useHandlePassword, useHandleTab } from 'hooks';
import { words, sentence } from 'constants/index';
import { SWrapper, SForm } from 'pages/HomeStyle';

function Home() {
	const { tab, handleTab } = useHandleTab();
	const { email, isEmail, handleEmail } = useHandleEmail();
	const { password, isPassword, handlePassword } = useHandlePassword();
	return (
		<SWrapper>
			<h1>{tab}</h1>
			<SForm>
				<span>{words.email}</span>
				<input type="email" value={email} onChange={handleEmail} />
				{email.length > 0 && !isEmail && <span>{sentence.isccorectEmail}</span>}
				<span>{words.password}</span>
				<input type="password" onChange={handlePassword} />
				{password.length > 0 && !isPassword && <span>{sentence.isccorectPassword}</span>}
				<br />
				<input type="submit" disabled={!(isEmail && isPassword)} />
			</SForm>
			<button type="button" onClick={handleTab}>
				{tab === words.signIn ? words.signUp : words.signIn}
			</button>
		</SWrapper>
	);
}
export default Home;
