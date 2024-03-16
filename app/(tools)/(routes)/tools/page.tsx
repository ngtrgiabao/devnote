import { Animation } from "../../_components/animation";
import { Frontend } from "../../_components/frontend";
import { LowCode } from "../../_components/lowcode";

const ToolsPage = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-10">
            <Frontend />
            <Animation />
            <LowCode />
        </div>
    );
};

export default ToolsPage;
