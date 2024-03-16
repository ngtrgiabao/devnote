import { Animation } from "../../_components/animation";
import { Frontend } from "../../_components/frontend";

const ToolsPage = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-10">
            <Frontend />
            <Animation />
        </div>
    );
};

export default ToolsPage;
