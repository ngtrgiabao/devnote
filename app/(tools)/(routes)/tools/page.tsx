import { Animation } from "../../_components/animation";
import { Backend } from "../../_components/backend";
import { Cloud } from "../../_components/cloud";
import { Databases } from "../../_components/databases";
import { Frontend } from "../../_components/frontend";
import { LowCode } from "../../_components/lowcode";
import { Resources } from "../../_components/resources";

const ToolsPage = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-10">
            <Frontend />
            <Backend />
            <Databases />
            <Cloud />
            <Animation />
            <LowCode />
            <Resources />
        </div>
    );
};

export default ToolsPage;
