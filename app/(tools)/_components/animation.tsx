"use client"

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { TableData } from "./table";

interface AnimationTools {
    id: string;
    handbook: string;
    description: string;
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
                <TableData data={animationTools} isLoading={isLoading} />
            </div>

            <Toaster />
        </div>
    );
};
