export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full">
            <div className="h-full overflow-hidden">
                <main className="pt-[80px] h-full">{children}</main>
            </div>
        </div>
    );
}
