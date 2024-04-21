'use client'
import '@arco-design/web-react/dist/css/arco.css';
import { ResizeBox, Typography } from '@arco-design/web-react';
import Main from '@/components/content-manager/main';
const { Paragraph } = Typography;

const ResizeTigger = ()=> {
    return (
        <div className={"group  hover:bg-slate-600 hover:shadow-sm hover:opacity-5  w-5 h-full flex justify-center items-center "}>
            <div className={"group-hover:bg-white w-2 h-3/4 rounded-lg "}>
           
           </div>
        </div>
    )
}
const ResizeIcon = ()=> {
    return (
        <div className={"bg-black w-2 h-3/4 rounded-lg "}>
           
        </div>
    )
}

const ContentManagerPage = () => {
    

    return (
        <div  className={"flex-1 max-w-[calc(100% -500px)] overflow-scroll  p-10 box-border flex justify-center"}>
            <ResizeBox
                    resizeIcons={{
                        left: <ResizeIcon/>,
                        right: <ResizeIcon/>
                    }}
                    resizeTriggers={{
                        left: <ResizeTigger/>,
                        right: <ResizeTigger/>
                    }}
                    
                    directions={['right','left']}
                   className={"h-fit w-full min-w-[350px]: max-w-[calc(100vw -600px)]"}
                   component='div' 
                >  
                    <Main/>                
            </ResizeBox>
        </div>
        
    );
};



export default ContentManagerPage;