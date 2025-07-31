import { motion } from "framer-motion"; // Import correto para framer-motion

import slider2 from "../assets/Imagem1 (1).jpg"; // Sua imagem principal
import imgMobile from "../assets/imgMobile.jpg"

export default function Slider() { // Renomeado para refletir que não é um slider
	return (
		<section
			id="inicio"
			className="relative h-[75vh] mt-20 sm:h-[70vh] md:h-[70vh] lg:h-[calc(100vh-80px)] w-screen z-10 flex items-center justify-center bg-neutral-900 overflow-hidden"
		>
			<div className="relative w-full h-full"> {/* Container da imagem para controle de layout */}
				<img
					src={slider2.src}
					alt="Imagem de Fundo Principal" // Alt text mais descritivo
					width={1920}
					height={1080}
					className="w-full h-full object-cover object-top  opacity-90 hidden sm:flex" // Garante que a imagem cubra e se centre
				/>
				<img
					src={imgMobile.src}
					alt="Imagem de Fundo Principal" // Alt text mais descritivo
					width={1920}
					height={1080}
					className="w-full h-full object-cover object-  opacity-90 flex sm:hidden" // Garante que a imagem cubra e se centre
				/>

				{/* Conteúdo sobreposto animado */}
				<motion.div
					initial={{ y: 150, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white text-center px-4"
				>
					<h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-2 max-w-4xl leading-tight xl:mt-64 mt-10">
						Soluções Técnicas e Sustentáveis para o seu Negócio
					</h2>
					<p className="mb-4 text-md md:text-base lg:text-xl max-w-3xl text-neutral-200">
						Engenharia Ambiental - Segurança do Trabalho - Regularização de Empresas
					</p>
					<a
						href="https://wa.me/5531983320618?text=Olá,%20tenho%20interesse%20nos%20seus%20serviços!"
						target="_blank"
						className="bg-yellow-500 text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-sm hover:bg-gray-200 hover:text-yellow-700 transition-colors duration-300 ease-in-out cursor-pointer">
						Faça um Orçamento
					</a>
				</motion.div>
			</div>
		</section>
	);
}