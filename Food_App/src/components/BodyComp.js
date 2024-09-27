import RestComp from "./ResComp";
import { resList } from "../utils/mockData";

const BodyComp = () =>{
    return (
        <div className="body">
            <div className="search-container">Search</div> 
            <div className="restro-container" >
                {
                    resList.map((res)=>{
                        return <RestComp key= {res.info.id} resDetails= {res}/>
                    })
                }
            </div>
        </div>
    )
};

export default BodyComp