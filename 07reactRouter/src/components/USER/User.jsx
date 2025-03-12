import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
    const {userid} = useParams()
    return (
        <div className="flex items-center justify-center bg-gray-500">
            <div className="bg-gray-500 text-white text-3xl p-4">User: {userid}</div>
        </div>
    )
}