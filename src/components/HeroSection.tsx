import React from "react";

const HeroSection: React.FC = () => {
	return (
		<section className="h-full">
			<div className="flex flex-col justify-center text-center">
				<h2 className="text-slate-100 text-2xl">BESS Presents</h2>
				<h1 className="text-slate-100 text-4xl lg:text-6xl font-extr m-8">
					Sarasavi Gee Sisila 2024
				</h1>
				<p className="text-slate-300 text-lg lg:text-xl mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<div className="flex justify-evenly">
					<button
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						type="button"
					>
						Get Started
					</button>
					<button
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						type="button"
					>
						Get Started
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
