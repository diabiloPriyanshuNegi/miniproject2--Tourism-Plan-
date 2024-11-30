import Card from './Card'

function Tours({tours,removeCard}){
return(
    <div>
        <div>
            <h1>Tour Plan</h1>
        </div>
        <div>
            {
                tours.map(tour=>{
                    return(<Card {...tour} removeCard={removeCard}></Card>)
                })
            }
        </div>
    </div>
)
}

export default Tours;