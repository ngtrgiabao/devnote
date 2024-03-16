export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full text-white py-10 ">
            {children}
        </div>
    );
}
