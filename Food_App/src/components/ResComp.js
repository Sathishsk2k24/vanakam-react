import { CDN_IMG_URL } from "../utils/constants";
//object destructing in the prarameter
const RestComp = (props) => {
    const {resDetails} = props;
    const {cloudinaryImageId,name,cuisines,avgRating} = resDetails.info;
    const {deliveryTime} = resDetails?.info?.sla;
    return(
        <div className="rest-container" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res_logo" src= {CDN_IMG_URL+cloudinaryImageId} alt="res_Logo"/>
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{`get it in ${deliveryTime} minutes`}</h4>
        </div>
    )
}

export default RestComp