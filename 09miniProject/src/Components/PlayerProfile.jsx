import React, { useContext } from "react";
import PlayerContext from "../Context/playerContext";

export default function PlayerProfile() {
    const {player} = useContext(PlayerContext)

    if(!player) return (
        <div>Please Enter player Details</div>
    )
    else if(!(player.playerName || player.level)) return (
        <div>Please Enter all the details</div>
    )
    return (
        <div className="text-3xl text-black t-5">Welcome {player.playerName} You are at level {player.level}</div>
    )
}