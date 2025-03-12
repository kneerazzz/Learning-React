import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData()
    /*


    const [data , setData] = useState([])
    useEffect(() => {
    fetch('https://api.github.com/users/kneerazzz')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setData(data)
     })
    } , [Github])

    */
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex items-center justify-center">
            <div>GitHub followers: {data.followers}</div>
            <img className="h-10 w-10 cursor-pointer rounded-3xl ml-3" alt="Git picture" src={data.avatar_url}/>
        </div>
    )
}


export default Github

export const githubInfoLoader  = async () => {
    console.log('Fetching the data ....')
    const response = await fetch('https://api.github.com/users/kneerazzz')
    if(!response.ok) {
        throw new Error("Failed to fetch data from github")
    }
    const data = await response.json()
    return data
    //return response.json()
}