import { blogCardsData } from "../data/blogs"
import BlogCard from "./BlogCard";


export default function Blog() {



    return (
        <section
            id="blog"
            className="flex flex-col items-center bg-neutral-100 py-10 xl:min-h-[calc(100vh-80px)]"
        >
            <div className="flex flex-col justify-center gap-10 xl:w-[80%] w-11/12">
                <div>
                    <h2 className="text-neutral-900 xl:text-4xl mt-2 xl:mt-2 text-4xl font-light text-center">
                        Blog da <span className="text-yellow-400">Eugenio Engenharia</span>
                    </h2>
                    <p className="text-neutral-500 text-center mb-2 text-xl mt-1">
                        Clique em cada para saber mais
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 ">
                    {blogCardsData
                        .filter((card) => !!card.slug) // garante que só renderiza cards com slug válido
                        .map((card, index) => (
                            <BlogCard
                                key={index}
                                img={card.img}
                                title={card.title}
                                description={card.description}
                                slug={card.slug}
                            />
                        ))}

                </div>
            </div>
        </section>
    )
}