import { useState } from "react"
import { accordionItems } from "../../constants"

export const MultiOpen = ()=>{
    const [activeId , setActiveId] = useState<number[]>([]);

    const handleOpenAccordion = (id:number)=>{
        setActiveId(prev => prev?.includes(id) ? prev?.filter(itemId => itemId !== id ) :[...prev , id])
    }
    return (
        <>
        {
            accordionItems?.map((item)=>(
                <div key={item?.id} className="bg-green-50 p-6 text-black mx-auto max-w-[600px] my-4 rounded-lg">
                    <h1 onClick={()=>handleOpenAccordion(item?.id)}>{item?.question}</h1>

                    {
                        activeId?.includes(item?.id) && <p>{item?.description}</p>
                    }
                </div>
            ))
        }
        </>
    )
}