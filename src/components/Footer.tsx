export default function Footer(){

    const date = new Date
    const ano = date.getFullYear()

    return(
        <div className="bg-[#262E33] xl:h-40 h-[12vh] flex items-center justify-center">
            <div className="xl:w-[60%] flex gap-2 items-center flex-col lg:flex-row justify-center">
                <p className="text-yellow-400 text-sm">Eugenio Engenharia © {ano}  </p>
                <p className="text-yellow-400 text-sm"> Especialista em projetos e resoluções personalizadas.</p>
            </div>
            <div>

            </div>
        </div>
    )
}