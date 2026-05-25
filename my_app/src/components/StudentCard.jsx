function StudentCard(props) {

    return(
        <>
            <div style={{border:"1px solid black", width:"300px", padding:"10px"}}>

                

                <h3>{props.name}</h3>

                <p>Age: {props.age}</p>

                <p>City: {props.city}</p>


            </div>
        </>
    )
}

export default StudentCard;