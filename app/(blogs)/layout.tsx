export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full overflow-hidden text-white">
            <main className="py-10 h-full mx-8 lg:mx-72">{children}</main>
        </div>
    );
}
