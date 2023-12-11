import React, { useEffect, useState } from 'react';
import restaurantInfo from './configs/constants';
import Shimmer from './shimmer';
import "./body.css"



const RestrauntCard = ({restInfo}) => {
    const img_cdn ="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    
    const info = restInfo.info;
    return <div className='rest_card'>
                <img className = "restraunt_image" src= {img_cdn + info.cloudinaryImageId} alt = "image"></img>
                <div className='restaurant-details'>
                    <h2 className='restaurant-name'>{info.name}</h2>
                    <p>Average Rating {info.avgRating}</p>
                    <p>Distance {info.sla.lastMileTravelString}</p>
                    <p>{info.cuisines.join(", ")}</p>
                </div>
            </div>;
}



const Body = () => {

    const [searchTxt, setSearchText] = useState("");
    const[restaurantCardData, setRestaurantCard] = useState([]);


    async function restrauntData() {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.115586&lng=72.852996&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log(jsonData);
        await setRestaurantCard(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    useEffect(() => {
        restrauntData();
    }, []);





    return (restaurantCardData?.length === 0) ? <Shimmer /> :<div className='body'>
    <div className='search-container'>

        <input type='text' class="search-input" onChange={(e) => setSearchText(e.target.value) } value= {searchTxt} ></input>
        <button class="search-button" onClick={"./"}> Search</button>

    </div>

    <div className='rastraunt_cards'>
        
        {
        restaurantCardData.map((rest) => {
            return <RestrauntCard restInfo = {rest}/>
        })
        }

    </div>

    
    </div>
}


export default Body;