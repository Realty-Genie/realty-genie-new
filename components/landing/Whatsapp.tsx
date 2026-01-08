import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

export const Whatsapp = () => {
    return (
        <div>
            <a href="https://wa.me/+17787922220" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp
                    size={60}
                    className="fixed bottom-28 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-[9998]"
                />

            </a>
        </div>
    )
}