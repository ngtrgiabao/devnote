export default function ToolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full">
            <main className="py-[80px] h-full">{children}</main>
        </div>
    );
}
