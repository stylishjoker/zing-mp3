import '../style/global.css';
import type { AppProps } from 'next/app';
import { store } from '@/app/store';
import { Provider } from 'react-redux';
import { LayoutContainer } from '@/layouts';

export default function MyApp({ Component, pageProps }: AppProps) {
	const AnyComponent = Component as any;
	return (
		<Provider store={store}>
			<LayoutContainer>
				<AnyComponent {...pageProps} />
			</LayoutContainer>
		</Provider>
	);
}
