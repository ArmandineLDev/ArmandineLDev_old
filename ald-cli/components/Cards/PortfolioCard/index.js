import Image from "next/image";

const PortfolioCard = (project) => {
    return(

        <div>
            {/* image
            <Image
                src={`/pictures/images/${project.image}`}
                width={100}
                height={100}
            />*/}
            {project.title}

            {/* titre */}
            {/* tags */}
            {/* status */}
            {/* link */}
        </div>
    )
}
export default PortfolioCard
