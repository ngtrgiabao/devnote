"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, MoveRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    github: string;
}

const Card = ({ imageUrl, title, description, github }: CardProps) => {
    return (
        <div className="relative h-full">
            <div className="p-4 rounded-lg bg-slate-800 flex flex-col space-y-4 border border-gray-400 relative z-20 h-full">
                <div className="w-full h-full bg-white">
                    <Image
                        src={imageUrl}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto object-cover"
                        alt={title}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>

                <div className="mt-4 space-y-4">
                    <h3 className="text-xl font-bold uppercase">{title}</h3>
                    <p className="font-extralight text-xs line-clamp-3">
                        {description}
                    </p>
                    <div>
                        <Badge variant="warning">JS</Badge>
                    </div>
                </div>

                <div className="w-full flex items-center justify-end gap-2">
                    <Link
                        href={github}
                        className="hover:bg-white hover:text-black text-white p-2 text-sm rounded-full w-max hover:transition hover:duration-300"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href={`/my-works`}
                        className="text-white font-bold p-2 text-base flex items-center hover:transition hover:duration-300 hover:bg-white hover:text-black rounded-full w-max px-4"
                    >
                        Discover
                        <MoveRight className="ms-2" size={15} />
                    </Link>
                </div>
            </div>
            <div className="absolute -inset-[0.1em] rounded-md blur-lg bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 z-10"></div>
        </div>
    );
};

export default Card;
