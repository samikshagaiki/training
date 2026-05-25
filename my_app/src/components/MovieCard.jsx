function MovieCard(props) {

    return(
        <>
            <div style={{border:"1px solid black", width:"300px", padding:"10px"}}>

                <img 
                    src={props.img} 
                    alt={props.title} 
                    style={{width:"100%"}}
                />

                <h2>{props.title}</h2>

                <p>Genre: {props.genre}</p>

                <p>Rating: {props.rating}</p>

                <p>Duration: {props.duration} mins</p>

                <p>Language: {props.language}</p>

            </div>
        </>
    )
}

export default MovieCard;