import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logo from "../assets/logoSemFundo.jpeg"



export default function Contact() {
    return (
        <section className="min-h-[74vh] pt-26 xl:pt-10 xl:min-h-[74vh] flex flex-col items-center justify-center bg-[#F7F7F7] scroll-mt-20" id="contato">
            <div className="xl:w-[60%] w-11/12 ml-2">
                <h2 className="text-neutral-900 xl:text-5xl font-light text-4xl ">Entre em <span className="text-yellow-400">contato</span></h2>
                <div className="flex justify-between flex-col lg:flex-row">
                    <div className="xl:mt-25 mt-10">
                        <div className="flex mt-2 hover:scale-110 transition-all">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-neutral-700 hover:text-black transition-all"
                            >
                                <span className="p-2.5 bg-[#262E33] rounded-full"><Mail className="w-6 h-6 text-yellow-400" /></span>
                                <div className="flex flex-col">
                                    <span className="font-medium text-neutral-800">Email</span>
                                    <span className="text-sm text-neutral-700">eugenioengenharialtda@gmail.com</span>
                                </div>
                            </a>
                        </div>
                        <div className="flex mt-4 hover:scale-110 transition-all">
                            <a
                                href="https://wa.me/5531983320618?text=Olá,%20tenho%20interesse%20nos%20seus%20serviços!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-neutral-700 hover:text-black transition-all"
                            >
                                <span className="p-2.5 bg-[#262E33] rounded-full"><Phone className="w-6 h-6 text-yellow-400" /></span>
                                <div className="flex flex-col">
                                    <span className=" font-medium text-neutral-800">WhatsApp</span>
                                    <span className="text-sm text-neutral-700">(31) 98332-0618</span>
                                </div>
                            </a>
                        </div>
                        <div className="flex mt-4 hover:scale-110 transition-all">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-neutral-700 hover:text-black transition-all"
                            >
                                <span className="p-2.5 bg-[#262E33] rounded-full"><Instagram className="w-6 h-6 text-yellow-400" /></span>
                                <div className="flex flex-col">
                                    <span className=" font-medium text-neutral-800">Instagram</span>
                                    <span className="text-sm text-neutral-700">@eugenioengenharialtda</span>
                                </div>
                            </a>
                        </div>
                        <div className="flex mt-4 hover:scale-110 transition-all">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-neutral-700 hover:text-black transition-all"
                            >
                                <span className="p-2.5 bg-[#262E33] rounded-full"><Linkedin className="w-6 h-6 text-yellow-400" /></span>
                                <div className="flex flex-col">
                                    <span className="font-medium text-neutral-800">Linkedin</span>
                                    <span className="text-sm text-neutral-700">eugenioengenharialtda</span>
                                </div>
                            </a>
                        </div>


                    </div>
                    <div className="flex justify-center items-center  mt-8">
                        <img src={logo.src} alt="" className="xl:h-100 h-72" />
                    </div>
                </div>

            </div>
        </section>
    )
}