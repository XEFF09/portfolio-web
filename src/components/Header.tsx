export default function Header() {
    return (
        <>
            <header className="bg-slate-900 h-screen">
                <div className="flex flex-col justify-center h-full">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white">
                            Hello, I'm <span className="text-yellow-500">Pun</span>
                        </h1>
                        <h2 className="text-gray-600 text-2xl mt-5">
                            a computer sci student
                        </h2>
                    </div>
                </div>
            </header>
        </>    
    )
}