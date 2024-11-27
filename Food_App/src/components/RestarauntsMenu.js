import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
const RestarauntMenu = () => {
    const { resId } = useParams();
    //custom hook are used for modularity in order to fetch the corresponding restaraunt menu details
    resInfo = useRestrauntMenu(resId);
    if (resInfo == null) return <Shimmer />
    var { name, cuisines, avgRatingString } = resInfo?.cards[2]?.card?.card?.info
    var { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card
    return (<>
        <h1>{name}</h1>
        <h2>{avgRatingString}</h2>
        <h2>Cuisines:</h2>
        <h4>
            {cuisines.join(",")}
        </h4>
        <h2>Menu's</h2>
        <ul>{
            itemCards.map(data => <li key={data.card.info.id}>{data.card.info.name} - ₹{data.card.info.price / 100}</li>)
        }
        </ul>
    </>)
}
export default RestarauntMenu