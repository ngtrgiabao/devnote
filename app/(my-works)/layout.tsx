export default function MyWorksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full">
            <div className="h-full">
                <main className="pt-[80px] h-full flex">{children}</main>
            </div>
        </div>
    );
}
