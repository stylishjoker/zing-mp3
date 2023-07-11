import { FC } from 'react';
import { Zingmp3Icon } from '@/assets';
import { sidebarMenu } from '@/utils/menu';
import Link from 'next/link';
import { useRouter } from 'next/router';

const isActive = 'border-red-900';
const notActive = 'border-transparent';

const SidebarLeft: FC = () => {
	const router = useRouter();

	return (
		<div className="bg-red-200 flex flex-col">
			<div className="w-full h-[70px] py-[15px] px-[25px]">
				<Zingmp3Icon />
			</div>
			<ul>
				{sidebarMenu.map((item, index) => (
					<li
						key={index}
						className={`border-l-[3px] py-2 px-[25px] ${
							router.pathname === item.path ? isActive : notActive
						}`}
					>
						<Link href={item.path} className="flex items-center text-sm">
							<item.icon className="w-7 h-7 mr-2" />
							<span>{item.text}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
export default SidebarLeft;
