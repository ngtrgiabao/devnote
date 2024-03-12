"use client";

import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface CardProps {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
}

const Card = ({ id, imageUrl, title, description }: CardProps) => {
    return (
        <div className="p-4 rounded-lg bg-slate-800 flex flex-col space-y-4">
            <div className="w-full h-full">
                <Image
                    src={imageUrl}
                    width={0}
                    height={0}
                    alt={title}
                    style={{ width: "100%", height: "100%" }}
                    className="object-cover"
                />
            </div>

            <div className="mt-4 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold uppercase">
                    {title}
                </h3>
                <p className="font-extralight text-xs">{description}</p>
                <div>
                    <Badge variant="warning">JS</Badge>
                </div>
            </div>

            <div className="w-full flex items-center justify-end gap-2">
                <Link
                    href={`/my-works/${id}`}
                    className="hover:bg-white hover:text-black text-white p-2 text-sm rounded-full w-max"
                >
                    <Github size={20} />
                </Link>
                <Link
                    href={`/my-works/${id}`}
                    className="bg-white p-2 text-sm text-black rounded-lg w-max"
                >
                    Discover
                </Link>
            </div>
        </div>
    );
};

export default Card;
