import React, { useContext } from "react";
import userContext from "../Context/userContext";

export default function ShowingData() {
    const {user} = useContext(userContext)

    if (!user) return (
        <div className="flex justify-center items-center text-gray-400 h-full">
            Please Enter Details
        </div>
    );

    return (
        <div className="h-full flex flex-col">
            {/* Profile Header (Sticky at Top) */}
            <div className="bg-gray-900 p-4 flex items-center shadow-md sticky top-0 z-10">
                <img 
                    className="h-14 w-14 rounded-full border-2 border-white" 
                    src={user.image} 
                    alt="GitHub Profile"
                />
                <div className="ml-4">
                    <div className="text-lg font-semibold">{user.name}</div>
                    <div className="text-sm text-gray-400">{user.followers} Followers</div>
                </div>
            </div>

            {/* Gemini Response */}
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="bg-gray-700 p-6 rounded-lg text-sm text-gray-300 italic w-full max-w-lg">
                    {user.answer || "No response yet..."}
                </div>
            </div>
        </div>
    );
}