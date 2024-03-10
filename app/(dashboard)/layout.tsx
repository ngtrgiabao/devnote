import { Navbar } from "./_components/navbar";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen">
      <div className="h-full overflow-hidden">
        <Navbar />
        <main className="pt-[80px] h-full flex-1 dark">
          {children}
        </main>
      </div>
    </div>
  )
}
