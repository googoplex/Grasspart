import React from 'react'

const Movies =(props) => {
    return(
        <div className="text-center list-none flex-col flex-row">
            <ul>
            <li className="list-none flex-col"><h3>{props.name}</h3></li>
            <li className="list-none flex-col"><p>{props.password}</p></li>
            <li className="list-none flex-col"><p>{props.email}</p></li>
            <li className="list-none flex-col"><p>{props.age}</p></li>
            <li className="list-none flex-col"><p>{props.gender}</p></li>
            <li className="list-none flex-col"><p>{props.country}</p></li>
            </ul>
        </div>

    );
}

export default Movies;