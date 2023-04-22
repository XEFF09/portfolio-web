export default function PageHeader({ header }: { header: string }) {
    
    return (
        <div className="container mx-auto mb-10 mt-20 bg-[2c2c2c]">
            <h1 className="text-5xl font-bold text-yellow-500">{ header }</h1>
            <div className="border-b-[4px] border-b-white w-10 mt-2"></div>
        </div>
    )
}