import RestComp from "./ResComp";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyComp = () =>{
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
        },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const resObj = await data.json();
        setListOfRes(resObj.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRes(resObj.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    };

//conditional rendering
    return listOfRes.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter-container">
                <div className="search-container">
                    <input className="search" type="text" value= {searchText} onChange={(event)=>{
                        setSearchText(event.target.value)
                    }}></input>
                    <button className="btn-search" onClick ={()=>{
                        let filteredRes = listOfRes.filter((data)=> data.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRes(filteredRes);
                    }}> Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    setListOfRes(listOfRes.filter((res)=>res.info.avgRating > 4))
                }}> Top Rated Restaurants</button>
                </div> 
            <div className="restro-container" >
                {
                    filteredRes.map((res)=>{
                        return <RestComp key= {res.info.id} resDetails= {res}/>
                    })
                }
            </div>
        </div>
    )
};

export default BodyComp