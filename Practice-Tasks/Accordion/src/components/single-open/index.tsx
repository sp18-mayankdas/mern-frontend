import { useState } from "react"
import { accordionItems } from "../../constants"

export const SingleOpen = ()=>{
    const [activeId , setActiveId] = useState<number|null>(null);
    
    const handleOpenAccordion = (id:number)=>{
        setActiveId(prev => prev === id ? null : id )
    }
    return (
        <>
        {
            accordionItems?.map((item)=>(
                <div key={item?.id} className="bg-green-50 p-6 text-black mx-auto max-w-[600px] my-4 rounded-lg">
                    <h1 onClick={()=>handleOpenAccordion(item?.id)}>{item?.question}</h1>
                    {
                        activeId === item?.id && <p>{item?.description}</p>
                    }
                </div>
            ))
        }
        </>
    )
}