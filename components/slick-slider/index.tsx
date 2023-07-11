import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/app/store';
import { RootState } from '@/app/store';
import * as actions from '../../feature/actions';
import { itemBannerProps } from '@/types';
import Image from 'next/image';
import { getArrSlider } from '@/utils/fn';

const SlickSlider: FC = () => {
	const dispacth = useDispatch<AppDispatch>();
	const banner = useSelector((state: RootState) => state.appSlice.banner);
	useEffect(() => {
		dispacth(actions.getHomeAtions());
		const sliderEls = document.getElementsByClassName(
			'slider-item'
		) as HTMLCollectionOf<HTMLElement>;
		let min = 0;
		let max = 2;
		const intervalId = setInterval(() => {
			const list = getArrSlider(min, max, sliderEls.length - 1);
			for (let i = 0; i < sliderEls.length; i++) {
				// Delete classnames (css)
				sliderEls[i]?.classList?.remove(
					'animate-slide-right',
					'order-last',
					'z-20'
				);
				sliderEls[i]?.classList?.remove(
					'animate-slide-left',
					'order-first',
					'z-10'
				);
				sliderEls[i]?.classList?.remove(
					'animate-slide-left2',
					'order-2',
					'z-10'
				);

				// Hide or Show images
				if (list.some((item) => item === i)) {
					sliderEls[i].style.cssText = `display: block`;
				} else {
					sliderEls[i].style.cssText = `display: none`;
				}
			}
			// Add animation by adding classnames
			list.forEach((item) => {
				if (item === max) {
					sliderEls[item]?.classList?.add(
						'animate-slide-right',
						'order-last',
						'z-20'
					);
				} else if (item === min) {
					sliderEls[item]?.classList?.add(
						'animate-slide-left',
						'order-first',
						'z-10'
					);
				} else {
					sliderEls[item]?.classList?.add(
						'animate-slide-left2',
						'order-2',
						'z-10'
					);
				}
			});
			min = min === sliderEls.length - 1 ? 0 : min + 1;
			max = max === sliderEls.length - 1 ? 0 : max + 1;
		}, 3000);
		return () => {
			intervalId && clearInterval(intervalId);
		};
	}, []);

	return (
		<div className="flex gap-4 w-full overflow-hidden px-[59px] pt-8">
			{banner?.map((item: itemBannerProps, index) => (
				<Image
					key={index}
					className="slider-item flex-1 object-contain w-1/3 rounded-lg"
					src={item.banner}
					width={400}
					height={400}
					priority={true}
					alt=""
				/>
			))}
		</div>
	);
};

export default SlickSlider;
