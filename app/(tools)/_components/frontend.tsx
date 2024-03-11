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

interface FrontendTools {
    id: string;
    handbook: string;
    docs: string;
}

export const Frontend = () => {
    const [frontendTools, setFrontendTools] = useState<FrontendTools[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getFrontendTools = async () => {
        try {
            setIsLoading(true);
            await axios.get("/api/tools/frontend").then((res) => {
                setFrontendTools(res.data);
                setIsLoading(false);
            });
        } catch (error) {
            toast("Something went wrong");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getFrontendTools();
    }, []);

    return (
        <div className="w-full flex flex-col justify-center">
            <h3 className="text-xl text-center md:text-3xl font-bold mb-4 text-white">
                Frontend
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
                                {frontendTools?.map((tool) => (
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
                            </>
                        )}
                    </TableBody>
                </Table>
            </div>

            <Toaster />
        </div>
    );
};
