import type { ReactNode } from "react";

type BlogCards = {
    img: string;
    title: string;
    description: string;
    slug: string;
};

export default function BlogCard({
    img,
    title,
    description,
    slug,
}: BlogCards): ReactNode {
    console.log("BlogCard slug:", slug);  // <-- Aqui o log

    return (
        <a
            href={slug}
            className="flex flex-col  rounded-md overflow-hidden shadow-lg bg-white hover:scale-95 transition-transform duration-200 cursor-pointer w-full sm:max-w-sm mx-auto"
        >
            <img
                src={img}
                alt={title}
                className="w-full h-48 sm:h-56 md:h-60 object-cover object-center"
            />
            <div className="flex flex-col p-4  py-8 gap-3">
                <h2 className="text-lg md:text-xl font-semibold text-neutral-800">
                    {title}
                </h2>
                <p className="text-sm md:text-base text-neutral-500 line-clamp-3">
                    {description}
                </p>
                <span className="text-sm font-medium text-stone-700 underline">
                    Leia Mais
                </span>
            </div>
        </a>
    );
}
