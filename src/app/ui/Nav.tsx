'use client'

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
    {namme: "Home", href: "/src"},
    {namme: "About", href: "/src/about"},
    {namme: "Contact", href: "/src/contact"},
];

export default function Nav() {
    const pathname = usePathname();
    
    return (
        <aside className="sidebar">
            <nav className="nav">
                <ul>
                    {
                        links.map((link) => {
                            return (
                                <li key={link.href} className={clsx({"active": link.href == pathname})}>
                                    <Link href={link.href}>
                                        {link.namme}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </aside>
    );
}