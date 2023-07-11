/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./layouts/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				sm: '640px',
				// => @media (min-width: 640px) { ... }

				md: '768px',
				// => @media (min-width: 768px) { ... }

				lg: '992px',
				// => @media (min-width: 1024px) { ... }

				xl: '1200px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			},
		},
		keyframes: {
			'slide-right': {
				'0%': {
					'-webkit-transform': ' translateX(-500px);',
					transform: 'translateX(-500px);',
				},
				'100%': {
					'-webkit-transform': 'translateX(0);',
					transform: 'translateX(0);',
				},
			},
			'slide-left': {
				'0%': {
					'-webkit-transform': ' translateX(500px);',
					transform: 'translateX(500px);',
				},
				'100%': {
					'-webkit-transform': 'translateX(0);',
					transform: 'translateX(0);',
				},
			},
			'slide-left2': {
				'0%': {
					'-webkit-transform': ' translateX(500px);',
					transform: 'translateX(500px);',
				},
				'100%': {
					'-webkit-transform': 'translateX(0);',
					transform: 'translateX(0);',
				},
			},
		},
		animation: {
			'slide-right':
				'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
			'slide-left':
				'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
			'slide-left2':
				'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
		},
	},
	plugins: [],
};
