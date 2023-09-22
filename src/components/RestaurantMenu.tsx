import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_ITEM, CLOUDINARY_URL, COUPON_URL } from "../utils/constants";
import { AiFillStar } from 'react-icons/ai'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { MdOutlineTimelapse } from 'react-icons/md'
import * as TYPES from '../utils/interfaces'

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState<TYPES.RestaurantDataItem | null>(null);
  const [offerDetails, setOfferDetails] = useState<TYPES.OfferCards | null>(null)
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    let result = await fetch(RESTAURANT_ITEM + resId);
    let data = await result.json();
    console.log(data)
    setRestaurantData(data.data.cards[0].card);
    setOfferDetails(data.data.cards[1].card)
  };
  // const { name, cuisines, areaName, costForTwo, locality, avgRating, cloudinaryImageId } = restaurantData?.data?.cards[0]?.card?.card?.info
  console.log(offerDetails);

  return (
    <div className="h-screen bg-slate-50 w-full">
      <div className="flex flex-col items-center justify-around">
        <div className="flex justify-around items-center px-20 py-10 bg-sky-50">
          <div>
            <img src={CLOUDINARY_URL + restaurantData?.card?.info?.cloudinaryImageId}
              className="w-64 h-64" />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-medium text-lg">{restaurantData?.card?.info?.name}</h1>
            <div className="text-sm text-neutral-600">
              <p className="">{restaurantData?.card?.info?.cuisines?.join(", ")}</p>
              <p className="">
                {restaurantData?.card?.info?.locality + ', ' + restaurantData?.card?.info?.areaName}
              </p>
              <div className="flex items-center space-x-4 font-bold my-1">
                <div className="flex items-center space-x-1"><MdOutlineTimelapse size={20} />{restaurantData?.card?.info?.sla?.deliveryTime} MINS</div>
                <div className="flex items-center space-x-1"><HiOutlineCurrencyRupee size={20} />{parseInt(restaurantData?.card?.info?.costForTwo!) / 100} for two</div>
              </div>
              {/* <p>Cost for Two: {restaurantData?.card?.info?.costForTwo / 100}</p> */}
              <div className="flex items-center space-x-2 divide-x-2 divide-slate-400 border border-slate-300 my-1">
                <div className="flex items-center space-x-2 text-green-700 font-bold p-1"><AiFillStar color="green" size={18} />{restaurantData?.card?.info?.avgRating} </div>
                <div className="text-xs pl-2">{restaurantData?.card.info.totalRatings}+ ratings</div>
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-row items-center max-w-md ">
          {offerDetails?.card?.gridElements?.infoWithStyle?.offers?.map(offerItem => (
            <div className="snap-x scroll-m-2 snap-start scroll-smooth">
              <div key={offerItem.info.offerIds[0]}
                className="flex flex-col items-center border border-zinc-400 w-44 h-12 justify-center ">
                <div className="flex flex-row text-sm ">
                  <img src={COUPON_URL + offerItem?.info?.offerLogo} alt="" className="w-4 h-4" />
                  {
                    offerItem?.info?.header
                  }
                </div>
                <div className="">
                  {
                    offerItem?.info?.couponCode
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div >
    </div>
  );
};

export default RestaurantMenu;
