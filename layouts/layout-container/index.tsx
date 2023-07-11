import { FC, ReactNode } from 'react';
import { SidebarLeft, SidebarRight } from '@/components';

interface Props {
	children: ReactNode;
}

const LayoutContainer: FC<Props> = ({ children }) => {
	return (
		<div className="w-full flex">
			<div className="w-[240px] flex-none">
				<SidebarLeft />
			</div>
			<div className="flex-auto">{children}</div>
			<div className="w-[329px] flex-none">
				<SidebarRight />
			</div>
		</div>
	);
};
export default LayoutContainer;
