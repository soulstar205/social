import React from 'react'
import './followData.css'


function FollowData(props){


    return(
        <div className="data-container">
            <div className="follows">
                <div className="img">{props.img}</div>
                <small className="small-1">{props.name}</small>
                <small className="small-2">Post Like{props.likes}</small>
                <div className="number">{props.id}</div>
            </div>
        </div>

    )
}
export default FollowData