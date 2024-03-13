"use client";

import { Github, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Logo } from "./logo";

import "./styles/mobile-sidebar.css";
import { allRoutes } from "./all-routes";

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <section className="flex flex-col w-full">
                {allRoutes.map((route) => (
                    <Link
                        href={route.href}
                        className={
                            "sb-sheet-content" +
                            (pathname === route.href
                                ? " bg-blue-400/15 text-blue-500"
                                : "")
                        }
                    >
                        {route.icon}
                        {route.name}
                    </Link>
                ))}
            </section>
            <section className="w-full mt-4">
                <h4 className="text-xs text-gray-400 px-4 pb-2">Contacts</h4>
                <section className="flex flex-col">
                    <a
                        className="sb-sheet-content"
                        target="_blank"
                        href="https://github.com/ngtrgiabao"
                    >
                        <Github className="me-2" />
                        Github
                    </a>
                    <a
                        className="sb-sheet-content"
                        target="_blank"
                        href="https://www.linkedin.com/in/gbao/"
                    >
                        <Linkedin className="me-2" />
                        Linkdin
                    </a>
                </section>
            </section>
        </div>
    );
};
