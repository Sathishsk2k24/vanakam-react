import { useEffect, useState } from "react";
import { REST_MENU_URL } from "./constants";
//this is custom hook
const useRestrauntMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async ()=>{
        var data = await fetch(REST_MENU_URL+resId);
        json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestrauntMenu