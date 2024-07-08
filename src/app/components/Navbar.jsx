import Image from 'next/image'; 
import Link from 'next/link'; 
import { useState, useEffect } from 'react'; 

function NavBar() {
    const [navbar, setNavbar] = useState(false); 
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (lastScrollY < window.scrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`w-full bg-transparent fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className="flex justify-start lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-start py-3 md:py-5 md:block"> 
                            {/* LOGO */}
                            <Link href="/">
                                <img src="logo.png" alt="Logo" className="h-20 lg:h-20 mb-4 lg:mb-0" />
                            </Link>
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                                    onClick={() => setNavbar(!navbar)}>
                                    {navbar ? (
                                        <Image src="/close-menu.svg" width={30} height={30} alt="close menu" />
                                    ) : (
                                        <Image src="/hamburger-menu.svg" width={30} height={30} alt="open menu" className="focus:border-none active:border-none" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-row justify-start pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'} px-4`}>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-white">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="text-white">
                                <Link href="/Tracks">Tracks</Link>
                            </li>
                            <li className="text-white">
                                <Link href="/Judges">Judges</Link>
                            </li>
                            <li className="text-white">
                                <Link href="/faqs">FAQs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    ); 
}; 

export default NavBar;
