"use client"

import { Logo } from "./logo"

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        {/* TODO: add content */}
      </div>
    </div>
  )
}