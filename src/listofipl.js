const TeamList = (props) => {
    const id = "#" + props.Id;
    return(
        <>
        <ul>
            <li className="color: black"><a href={id}>{props.Name}</a></li>
        </ul>
        </>
    )
}

export default TeamList