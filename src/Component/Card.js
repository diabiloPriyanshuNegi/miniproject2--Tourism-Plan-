import React,{useState} from 'react';

function Card({name,id,price,info,image,removeCard}){
    
    const[read,setRead]=useState(false);
    
    const desc = read?info:`${info.substring(0,200)}...`;
    function readHandler(){
        setRead(!read);
    }
    return(
    <div>
        <img src={image}></img>
        <div>
            <div>
                <h3>{price}</h3>
                <h3>{name}</h3>
            </div>
            <div>
                {desc}
                <span onClick={readHandler}>{read?'..Show Less':'Read More'}</span>
            </div>
        </div>
        <button onClick={()=>{removeCard(id)}}>Not Interested</button>
    </div>
)
}

export default Card;