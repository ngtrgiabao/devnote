import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="pr-4 hover:opacity-75 transition text-white">
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0  bg-primary text-white">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
};
