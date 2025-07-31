import mg from "../assets/logo/mg.png?url";
import bh from "../assets/logo/bh.png?url";
import contagem from "../assets/logo/logo_prefeituracontagem.png?url";
import betim from "../assets/logo/logo_prefeiturabetim.png?url";
import republica from "../assets/logo/republica.png?url";
import bombeiros from "../assets/logo/captura_de_tela_2024-09-09_110120.png?url";
import anvisa from "../assets/logo/anvisa-logo.png?url";
import cnes from "../assets/logo/cnes.jpg?url";
import ibama from "../assets/logo/ibama.png?url";
import cetesb from "../assets/logo/cetesb.png?url";
import semad from "../assets/logo/ChatGPT Image 18 de jun. de 2025, 11_10_25.png?url";
import vigilancia from "../assets/logo/vigilancia.png?url";
import economia from "../assets/logo/client1.jpeg?url";
import lm from "../assets/logo/client2.jpeg?url";
import ceteme from "../assets/logo/client3.jpeg?url";
import wilson from "../assets/logo/client4.jpeg?url";


type ClientsLogo = {
	src: string,
	alt: string,
	large: boolean
}

export default function Clients() {
	const logos: ClientsLogo[] = [
		{ src: mg, alt: "Governo MG", large: true },
		{ src: bh, alt: "Prefeitura Belo Horizonte", large: true },
		{ src: contagem, alt: "Prefeitura Contagem", large: true },
		{ src: betim, alt: "Prefeitura Betim", large: true },
		{ src: anvisa, alt: "Anvisa", large: false },
		{ src: cnes, alt: "CNES", large: false },
		{ src: semad, alt: "Semad", large: false },
		{ src: republica, alt: "Governo Federal", large: false },
		{ src: bombeiros, alt: "Corpo de Bombeiros", large: true },
		{ src: ibama, alt: "Ibama", large: false },
		{ src: cetesb, alt: "Cetesb", large: true },
		{ src: vigilancia, alt: "Vigilância Sanitária", large: true },
	];

	const clientLogos: ClientsLogo[] = [
		{ src: economia, alt: "Economia", large: false },
		{ src: lm, alt: "lm", large: false },
		{ src: ceteme, alt: "ceteme", large: false },
		{ src: wilson, alt: "wilson", large: false },
	];


	return (
		<section
			className="min-h-[calc(100vh-80px)] bg-white flex justify-center xl:py-18 py-8"
			id="clientes"
		>
			<div className="xl:w-[80%] w-11/12">

				<h2 className="text-neutral-900 xl:text-5xl mt-2 xl:mt-2 text-4xl font-light text-center">
					Alguns de nossos <span className="text-yellow-400">clientes</span>
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-6 xl:grid-cols-4 gap-10 xl:p-8 p-4 rounded-xl mt-10">
					{clientLogos.map((logo) => (
						<img
							key={logo.alt}
							src={logo.src}
							alt={logo.alt}
							className={`h-24 xl:max-w-[60%] max-w-[80%] ${logo.large ? "" : "md:scale-115 hover:scale-105"} object-contain mx-auto hover:scale-90 transition-transform`}
						/>
					))}
				</div>

				<h2 className="text-neutral-900 xl:text-5xl text-4xl font-light text-center">
					Órgãos <span className="text-yellow-400">parceiros</span>
				</h2>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-10 xl:p-8 p-4 rounded-xl mt-10">
					{logos.map((logo) => (
						<img
							key={logo.alt}
							src={logo.src}
							alt={logo.alt}
							className={`h-24 xl:max-w-[60%] max-w-[80%] ${logo.large ? "" : "md:scale-115 hover:scale-105"} object-contain mx-auto hover:scale-90 transition-transform`}
						/>
					))}
				</div>
				
			</div>
		</section>
	);
}
