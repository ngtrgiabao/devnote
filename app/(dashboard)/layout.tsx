import { Navbar } from "./_components/navbar";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full">
      <div className="flex h-full w-56 flex-col fixed inset-y-0">
        <Navbar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">
        {children}
      </main>
    </div>
  )
}
