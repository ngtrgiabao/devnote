export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full py-10 flex justify-center text-white">
            {children}
        </div>
    );
}
