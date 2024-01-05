import { IMG_URLS } from "../utils/appConstants";

const CardContainer = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      resData?.info;
    return (
      <div className="res-cards">
        <img
          className="res-logo"
          src={
            IMG_URLS.RESTAURANT_IMG +
            cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default CardContainer;