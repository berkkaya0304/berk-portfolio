import Link from "next/link";
import { Button } from "./ui/button";

//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Berk<span className="text-accent">.</span>
            </h1>
            </Link>

            {/* Desktop Nav & hire me button*/}
            <div className="hidden xl:flex gap-8">
            <Nav />
            <Link href="/contact">
                <Button>Hire me</Button>
            </Link>          
            </div>

            {/* Mobile Nav*/}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header;