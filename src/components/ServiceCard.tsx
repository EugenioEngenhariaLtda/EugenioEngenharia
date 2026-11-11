import type { ReactNode } from "react";

type ServiceCardItem = {
	icon: ReactNode;
	title: string;
	description: string;
	href?: string;
	ctaLabel?: string;
};

export default function ServiceCard({ title, description, icon, href, ctaLabel }: ServiceCardItem): ReactNode {
	const whatsapp = "https://wa.me/5531983320618?text=Olá,%20tenho%20interesse%20nos%20serviços%20da%20Eugênio%20Engenharia.";
	const target = href?.startsWith("http") ? "_blank" : undefined;

	return (
		<div className="w-full max-w-sm sm:max-w-md md:max-w-xl bg-[#262E33] shadow-xl rounded-xl flex flex-col px-6 pt-12 pb-8 mb-6 mx-auto">
			<span className="mx-auto flex bg-neutral-700 p-1 w-max rounded-full -mt-20 mb-6 relative border-4 border-yellow-400">
				{icon}
			</span>

			<div className="flex flex-col flex-1">
				<h2 className="text-center text-xl text-neutral-200 font-semibold mb-4">
					{title}
				</h2>

				<p className="text-center text-neutral-400 text-sm sm:text-base mb-8">
					{description}
				</p>

				<a
					href={href ?? whatsapp}
					target={target}
					rel={target ? "noopener noreferrer" : undefined}
					className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-center py-2 px-4 rounded-xl font-semibold text-black mt-auto"
				>
					{ctaLabel ?? (href ? "Saiba mais" : "Tenho interesse")}
				</a>
			</div>
		</div>
	);
}
