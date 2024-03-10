"use client";

import {
    BookOpen,
    Braces,
    Github,
    Home,
    Lightbulb,
    Wrench,
} from "lucide-react";
import { Logo } from "./logo";

import "./styles/mobile-sidebar.css";

export const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <section className="flex flex-col w-full">
                <a
                    className="sb-sheet-content"
                    target="_self"
                    aria-current="page"
                    href="/"
                >
                    <Home className="me-3" />
                    Home
                </a>
                <a className="sb-sheet-content" target="_self" href="/blog">
                    <BookOpen className="me-3" />
                    Blog
                </a>
                <a className="sb-sheet-content" target="_self" href="/issues">
                    <Lightbulb className="me-3" />
                    Issues
                </a>
                <a
                    className="sb-sheet-content"
                    target="_self"
                    href="/javascript"
                >
                    <Braces className="me-3" />
                    Javascript
                </a>
                <a className="sb-sheet-content" target="_self" href="/tools">
                    <Wrench className="me-3" />
                    Tools
                </a>
            </section>
            <section className="flex flex-col w-full mt-4">
                <h4 className="text-xs text-gray-400 px-4 pb-2">Contacts</h4>
                <a
                    className="sb-sheet-content"
                    target="_blank"
                    href="https://github.com/ngtrgiabao"
                >
                    <Github className="me-2" />
                    Github
                </a>
            </section>
        </div>
    );
};
