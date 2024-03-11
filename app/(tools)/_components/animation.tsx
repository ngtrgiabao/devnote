"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";

interface AnimationTools {
    id: string;
    handbook: string;
    docs: string;
}

export const Animation = () => {
    const [animationTools, setAnimationTools] = useState<AnimationTools[]>([]);

    const getAnimationTools = async () => {
        try {
            await axios.get("/api/tools/animation").then((res) => {
                setAnimationTools(res.data);
            });
        } catch (error) {
            toast("Something went wrong");
        }
    };

    useEffect(() => {
        getAnimationTools();
    }, []);

    return (
        <div className="w-full flex flex-col justify-center">
            <h3 className="text-xl text-center md:text-3xl font-bold mb-4 text-white">
                Animations
            </h3>

            <div className="text-white ">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold uppercase">
                                handbook
                            </TableHead>
                            <TableHead className="font-bold uppercase text-center">
                                Document
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {animationTools?.map((tool) => (
                            <TableRow key={tool.id}>
                                <TableCell>{tool.handbook}</TableCell>
                                <TableCell className="text-center">
                                    <Link
                                        href={tool.docs}
                                        className="text-amber-400 underline"
                                    >
                                        #Docs
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <Toaster />
        </div>
    );
};
