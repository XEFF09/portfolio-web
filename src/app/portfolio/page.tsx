import PageHeader from "@/components/PageHeader";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
    return (
        <div className="container mx-auto mb-10 mt-20 px-4 ">
            <PageHeader header="Portfolio" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    Array(12).fill(0).map((value, index) => {
                        return (
                            <PortfolioItem 
                                key={index}
                                title="Work101"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt veritatis amet reiciendis reprehenderit iusto mollitia doloribus eligendi cumque, repudiandae eaque! Numquam accusantium inventore ea, similique corrupti et totam officia?"
                                image="https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg"
                            />
                        );
                    })
                }
                
            </div>
        </div>
    );
}