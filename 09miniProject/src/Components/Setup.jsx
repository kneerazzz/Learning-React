import React, { useContext, useState } from "react";
import PlayerContext from "../Context/playerContext";

export default function Setup() {
    const [playerName , setPlayerName] = useState('')
    const [level , setLevel] = useState('')
    const {setPlayer} = useContext(PlayerContext)
    const handlePlayer = (e) => {
        e.preventDefault();
        setPlayer({playerName , level})
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="p-8 bg-white shadow-lg rounded-2xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Profile Setup
                </h2>
                
                <div className="space-y-4">
                    {/* Player Name Input */}
                    <input
                        className="w-full p-3 border border-gray-600 bg-gray-300 text-black rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter Player Name"
                        value={playerName}
                        type="text"
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                    
                    {/* Level Input */}
                    <input
                        className="w-full p-3 border border-gray-600 text-black bg-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter Level"
                        value={level}
                        type="number"
                        onChange={(e) => setLevel(e.target.value)}
                    />

                    {/* Submit Button */}
                    <button
                        onClick={handlePlayer}
                        className="w-full  p-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg transition duration-300"
                    >
                        Enter
                    </button>
                </div>
            </div>
        </div>
    )
}