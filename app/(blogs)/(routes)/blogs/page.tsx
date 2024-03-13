import CardLink from "@/components/card-link";
import { blogData } from "../../_components/data";

const BlogPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mx-8 lg:mx-72 space-y-10">
            {blogData.map((data, index) => (
                <>
                    <CardLink
                        title={data.title}
                        description={data.description}
                    />
                </>
            ))}
        </div>
    );
};

export default BlogPage;
