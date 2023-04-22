import Image from "next/image";

interface PortfolioItemType {
    title: string;
    description: string;
    image: string;
    link?: string;
}

export default function PortfolioItem({ title, description, image, link }: PortfolioItemType) {
    return (
        <div className="bg-zinc-300 p-5">
            <h2 className="text-amber-500 text-lg font-semibold">
                { title }
            </h2>
            <Image 
                src={image}
                alt={ "image of " + title }
                width={500}
                height={400}
            />
            <p className="text-gray-600">
                { description }
            </p>
        </div>
    )
}