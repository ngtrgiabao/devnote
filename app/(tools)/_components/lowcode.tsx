"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { TableData } from "./table";
import { ITools } from "./interface";

export const LowCode = () => {
    const [frontendTools, setFrontendTools] = useState<ITools[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getLowcodeTools = async () => {
        try {
            setIsLoading(true);
            await axios.get("/api/tools/lowcode").then((res) => {
                setFrontendTools(res.data);
                setIsLoading(false);
            });
        } catch (error) {
            toast("Something went wrong");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getLowcodeTools();
    }, []);

    return (
        <div className="w-full flex flex-col justify-center">
            <h3 className="text-xl text-center md:text-3xl font-bold mb-4 text-white">
                Lowcode Platform / AI Tools
            </h3>

            <div className="text-white ">
                <TableData data={frontendTools} isLoading={isLoading} />
            </div>

            <Toaster />
        </div>
    );
};
