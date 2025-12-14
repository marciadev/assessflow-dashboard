import Header from "./Header"
import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-[color:var(--color-gray-50)] text-[color:var(--color-gray-900)] min-h-screen flex flex-col">
      <Header />
      <main className="w-full flex-1 px-6 py-8 max-w-[1280px] mx-auto">{children}</main>
    </div>
  )
}

export default Layout