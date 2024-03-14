import Card from "../../_components/card";
import { WorksData } from "../../_components/data";

const MyWorks = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-white space-y-12 px-8">
            <h3 className="text-4xl font-bold tracking-[0.4em] text-nowrap">
                My Works
            </h3>

            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 text-white w-ful  ">
                {WorksData.map((data, idx) => {
                    return (
                        <Card
                            key={idx}
                            imageUrl={data.imageUrl}
                            title={data.title}
                            description={data.description}
                            github={data.github}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MyWorks;
