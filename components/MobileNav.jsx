"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

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
    {
        name: "Contact",
        path: "/contact",
    },
];

const MobileNav = () => {
  const pathname = usePathname();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CiMenuFries className="cursor-pointer text-[32px] text-blue-400 hover:text-blue-600 transition-colors" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-secondary/95 backdrop-blur-lg border-none">
        <div className="flex flex-col h-full justify-between py-8">
          <div className="text-center">
            <Link href="/">
              <h1 className="text-3xl">
                <span className="font-normal bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Berk
                </span>
                {" "}
                <span className="font-light text-blue-500">
                  Kaya
                </span>
              </h1>
            </Link>
          </div>
          <nav className="flex flex-col items-center gap-6">
            {links.map((link, index) => {
              const isActive = link.path === pathname;
              
              return (
                <Link
                  href={link.path}
                  key={index}
                  className="relative group py-1"
                >
                  <span className={`text-base font-medium transition-colors ${
                    isActive 
                      ? "text-blue-400" 
                      : "text-muted-foreground hover:text-blue-400"
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Underline effect */}
                  <span className={`absolute -bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-300 ${
                    isActive ? "w-full" : "group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
          </nav>
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Berk Kaya
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;