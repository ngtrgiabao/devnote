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
    const [isLoading, setIsLoading] = useState(true);
    const [animationTools, setAnimationTools] = useState<AnimationTools[]>([]);

    const getAnimationTools = async () => {
        try {
            setIsLoading(true);
            await axios.get("/api/tools/animation").then((res) => {
                setAnimationTools(res.data);
                setIsLoading(false);
            });
        } catch (error) {
            toast("Something went wrong");
            setIsLoading(false);
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
                        {isLoading ? (
                            <TableRow>
                                <TableCell>Loading...</TableCell>
                                <TableCell className="text-center">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : (
                            <>
                                {animationTools?.map((animation) => (
                                    <TableRow key={animation.id}>
                                        <TableCell>
                                            {animation.handbook}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Link
                                                href={animation.docs}
                                                className="text-amber-400 underline"
                                            >
                                                #Docs
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        )}
                    </TableBody>
                </Table>
            </div>

            <Toaster />
        </div>
    );
};
