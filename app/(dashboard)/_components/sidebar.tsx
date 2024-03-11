"use client";

import {
    BookOpen,
    Braces,
    Github,
    Home,
    Lightbulb,
    Linkedin,
    Wrench,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { Logo } from "./logo";

import "./styles/mobile-sidebar.css";
import Link from "next/link";

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <section className="flex flex-col w-full">
                <Link
                    className={
                        "sb-sheet-content" +
                        (pathname === "/"
                            ? " bg-blue-400/15 text-blue-500"
                            : "")
                    }
                    target="_self"
                    aria-current="page"
                    href="/"
                    shallow={true}
                >
                    <Home className="me-3" />
                    Home
                </Link>
                <Link
                    className={
                        "sb-sheet-content" +
                        (pathname === "/blog"
                            ? " bg-blue-400/15 text-blue-500"
                            : "")
                    }
                    target="_self"
                    href="/blogs"
                    shallow={true}
                >
                    <BookOpen className="me-3" />
                    Blog
                </Link>
                <Link
                    className={
                        "sb-sheet-content" +
                        (pathname === "/issues"
                            ? " bg-blue-400/15 text-blue-500"
                            : "")
                    }
                    target="_self"
                    href="/issues"
                    shallow={true}
                >
                    <Lightbulb className="me-3" />
                    Issues
                </Link>
                <Link
                    className={
                        "sb-sheet-content" +
                        (pathname === "/javascript"
                            ? " bg-blue-400/15 text-blue-500"
                            : "")
                    }
                    target="_self"
                    href="/javascript"
                    shallow={true}
                >
                    <Braces className="me-3" />
                    Javascript
                </Link>
                <Link
                    className={
                        "sb-sheet-content" +
                        (pathname === "/tools"
                            ? " bg-blue-400/15 text-blue-500"
                            : "")
                    }
                    target="_self"
                    href="/tools"
                    shallow={true}
                >
                    <Wrench className="me-3" />
                    Tools
                </Link>
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
