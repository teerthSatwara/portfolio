'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/app/theme-toggle';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import CodeIcon from '@mui/icons-material/Code';
import CallIcon from '@mui/icons-material/Call';


function Navbar() {
    const pathname = usePathname();

    const links = [
        {
            href: '/',
            icon: <HomeFilledIcon />,
            label: 'Home',
            classes: {
                bg: 'bg-cyan-500/30',
                shadow: 'shadow-cyan-500/40',
                hoverBg: 'hover:bg-cyan-500/40',
                hoverShadow: 'hover:shadow-cyan-500/50',
                textBase: 'text-cyan-400',
                textHover: 'group-hover:text-cyan-300',
                textActive: 'text-cyan-100',
            },
        },
        {
            href: '/projects',
            icon: <CodeIcon />,
            label: 'Projects',
            classes: {
                bg: 'bg-red-500/30',
                shadow: 'shadow-red-500/40',
                hoverBg: 'hover:bg-red-500/40',
                hoverShadow: 'hover:shadow-red-500/50',
                textBase: 'text-red-400',
                textHover: 'group-hover:text-red-300',
                textActive: 'text-red-100',
            },
        },

    ];

    return (
        <nav className="w-full p-4 bg-gray-200 sticky top-0 z-10 bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <h2 className="text-amber-800 text-xl font-bold"> </h2>
                <div className="flex space-x-4">
                    {links.map(({ href, icon, classes }) => {
                        const isActive = pathname === href;
                        return (
                            <Link key={href} href={href}>
                                <div
                                    className={`group inline-flex items-center justify-center p-3 rounded-full transition duration-300
                    ${isActive ? `${classes.bg} shadow-lg ${classes.shadow}` : 'bg-transparent'}
                    ${classes.hoverBg} hover:shadow-lg ${classes.hoverShadow}
                  `}
                                >
                                    <div
                                        className={`${isActive ? classes.textActive : classes.textBase
                                            } ${classes.textHover}`}
                                    >
                                        {icon}
                                    </div>
                                </div>
                            </Link>
                        );

                    })}
                    <div className="inline-flex items-center justify-center p-3 rounded-full transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-700">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
