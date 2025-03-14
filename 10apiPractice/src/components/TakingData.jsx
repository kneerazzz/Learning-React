import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import userContext from "../Context/userContext";
const TakingData = () => {
    const api_key = import.meta.env.VITE_API_KEY;
    const [username , setUsername] = useState('')
    const [question , setQuestion] = useState('')
    const {setUser} = useContext(userContext)
    const [followers , setFollowers] = useState()
    const [image , setImage] = useState()
    const [name , setName] = useState('')
    const [answer , setAnswer] = useState('')

    const getGeminiResponse = async () => {
        if(!question.trim()) {
            console.log("No quesion entered.")
            return;
        }
        try {
            const response = await fetch("http://localhost:5000/api/gemini", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({question})
            });
            const data = await response.json();
            console.log("gemini response: ",data)
            const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "NO response recieved. ";
            setAnswer(text)
            setUser(prevUser => ({
                ...prevUser,
                answer: text
            }));
            console.log(text)
        } catch(error) {
            console.error("Google Gemini api error: ", error);
        }
    };
    const handleInfo = async (e) => {

        e.preventDefault();
        if(username) {
            const response = await fetch(`https://api.github.com/users/${username}` , {
                headers: {
                    Authorization: `token ${api_key}`
                }
        })
            const data = await response.json();
            if(data.message === "Not Found"){
                console.log("user not found:")
                return;
            }
            console.log(data)
            setFollowers(data.followers)
            setImage(data.avatar_url)

            setUser({
                name: data.name || username,
                followers: data.followers,
                image: data.avatar_url
            })
            if(!(data.name)) {
                setName(username)
            }
            else{
                setName(data.name)
            }
        }
        await getGeminiResponse();
};


    return (
        <div className="absolute left-0 top-0 h-full w-1/2 flex justify-center items-center bg-blue-400">
            <div className="bg-white p-8 w-full rounded-2xl shadow-lg max-w-md">
                <h2 className="text-gray-700 text-3xl font-bold text-center mb-6">
                    Enter Details
                </h2>
                <div className="space-y-4">
                    <input 
                        className="w-full border border-gray-600 bg-gray-300 p-3 text-lg rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        type="text" onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username" value={username} 
                    />
                    <h2 className="w-full text-2xl font-semibold text-blue-gray-500 text-center mb-2">
                        Ask Gemini
                    </h2>
                    <input 
                        className="w-full border border-gray-700 p-3 bg-gray-300 text-lg rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        type="text" onChange={(e) => setQuestion(e.target.value)} 
                        placeholder="Ask Gemini" value={question}
                    />
                    <button 
                        className="bg-blue-600 hover:bg-blue-400 rounded-lg p-2 cursor-pointer text-center px-4 w-full" 
                        onClick={handleInfo}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
        );
}



export default TakingData;