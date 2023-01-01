import { useState } from 'react';
import { words } from 'constants/index';

function useHandlePassword() {
	const [password, setPassword] = useState('');
	const [isPassword, setisPassword] = useState(false);

	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const passwordInput = event.target.value;
		setPassword(passwordInput);
		if (passwordInput.length < words.PASSWORD_REGEX_VALUE) {
			setisPassword(false);
		} else {
			setisPassword(true);
		}
	};
	return { password, isPassword, handlePassword };
}

export default useHandlePassword;
