export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen">
            <div className="h-full overflow-hidden">
                <main className="pt-[80px] h-full flex-1">{children}</main>
            </div>
        </div>
    );
}
