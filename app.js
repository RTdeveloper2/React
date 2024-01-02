import React from 'react';
import ReactDOM  from 'react-dom';

/*
Header - logo component, nav component
body - search, card container, cards
footer - copyrights etc.
*/
const HeaderComponent = ()=>{
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByyCnOjTNAniH4KSPPBKE3riX6gbi66M7W35FxmQ2BkeMJn48lQzsT--Id7uBmyMn4GQ&usqp=CAU.png'/>
      </div>
      <div className='Nav'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
const resData = [{
  "info": {
      "id": "657144",
      "name": "Chinese Veg Crunch by Punjabi Angithi",
      "cloudinaryImageId": "ed0be6feca1ac51fab30fa829ae8eb2e",
      "locality": "Rajpur Road",
      "areaName": "Hathibarkala",
      "costForTwo": "₹300 for two",
      "cuisines": [
          "North Indian",
          "Chinese"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "394936",
      "avgRatingString": "4.3",
      "totalRatingsString": "100+",
      "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2024-01-03 00:00:00",
          "opened": true
      },
      "badges": {
          "imageBadges": [
              {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
              }
          ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {
                  "badgeObject": [
                      {
                          "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                          }
                      }
                  ]
              },
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
      "context": "seo-data-8b7adab3-5aa6-4985-b431-5e8835911fa7"
  },
  "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-veg-crunch-by-punjabi-angithi-rajpur-road-hathibarkala-dehradun-657144",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}]
const CardContainer = (props)=>{
  const {resData} = props;
  const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info
  return (
    <div className='res-cards'>
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}
const BodyComponent = ()=>{
    return (
      <div className='Body'>
         <div className='search'>Search</div>
         <div className='res-container'>
          {resData.map(restaurant=><CardContainer resData={restaurant}/>)}
         </div>
      </div>
    )
}
const AppContainer = ()=>{
  return (
    <div className='app'>
     <HeaderComponent/>
     <BodyComponent/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppContainer/>)
