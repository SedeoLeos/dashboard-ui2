
import Navbar from "@/components/dashboard/navbar"
import Sidebar from "@/components/dashboard/sidebar"

export default function Layout({children}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar/>
      <div className="flex flex-col">
        <Navbar/>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            {children}
        </main>
      </div>
    </div>
  )
}



