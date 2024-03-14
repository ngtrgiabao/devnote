interface CardLinkProps {
    title: string;
    description: string;
}

const CardLink = ({ title, description }: CardLinkProps) => {
    return (
        <a
            href="/"
            className="relative h-full w-full transform transition-all duration-300 ease-in-out"
        >
            <div className="p-4 rounded-lg bg-slate-800 flex flex-col space-y-4 border border-gray-400 relative z-20 h-full text-justify">
                <div className="space-y-4">
                    <h3 className="text-base text-blue-400 font-bold capitalize">
                        🐳 {title}
                    </h3>
                    <p className="font-extralight text-xs line-clamp-3">
                        {description}
                    </p>
                </div>
            </div>
            <div className="absolute -inset-[0.01em] rounded-md blur-md bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 z-10"></div>
        </a>
    );
};

export default CardLink;
