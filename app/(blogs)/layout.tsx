export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen">
            <div className="h-full overflow-hidden">
                <main className="pt-[80px] h-">{children}</main>
            </div>
        </div>
    );
}
