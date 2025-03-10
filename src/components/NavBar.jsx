import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgWorkAlt, CgHome, CgFolder, CgPhone, CgClose } from 'react-icons/cg';
import { ImProfile } from 'react-icons/im';
import { HiBars3 } from 'react-icons/hi2';

export const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile,setIsMobile] = useState(false);
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false);

    const navitems = [
        { icon: <CgHome />, text: 'Home', to: '/#home' },
        { icon: <ImProfile />, text: 'About me', to: '/#aboutme' },
        { icon: <CgWorkAlt />, text: 'My Experience', to: '/#myexp' },
        { icon: <CgFolder />, text: 'My Projects', to: '/#mypro' },
        { icon: <CgPhone />, text: 'Contact me', to: '/#contactme' },
    ];

    useEffect(()=>{
        const handleResize =()=>{
            setIsMobile(window.innerWidth<768);
        }
        handleResize();
        window.addEventListener('resize',handleResize);
        return()=>{
            window.removeEventListener("resize",handleResize);
        }
    },[]);

    const toggleMobileMenu = () =>{
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const handleNavClick = () =>{
        if(isMobile){
            setMobileMenuOpen(false);
        }
    }

    if(isMobile){
        return(
            <>
                <div className="fixed top-0 left-0 w-full bg-gray-50/10 z-20 py-2 px-4 flex justify-between items-center">
                    <div className="text-white text-xl font-bold">Portfolio</div>
                    <button 
                        onClick={toggleMobileMenu} 
                        className="text-white text-2xl"
                    >
                        {!mobileMenuOpen ? <HiBars3 />:<CgClose/>}
                    </button>
                </div>
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-gray-900 z-10 pt-16">
                        <ul className="mt-5 space-y-4 px-4">
                            {navitems.map((item, index) => (
                                <li
                                    key={index}
                                    className="p-3 flex items-center rounded-lg transition hover:bg-gray-800 text-white"
                                    onClick={handleNavClick}
                                >
                                    <Link to={item.to} className="flex items-center w-full">
                                        <div className="text-xl mr-4">
                                            {item.icon}
                                        </div>
                                        <span className="text-lg font-medium">{item.text}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </>
        )
    }

    return (
        <div
            className={`h-screen fixed bg-gray-900/50 transition-all duration-100 ${
                isHovered ? 'w-64' : 'w-14'
            } border-r-1 border-gray-700 z-10`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ul className="mt-5 space-y-4">
                {navitems.map((item, index) => (
                    <li
                        key={index}
                        className="p-2 flex items-center rounded-lg transition hover:bg-gray-300 hover:text-black text-white"
                    >
                        <Link to={item.to} className="flex items-center w-full">
                            <div className={`text-xl ${isHovered ? 'mr-4' : 'mx-auto'}`}>
                                {item.icon}
                            </div>
                            {isHovered && <span className="text-lg font-medium whitespace-nowrap">{item.text}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};