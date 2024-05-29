import React, { useRef } from 'react'
import "./player.css"
import vidio from '../../assets/vidio.mp4'

function player({ playState, setPlayState }) {

    const player = useRef(null);
    const closepPlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false)
        }

    }

    return (

        <div className={`vidio-player ${playState ? '' : 'hide'}`} ref={player}
            onClick={closepPlayer}
        >
            <video src={vidio} muted controls autoPlay></video>
        </div>
    )
}

export default player
