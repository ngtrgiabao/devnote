import CardLink from "@/components/card-link";
import { BlogData } from "../../_components/data";

const BlogsPage = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-10">
            {BlogData.map((data, idx) => (
                <CardLink
                    key={idx}
                    title={data.title}
                    link={data.link}
                    description={data.description}
                />
            ))}
        </div>
    );
};

export default BlogsPage;
