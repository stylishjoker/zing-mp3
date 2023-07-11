import { FC, useEffect } from 'react';
import Head from 'next/head';
import { Header, SlickSlider } from '@/components';

const Home: FC = () => {
	return (
		<>
			<Head>
				<title>
					Zing MP3 | Nghe tải nhạc chất lượng cao trên desktop, mobile và TV
				</title>
			</Head>
			<div className="overflow-y-auto">
				<div className="h-[70px] bg-red-500 px-[50px] flex items-center w-full">
					<Header />
				</div>
				<SlickSlider />
			</div>
		</>
	);
};
export default Home;
