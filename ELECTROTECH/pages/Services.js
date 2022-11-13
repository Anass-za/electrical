import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import { Element } from "react-scroll";

function Projects() {
	return (
		<Element id="services" name="services">
			<div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
				<p className="text-sm uppercase text-gray-400">Services </p>
				<h1 className="text-indigo-900 text-6xl font-bold text-center">
					My Expertise
				</h1>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								TELECOMMUNICATION 
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Reseaux Informatique ,
						    Camerra de Survaillance ,
							Controlle  A Distance ...
						</p>
					</div>

				   	{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<HiColorSwatch className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								SYSTEMES EMBARQUER
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
							Domotique ,Intelligence Artificiel, 
							connection Sans Fils ...
						</p>
					</div>
				</div>

				{/* second grid */}
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<AiOutlineBlock className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold ">
								SYSTEMS ELECTRIQUE 
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Reseaux Domestique,
							System Solaire
							System de Pompage...
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<MdDeveloperBoard className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
							 DEVELOPEMENT WEB ET MOBILE .
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Application WEB,Mobile ;
							Android , 
							.
						</p>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Projects;
