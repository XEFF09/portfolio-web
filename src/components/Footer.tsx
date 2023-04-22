export default function Footer() {
    
    return (
        <footer className="bg-slate-900">
            <div className="container mx-auto text-white py-4 text-center">
                Copyright @ { new Date().getFullYear() } <span className="text-yellow-500">Thatpong wongchaita</span>
            </div>
        </footer>
    )
}