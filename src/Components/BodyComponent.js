import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import ShimmerComponent from "./ShimmerComponent";

const BodyComponent = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurants,setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.332574920394713&lng=78.05969763547184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurant = await data.json();
    console.log(restaurant)
    console.log(restaurant?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    setRestaurantData(
      restaurant?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestaurants(
        restaurant?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
  };

  return restaurantData?.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restaurantData.filter(
              (ele) => ele.info.avgRating > 4
            );
            setfilteredRestaurants(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search-container">
          <input
            onChange={(e) => setsearchText(e.target.value)}
            type="text"
            value={searchText}
          ></input>
          <button onClick={()=>{
            const filteredRestaurants = searchText!=='' ?  restaurantData.filter((ele)=>ele.info.name.toLowerCase().includes(searchText.toLowerCase())) : restaurantData
            setfilteredRestaurants(filteredRestaurants)
          }}>Search</button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <CardContainer key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
