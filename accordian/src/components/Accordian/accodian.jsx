import React, { useState } from "react"
import accordina.css"
function Accordian(props){

    var [itemId,setItemId]=useState(null)

    function handleClick(currentID){
       setItemId(currentID)


    }







    return(<div class = "wrapper" onClick={ ()=>{
        handleClick({props.id})
    }}>
        <h1 class="title">{props.title}</h1>
        {itemId===props.id?<p class="content">{props.content}</p>:null}
    </div>)

}

export default Accordian