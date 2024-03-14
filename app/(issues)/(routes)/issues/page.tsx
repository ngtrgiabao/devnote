import CardLink from "@/components/card-link";
import { IssuesData } from "../../_components/data";

const IssuesPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mx-8 lg:mx-72 space-y-10">
            {IssuesData.map((data, idx) => (
                <>
                    <CardLink
                        key={idx}
                        link={data.link}
                        title={data.title}
                        description={data.description}
                    />
                </>
            ))}
        </div>
    );
};

export default IssuesPage;
