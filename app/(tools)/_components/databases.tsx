"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { TableData } from "./table";
import { ITools } from "./interface";

export const Databases = () => {
  const [databases, setDatabases] = useState<ITools[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDbTools = async () => {
    try {
      setIsLoading(true);
      await axios.get("/api/tools/databases").then((res) => {
        setDatabases(res.data);
        setIsLoading(false);
      });
    } catch (error) {
      toast("Something went wrong");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDbTools();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center">
      <h3 className="text-xl text-center md:text-3xl font-bold mb-4 text-white">
        Databases
      </h3>

      <div className="text-white ">
        <TableData data={databases} isLoading={isLoading} />
      </div>

      <Toaster />
    </div>
  );
};
