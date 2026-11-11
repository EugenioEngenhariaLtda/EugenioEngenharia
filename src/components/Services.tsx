import { Trees, FileText, FireExtinguisher, Droplets, ShieldAlert, Clipboard, Warehouse, ShieldCheck, Sprout } from "lucide-react";
import ServiceCard from "./ServiceCard";
import type { ReactNode } from "react";

export default function Services() {
	type ServiceItems = {
		icon: ReactNode;
		title: string;
		description: string;
		href?: string;
	};

	const servicesCards: ServiceItems[] = [
		{
			title: "Licenciamento Ambiental",
			description: "Análise de enquadramento, regularização, renovação e acompanhamento do processo ambiental.",
			icon: <Trees className="mx-auto w-14 h-14 p-3 text-yellow-400" />,
			href: "/service/licenciamento-ambiental",
		},
		{
			title: "Plano de Gerenciamento de Resíduos",
			description: "Elaboração e atualização de PGRS, organização documental e orientação para gestão de resíduos.",
			icon: <FileText className="mx-auto w-14 h-14 p-3 text-yellow-400" />,
			href: "/service/pgrs",
		},
		{
			title: "AVCB, CLCB e PSCIP",
			description: "Análise e condução de regularizações de segurança contra incêndio conforme o enquadramento aplicável.",
			icon: <FireExtinguisher className="mx-auto w-14 h-14 p-3 text-yellow-400" />,
			href: "/service/avcb",
		},
		{
			title: "PRECEND – Controle de Efluentes",
			description: "Caracterização, documentação e acompanhamento do processo de efluentes não domésticos junto à COPASA.",
			icon: <Droplets className="mx-auto w-14 h-14 p-3 text-yellow-400" />,
			href: "/service/precend",
		},
		{
			title: "Plano de Gerenciamento de Riscos",
			description: "Estruturação do PGR e apoio técnico para identificação, avaliação e controle de riscos ocupacionais.",
			icon: <ShieldAlert className="mx-auto w-14 h-14 p-3 text-yellow-400" />,
			href: "/service/pgr",
		},
		{
			title: "LTCAT – Laudo Técnico",
			description: "Avaliação técnica das condições ambientais de trabalho e dos agentes ocupacionais aplicáveis.",
			icon: <Clipboard className="mx-auto w-14 h-14 p-3 text-yellow-400" />,
		},
	];

	return (
		<section className="flex flex-col items-center xl:min-h-[calc(100vh-80px)] min-h-[80vh] scroll-mt-20 bg-[#F7F7F7] overflow-x-hidden" id="servicos">
			<div className="xl:w-[80%] w-11/12">
				<div className="mt-10 mb-10">
					<p className="uppercase tracking-[0.2em] text-sm font-semibold text-yellow-600 mb-2">Regularização e gestão</p>
					<h1 className="text-3xl md:text-4xl font-light">O que sua empresa precisa regularizar?</h1>
				</div>

				<div className="mb-16 rounded-2xl bg-[#262E33] p-7 md:p-10 text-white flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between shadow-xl">
					<div className="max-w-3xl">
						<h2 className="text-2xl md:text-3xl font-semibold mb-3">Não sabe qual licença ou documento está faltando?</h2>
						<p className="text-neutral-300">
							Analisamos atividade, endereço e documentos existentes para identificar as pendências e estruturar o caminho de regularização.
						</p>
					</div>
					<a
						href="/service/regularizacao-empresa-belo-horizonte"
						className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-xl px-6 py-3 text-center whitespace-nowrap transition-colors"
					>
						Solicitar diagnóstico
					</a>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
					{servicesCards.map((item, index) => (
						<ServiceCard
							key={index}
							icon={item.icon}
							title={item.title}
							description={item.description}
							href={item.href}
						/>
					))}
				</div>

				<div>
					<h2 className="text-3xl md:text-4xl font-light mb-8">Outros Processos Realizados</h2>

					<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
						<div className="rounded-2xl border-2 border-green-600 bg-gradient-to-br from-green-200 to-green-50 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition duration-300 text-green-700">
							<div className="flex justify-center items-center gap-2 mb-6 p-6 xl:p-8">
								<h3 className="text-center text-2xl font-medium">Meio Ambiente</h3>
								<Sprout />
							</div>
							<ul className="flex flex-col gap-3 px-6 pb-6">
								<li><a className="hover:underline font-medium" href="/service/licenciamento-ambiental">Licenciamento Ambiental (Estadual e Municipal)</a></li>
								<li><a className="hover:underline font-medium" href="/service/pgrs">Plano de Gerenciamento de Resíduos Sólidos</a></li>
								<li>RAPP / CTF / TCFA</li>
								<li><a className="hover:underline font-medium" href="/service/precend">PRECEND – Efluentes não domésticos</a></li>
								<li>Outorgas e obrigações ambientais</li>
							</ul>
						</div>

						<div className="rounded-2xl border-2 border-yellow-600 bg-gradient-to-br from-yellow-200 to-yellow-50 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition duration-300 text-yellow-800">
							<div className="flex justify-center items-center gap-2 mb-6 p-6 xl:p-8">
								<h3 className="text-center text-2xl font-medium">Segurança do Trabalho e Incêndio</h3>
								<ShieldCheck />
							</div>
							<ul className="flex flex-col gap-3 px-6 pb-6">
								<li><a className="hover:underline font-medium" href="/service/avcb">PSCIP, AVCB e CLCB</a></li>
								<li><a className="hover:underline font-medium" href="/service/pgr">Plano de Gerenciamento de Riscos</a></li>
								<li>LTCAT e avaliações ocupacionais</li>
								<li>Treinamentos e laudos técnicos</li>
							</ul>
						</div>

						<div className="rounded-2xl border-2 border-neutral-600 bg-gradient-to-br from-neutral-300 to-white shadow-xl hover:-translate-y-1 hover:shadow-2xl transition duration-300 text-neutral-800">
							<div className="flex justify-center items-center gap-2 mb-6 p-6 xl:p-8">
								<h3 className="text-center text-2xl font-medium">Regularização Urbana</h3>
								<Warehouse />
							</div>
							<ul className="flex flex-col gap-3 px-6 pb-6">
								<li><a className="hover:underline font-medium" href="/service/alvara-localizacao-funcionamento-belo-horizonte">Alvará de Localização e Funcionamento</a></li>
								<li><a className="hover:underline font-medium" href="/service/licenca-engenho-publicidade-belo-horizonte">Engenho de Publicidade</a></li>
								<li><a className="hover:underline font-medium" href="/service/licenca-toldo-belo-horizonte">Licença de Toldo</a></li>
								<li><a className="hover:underline font-medium" href="/service/licenca-mesa-cadeira-belo-horizonte">Licença de Mesa e Cadeira</a></li>
								<li><a className="hover:underline font-medium" href="/service/regularizacao-empresa-belo-horizonte">Diagnóstico de Regularização</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
