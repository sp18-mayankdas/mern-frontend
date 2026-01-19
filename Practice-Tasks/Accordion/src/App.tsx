import { useState } from "react";
import { MultiOpen, SingleOpen } from "./components";

export default function App() {
  
  const [isSingleOpen,setIsSingleOpen] = useState(true);
  const [isMultiOpen,setIsMultiOpen] = useState(false);


  return (
    <main className="bg-gray-800 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center py-10">Accordion</h1>

      <div className="flex justify-center items-center gap-10">
        <h1 className={`${isSingleOpen && 'underline'}`} onClick={()=>{
          setIsSingleOpen(!isSingleOpen) 
          setIsMultiOpen(!isMultiOpen)}}>Single Open</h1>
        <h1
        className={`${isMultiOpen && 'underline'}`} onClick={()=>{ 
          setIsSingleOpen(!isSingleOpen) 
          setIsMultiOpen(!isMultiOpen)}}>Multi Open</h1>
      </div>

      {isSingleOpen && <SingleOpen/>}
      {isMultiOpen && <MultiOpen/>}
    </main>
  );
}
