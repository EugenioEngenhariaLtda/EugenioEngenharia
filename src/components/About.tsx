import { motion } from "framer-motion";
import about from "../assets/about.jpg";

export default function About() {
    return (
        <section
            id="quem-somos"
            className="flex flex-col items-center bg-neutral-50 py-16 xl:min-h-[calc(100vh-80px)]"
        >
            <div className="flex flex-col-reverse xl:flex-row gap-10 xl:w-[80%] w-11/12 xl:mt-12">
                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center w-full xl:w-1/2"
                >
                    <h2 className="text-3xl xl:text-5xl font-semibold text-[#1e293b] mb-8">
                        Sobre a
                        <span className="text-yellow-500"> Eugênio Engenharia</span>
                    </h2>

                    <p className="text-lg text-gray-700 mb-12">
                        A <span className="font-medium">Eugênio Engenharia</span> foi criada
                        para oferecer soluções rápidas, personalizadas e eficientes nas áreas
                        de <span className="font-medium">Engenharia Ambiental</span>,{" "}
                        <span className="font-medium">Segurança do Trabalho</span> e{" "}
                        <span className="font-medium">Regularização de Empresas</span>.

                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-[#4a4c4d] rounded-xl p-4 mb-4"
                    >
                        <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                            Diferenciais:
                        </h3>
                        <p className="text-gray-300">
                            Agilidade no atendimento, foco nos resultados e compromisso com a
                            responsabilidade técnica em cada projeto.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-[#4a4c4d] rounded-xl p-4"
                    >
                        <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                            Missão:
                        </h3>
                        <p className="text-gray-300">
                            Ser um parceiro técnico estratégico, ajudando empresas a se manterem
                            regularizadas, seguras e ambientalmente responsáveis.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Imagem */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full xl:w-1/2 flex items-center justify-center"
                >
                    <img
                        src={about.src}
                        alt="Sobre a Eugênio Engenharia"
                        className="rounded-2xl shadow-md object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
