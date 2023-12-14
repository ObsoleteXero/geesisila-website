import React from "react";
import BESS from "./BESS";

const HeroSection: React.FC = () => {
	return (
		<section className="flex flex-col justify-evenly min-h-full shadow-purple-600 shadow"
			style={{
				backgroundImage: "url('cover.jpg')",
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat'
			}}>
			<div className="flex gap-6 self-center items-center">
				<BESS height={40} />
				<span className="text-3xl uppercase font-extralight text-violet-300">
					Presents
				</span>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-12 m-8 lg:mt-14">
				<p className="text-lg lg:ml-28 lg:text-xl lg:mt-4 col-span-5 text-violet-200 align-middle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores omnis autem sit deleniti quis dolorem libero. Commodi vero enim quia porro quod repudiandae minus beatae ipsum culpa, id, quis aspernatur!</p>
				{/* <div className="col-span-7 align-middle">
					<h1 className="text-5xl font-extrabold text-yellow-600 mt-2 mb-8 lg:mx-4">Sarasavi Gee Sisila</h1>
				</div> */}
			</div>
			<div className="flex self-center uppercase font-light text-3xl tracking-widest text-violet-300 m-2 mb-8">Coming Soon</div>
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
