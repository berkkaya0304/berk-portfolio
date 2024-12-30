"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Programs",
        path: "/program",
    },
    {
        name: "Social",
        path: "/social",
    },
    {
        name: "Blog",
        path: "/blog",
    },
];

const Nav = () => {
    const pathname = usePathname();
    
    return (
        <nav className="flex items-center gap-6">
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                
                return (
                    <Link 
                        href={link.path} 
                        key={index}
                        className="relative group"
                    >
                        <span className={`text-sm font-medium transition-colors ${
                            isActive 
                                ? "text-blue-400" 
                                : "text-muted-foreground hover:text-blue-400"
                        }`}>
                            {link.name}
                        </span>
                        
                        {/* Underline effect */}
                        <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-300 ${
                            isActive ? "w-full" : "group-hover:w-full"
                        }`} />
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;