import CardLink from "@/components/card-link";
import { issuesData } from "../../_components/data";

const IssuesPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mx-8 lg:mx-72 space-y-10">
            {issuesData.map((data, idx) => (
                <>
                    <CardLink
                        key={idx}
                        title={data.title}
                        description={data.description}
                    />
                </>
            ))}
        </div>
    );
};

export default IssuesPage;
