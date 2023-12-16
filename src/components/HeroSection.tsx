import React from "react";
import BESS from "./BESS";
import Image from "next/image";

const HeroSection: React.FC = () => {
	return (
		<section className="flex flex-col justify-evenly border border-yellow-600"
		// style={{
		// 	backgroundImage: "url('/geesisila-website/cover.jpg')",
		// 	backgroundPosition: 'center',
		// 	backgroundSize: 'cover',
		// 	backgroundRepeat: 'no-repeat'
		// }}
		>
			<div className="flex flex-col mt-4 gap-3 self-center items-center text-violet-200 uppercase font-light text-center text-sm lg:text-xl">
				<p className="px-3">The <span className="font-semibold">Building Economics Students' Society &nbsp;</span>of the University of Moratuwa</p>
				<p className="text-violet-300 font-extralight tracking-widest">Proudly presents</p>
			</div>
			<div className="flex self-center items-center lg:mt-4">
				<Image src="/tagline.png" alt="සප්ත ස්වරයේ සම්භාව්‍ය පුනරාගමනය" width={500} height={500} priority={false} />
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-12 bg-black bg-opacity-50">
				<div className="flex justify-center col-span-7 align-middle">
					<Image src="/geesisila.png" alt="Sarasavi Gee Sisila" width={500} height={500} priority={true} />
				</div>
				<div className="flex items-center justify-center col-span-5 p-8">
					<p className="text-lg text-center lg:text-left lg:text-xl lg:mt-4 text-yellow-300">Sarasavi Gee Sisila is the premier classical music experience at the University of Moratuwa</p>
				</div>
			</div>
			<div className="flex flex-col self-center items-center text-center m-6 gap-4 opacity-0 animate-fadeIn">
				<p className="uppercase font-light text-3xl tracking-widest text-violet-300">Coming Soon</p>
				<BESS height={40} />
			</div>
			{/* <div className="flex justify-evenly">
				<button
					className="border py-2 px-4 rounded transition duration-300 ease-in-out border-yellow-500 hover:bg-amber-500 text-yellow-50 hover:text-yellow-950"
					type="button"
				>
					Learn More
				</button>
				<button
					className="border py-2 px-4 rounded transition duration-300 ease-in-out border-yellow-500 hover:bg-amber-500 text-yellow-50 hover:text-yellow-950"
					type="button"
				>
					About BESS
				</button>
				<button
					className="border py-2 px-4 rounded transition duration-300 ease-in-out border-yellow-500 hover:bg-amber-500 text-yellow-50 hover:text-yellow-950"
					type="button"
				>
					Purchase Tickets
				</button>
			</div> */}
		</section>
	);
};

export default HeroSection;
