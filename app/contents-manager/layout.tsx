import Leftbar from "@/components/content-manager/leftbar";
import Navbar from "@/components/content-manager/navbar";
import Sidebar from "@/components/content-manager/sidebar";

const ContentManagerLayout = ({children}:Readonly<{
    children: React.ReactNode;
}>)=>{
    return (
        <div className="flex bg-gray-100 font-sans text-gray-900">
            <Sidebar/>
            <div className="flex h-screen flex-1 flex-col">
                <Navbar/>
                {children}  
            </div>
            <Leftbar/>
    </div>);
}
export  default ContentManagerLayout