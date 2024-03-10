import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="p-4 border-b w-full flex items-start shadow-sm bg-black">
      <MobileSidebar />
    </div>
  )
}