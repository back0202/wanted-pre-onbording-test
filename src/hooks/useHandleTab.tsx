import { useState } from 'react';
import { words } from 'constants/index';

function useHandleTab() {
	const [tab, setTab] = useState(words.SIGNIN);
	const handleTab = () => {
		setTab((prev) => (prev === words.SIGNIN ? words.SIGNUP : words.SIGNIN));
	};
	return { tab, handleTab };
}

export default useHandleTab;
