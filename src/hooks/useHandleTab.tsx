import { useState } from 'react';
import { words } from 'constants/index';

function useHandleTab() {
	const [tab, setTab] = useState(words.signUp);
	const handleTab = () => {
		setTab((prev) => (prev === words.signIn ? words.signUp : words.signIn));
	};
	return { tab, handleTab };
}

export default useHandleTab;
