interface Items {
	items: [];
}

export interface homeActionProps {
	err: number;
	data: Items;
}
export interface bannerProps {
	sectionType: string;
	items: [];
}
export interface itemBannerProps {
	banner: string;
	cover: string;
	link: string;
}
