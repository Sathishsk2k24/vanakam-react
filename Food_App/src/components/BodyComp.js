import RestComp from "./ResComp";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComp = () =>{
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

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
    if(!onlineStatus) 
        return <div><h1>You're Offline, please check your internet connection!</h1></div>
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
                        return <Link key= {res.info.id} to={"/restaraunt/"+res.info.id}><RestComp  resDetails= {res}/></Link>
                    })
                }
            </div>
        </div>
    )
};

export default BodyComp