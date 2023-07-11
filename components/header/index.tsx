import { FC } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import SearchBar from '../search-bar';

const Header: FC = () => {
	return (
		<div className="flex justify-between w-full items-center">
			<div className="flex gap-6 w-full items-center">
				<div className="flex text-gray-400 gap-4">
					<span>
						<AiOutlineArrowLeft size={24} />
					</span>
					<span>
						<AiOutlineArrowRight size={24} />
					</span>
				</div>
				<div className="w-1/2">
					<SearchBar />
				</div>
			</div>
			<div>login</div>
		</div>
	);
};

export default Header;
