import Card from "../../_components/card";
import { worksData } from "../../_components/data";

const MyWorks = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-white space-y-12  px-8">
            <h3 className="text-4xl font-bold tracking-[0.4em] text-nowrap">
                My Works
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-white w-full">
                {worksData.map((data) => {
                    return (
                        <Card
                            id={data.id}
                            imageUrl={data.imageUrl}
                            title={data.title}
                            description={data.description}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MyWorks;
