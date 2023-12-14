import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="flex items-center justify-between py-2 px-5">
            <div className="flex gap-2">
                <a href="http://facebook.com/SarasaviGeeSisilaOfficial" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#4267B2]">
                    <FaFacebook />
                </a>
                <a href="http://instagram.com/bess.uom" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-600">
                    <FaInstagram />
                </a>
                <a href="http://youtube.com/bess.uom" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-600">
                    <FaYoutube />
                </a>
            </div>
            <div className="flex gap-2 text-slate-500 hover:text-yellow-500">
                <span className="font-extralight text-xs uppercase"> BESS 2024 </span>
                <a href="https://github.com/ObsoleteXero/geesisila-website" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </footer>
    );
}

export default Footer;