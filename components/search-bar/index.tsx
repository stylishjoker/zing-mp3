import { FC } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchBar: FC = () => {
	return (
		<div className="w-full center-row">
			<span className="px-4 py-2 alpha-bg rounded-l-[20px] center-col block">
				<BiSearchAlt2 size={24} />
			</span>
			<input
				className="alpha-bg outline-none w-full pr-4 py-2 rounded-r-[20px] h-10 text-gray-500 text-sm"
				type="text"
				placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
			/>
		</div>
	);
};

export default SearchBar;
