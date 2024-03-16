"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { TableData } from "./table";

interface FrontendTools {
    id: string;
    handbook: string;
    description: string;
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
                <TableData data={frontendTools} isLoading={isLoading} />
            </div>

            <Toaster />
        </div>
    );
};
