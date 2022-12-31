import { useState } from 'react';
import { words } from 'constants/index';

function useHandleEmail() {
	const [email, setEmail] = useState('');
	const [isEmail, setIsEmail] = useState(false);

	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const emailRegex = words.emailRegexValue;
		setEmail(event.target.value);
		if (!emailRegex.test(event.target.value)) {
			setIsEmail(false);
		} else {
			setIsEmail(true);
		}
	};

	return { email, isEmail, handleEmail };
}

export default useHandleEmail;
