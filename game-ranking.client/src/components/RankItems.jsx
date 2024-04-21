import React, {useState, useEffect} from "react";

const RankItems = ()=>{
    const [items, setItems] = useState([])
    const dataType = 1;

    useEffect(() => {
        fetch('item/' + {dataType})
            .then(results=> results.json())
            .then(data=> setItems(data))
    }, []);
    
    return(
        <main>
            {
            (items.length === 0)?
            <div>Loading...</div> :
            <div>
                {items.map(item=> <h3 key={item.id}>{item.title}</h3>)}
            </div>
            }
        </main>
    );
}

export default RankItems