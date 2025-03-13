import React, { useState } from "react";
import PlayerContext from "./playerContext.js";


const PlayerContextProvider = ({children}) => {
    const [player , setPlayer] = useState(null)


    return (
        <PlayerContext.Provider value={{player , setPlayer}}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider