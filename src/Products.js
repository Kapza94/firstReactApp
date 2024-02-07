import React from "react"; 

export default function Products(props){
return (
    <div>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <h4>${props.price}</h4>
    </div>
)
}