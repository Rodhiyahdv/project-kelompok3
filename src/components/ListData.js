import { useEffect, useState } from "react";

const ListData = () => {
    const [nasa, setNasa] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://apodapi.herokuapp.com/api/?count=20");
            const data = await response.json();
            console.log (data);
            setNasa(data);
        };
        fetchData();
    }, [])

    return (
        <div>            
            {nasa.map((items,index) => (
                <div key={index}>
                    <img src={items.url} width="150px" alt="NASA"/>
                    <p>Title : {items.title}</p>
                    <p>Copyright : {items.copyright}</p>
                </div>
                
            ))}

        </div>
    )
}

export default ListData;