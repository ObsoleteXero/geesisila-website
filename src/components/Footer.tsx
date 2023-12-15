import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="flex items-center justify-between py-2 px-5">
            <div className="flex gap-4">
                <a href="http://facebook.com/SarasaviGeeSisilaOfficial" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#4267B2]">
                    <FaFacebook size={20} />
                </a>
                <a href="https://www.instagram.com/_sarasavigeesisila_" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-600">
                    <FaInstagram size={20} />
                </a>
                <a href="http://youtube.com/@bess_official" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-600">
                    <FaYoutube size={20} />
                </a>
            </div>
            <div className="flex items-center gap-2 text-slate-500 hover:text-yellow-500">
                <span className="font-extralight text-xs uppercase"> BESS 2024 </span>
                <a href="https://github.com/ObsoleteXero/geesisila-website" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;