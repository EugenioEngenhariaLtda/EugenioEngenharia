import { Trees, FileText, FireExtinguisher, Droplets, ShieldAlert, Clipboard, Warehouse, ShieldCheck, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from "./ServiceCard"
import type { ReactNode } from "react"

export default function Services() {

	type ServiceItems = {
		icon: ReactNode,
		title: string,
		description: string
	}

	const servicesCards: ServiceItems[] = [
		{
			title: "Licenciamento Ambiental",
			description: "Auxiliamos empresas na regularização ambiental, com agilidade, segurança técnica e foco em soluções sustentáveis.",
			icon: <Trees className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		},
		{
			title: "Plano de Gerenciamento de Resíduos",
			description: "Desenvolvimento do PGRS, garantindo o correto manejo, controle e destinação de resíduos, conforme normas ambientais.",
			icon: <FileText className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		},
		{
			title: "AVCB – Auto de Vistoria do Corpo de Bombeiros",
			description: "Elaboração de projetos e assessoria completa para obtenção do AVCB, promovendo segurança contra incêndios.",
			icon: <FireExtinguisher className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		},
		{
			title: "Precend – Controle de Efluentes",
			description: "Atuamos no controle e adequação de efluentes não domésticos, cumprindo as exigências legais e ambientais.",
			icon: <Droplets className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		},
		{
			title: "Plano de Gerenciamento de Riscos",
			description: "Análise, prevenção e controle de riscos operacionais, ambientais e ocupacionais para segurança de processos e pessoas.",
			icon: <ShieldAlert className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		},
		{
			title: "LTCAT – Laudo Técnico",
			description: "Emissão de Laudo Técnico sobre Condições Ambientais, identificando agentes nocivos para garantir segurança trabalhista.",
			icon: <Clipboard className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		}
	];


	return (
		<section className="flex flex-col items-center xl:min-h-[calc(100vh-80px)] min-h-[80vh] scroll-mt-20 bg-[#F7F7F7] overflow-x-hidden" id="servicos">
			<div className="xl:w-[80%] w-11/12">
				<div className="flex  text-3xl md:text-4xl font-light mt-10 mb-14 ">
					<h1>
						Principais Serviços
					</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

					{servicesCards.map((item, index) =>
						<ServiceCard
							key={index}
							icon={item.icon}
							title={item.title}
							description={item.description}

						/>
					)}

				</div>
				<div>
					<h1 className=" text-3xl md:text-4xl font-light mb-8 pb-">
						Outros Processos Realizados
					</h1>

					<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-4">

						{/* Meio Ambiente */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="rounded-2xl border-2 border-green-600 
      bg-gradient-to-br from-green-200 to-green-50 shadow-xl 
      hover:-translate-y-1 hover:shadow-2xl transition duration-300 
      text-green-700"
						>
							<div className="flex justify-center items-center gap-2 mb-6 p-6 xl:p-8">
								<h2 className="text-center text-2xl font-medium">Meio Ambiente</h2>
								<Sprout />
							</div>
							<ul className="flex flex-col gap-3 px-6 pb-6">
								<li>Licenciamento Ambiental (Estadual, Municipal)</li>
								<li>Plano de Gerenciamento de Resíduos Sólidos</li>
								<li>Relatório de Atividades Potencialmente Poluidoras – RAPP</li>
								<li>Programa de Recebimento e Controle de Efluentes Não Domésticos – Precend</li>
								<li>Outorgas</li>
							</ul>
						</motion.div>

						{/* Segurança do Trabalho */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="rounded-2xl border-2 border-yellow-600 
						bg-gradient-to-br from-yellow-200 to-yellow-50 shadow-xl 
      hover:-translate-y-1 hover:shadow-2xl transition duration-300 
      text-yellow-700"
						>
							<div className="flex justify-center items-center gap-2 mb-6 p-6 xl:p-8">
								<h2 className="text-center text-2xl font-medium">Segurança do Trabalho</h2>
								<ShieldCheck />
							</div>
							<ul className="flex flex-col gap-3 px-6 pb-6">
								<li>Projeto de Segurança Contra Incêndio e Pânico - PSCIP</li>
								<li>Plano de Gerenciamento de Riscos</li>
								<li>Laudo Técnico das Condições do Ambiente de Trabalho – LTCAT</li>
								<li>Laudo de Insalubridade</li>
								<li>Mapa de Risco</li>
								<li>Treinamentos</li>
								<li>Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção – PCMAT</li>
								<li>Laudos técnicos e perícias de segurança do trabalho</li>
							</ul>
						</motion.div>

						{/* Regularização Urbana */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
							className="rounded-2xl border-2 border-neutral-600 
      bg-gradient-to-br from-neutral-400 to-white shadow-xl 
      hover:-translate-y-1 hover:shadow-2xl transition duration-300 
      text-neutral-700"
						>
							<div className="flex justify-center items-center gap-2 mb-6 p-6 xl:p-8">
								<h2 className="text-center text-2xl font-medium">Regularização Urbana</h2>
								<Warehouse />
							</div>
							<ul className="flex flex-col gap-3 px-6 pb-6">
								<li>Estudo de Impacto da Vizinhança – EIV</li>
								<li>Licenciamento de Engenho de Publicidade</li>
								<li>Licenciamento de Toldo</li>
								<li>Licenciamento de Mesas e Cadeiras</li>
								<li>Habite-se</li>
							</ul>
						</motion.div>

					</div>
				</div>


			</div>
		</section>
	)
}