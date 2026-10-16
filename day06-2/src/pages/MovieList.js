import React from "react";
import { dummy } from "../movieDummy";
import { Link } from "react-router-dom";

function MovieList(props){

    return(

        <div >
            
            <ul>

                {
                    dummy.results.map( (item)=>(
                        <li>
                            <Link to={`/detail/${item.title}/${item.poster_path}`}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>

        </div>
    )

}
export default MovieList