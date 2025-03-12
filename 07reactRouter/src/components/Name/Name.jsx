import React, { useState } from "react";
export default function Name() {
    const [name , setName] = useState('Neeraj')
    setName(Troyy)
    return (
        <div className="flex justify-center items-center bg-red-500">
            <div className="bg-red-500 text-black text-3xl p-4">{name}</div>
        </div>
    )
}