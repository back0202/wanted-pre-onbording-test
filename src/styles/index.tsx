import React, { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import Reset from './Reset';

function Styles({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider theme={theme}>
			<Reset />

			{children}
		</ThemeProvider>
	);
}

export default Styles;
