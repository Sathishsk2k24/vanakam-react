import RestComp from "./ResComp";
import { resList } from "../utils/mockData";
import { useState } from "react";

const BodyComp = () =>{
    const arr = useState(resList);
    console.log(arr);
    const [listOfRes, setListOfRes] = arr;
    return (
        <div className="body">
            <div className="filter-container">
                <button className="filter-btn" onClick={()=>{
                    setListOfRes(listOfRes.filter((res)=>res.info.avgRating < 4))
                }}> Top Rated Restaurants</button>
                </div> 
            <div className="restro-container" >
                {
                    listOfRes.map((res)=>{
                        return <RestComp key= {res.info.id} resDetails= {res}/>
                    })
                }
            </div>
        </div>
    )
};

export default BodyComp