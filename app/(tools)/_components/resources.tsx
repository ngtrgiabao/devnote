"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { TableData } from "./table";
import { ITools } from "./interface";

export const Resources = () => {
  const [resources, setResources] = useState<ITools[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getResourceTools = async () => {
    try {
      setIsLoading(true);
      await axios.get("/api/tools/resources").then((res) => {
        setResources(res.data);
        setIsLoading(false);
      });
    } catch (error) {
      toast("Something went wrong");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getResourceTools();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center">
      <h3 className="text-xl text-center md:text-3xl font-bold mb-4 text-white">
        Resources
      </h3>

      <div className="text-white ">
        <TableData data={resources} isLoading={isLoading} />
      </div>

      <Toaster />
    </div>
  );
};
