import React from "react"

function TeamCard(props) {
    return(
        <section id={props.Section}>
        <div className='Team-card'>
        <img
        className='Team-img'
        src={props.Img}
        />
        <p>{props.Name}</p>
    </div>
    </section>
    )
}

export default TeamCard;