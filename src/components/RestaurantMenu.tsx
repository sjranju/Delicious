import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CLOUDINARY_URL, COUPON_URL } from "../utils/constants";
import { AiFillStar } from 'react-icons/ai'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { MdOutlineTimelapse } from 'react-icons/md'
import * as TYPES from '../utils/interfaces'
import useRestaurantMenu from "../utils/useRestaurantMenu"
import ItemCategory from "./ItemCategory";
import RestaurantAddress from "./RestaurantAddress";
import RestaurantLicenseInfo from "./RestaurantLicenseInfo";
import NestedItemCategory from "./NestedItemCategory";
import MenuCarousel from "./MenuCarousel";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [vegOnly, setVegOnly] = useState<boolean>(false)
  const [carouselIndicator, setCarouselIndicator] = useState(0)
  // const [isChecked, setIsChecked] = useState<boolean>(false)
  const { topPicks, resInfo, restaurantMenu, offerDetails, setRestaurantMenu, setOfferDetails, setResInfo, setTopPicks } = useRestaurantMenu(resId!)

  const handleVegOnly = () => {
    setVegOnly(!vegOnly)
    console.log('vegOnly?', vegOnly)
    // if (!isChecked) {
    //     console.log('isveg', restaurantMenu?.filter(menu => menu?.card?.card?.itemCards?.filter(item =>
    //         item?.card?.info?.isVeg === 1 || item?.card?.info?.itemAttribute.vegClassifier === 'VEG'
    //     ))!)
    //     setVegOnly(restaurantMenu?.filter(menu => menu?.card?.card?.itemCards?.filter(item =>
    //         item?.card?.info?.isVeg ? item?.card?.info?.isVeg >= 1 : ''))!)
    // } else {
    //     setVegOnly(restaurantMenu!)
    // }
  }

  return (
    <div className="h-full w-full bg-slate-50 ">
      <div className="flex flex-col items-center space-y-6 justify-around max-w-[800px] mx-auto ">
        <div className="flex flex-row justify-between items-center bg-sky-50 w-full pt-10 pb-2 px-2">
          <div>
            {
              resInfo?.card?.card?.info?.cloudinaryImageId ?
                <img src={CLOUDINARY_URL + resInfo.card.card.info.cloudinaryImageId}
                  className="w-52 h-48 rounded-sm" />
                : ''
            }

          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-semibold text-lg">{resInfo?.card?.card?.info?.name}</h1>
            <div className="text-sm text-neutral-600">
              <p className="">{resInfo?.card?.card?.info?.cuisines?.join(", ")}</p>
              <p className="">
                {resInfo?.card?.card?.info?.locality + ', ' + resInfo?.card?.card?.info?.areaName}
              </p>
              <div className="flex items-center space-x-4 font-bold my-1">
                <div className="flex items-center space-x-1"><MdOutlineTimelapse size={20} />{resInfo?.card?.card?.info?.sla?.deliveryTime} MINS</div>
                <div className="flex items-center space-x-1"><HiOutlineCurrencyRupee size={20} />{parseInt(resInfo?.card?.card?.info?.costForTwo!) / 100} for two</div>
              </div>
              {/* <p>Cost for Two: {resInfo?.card?.info?.costForTwo / 100}</p> */}
              <div className="flex items-center space-x-2 divide-x-2 divide-slate-400 border border-slate-300 my-1">
                <div className="flex items-center space-x-2 text-green-700 font-bold p-1"><AiFillStar color="green" size={18} />{resInfo?.card?.card?.info?.avgRating} </div>
                <div className="text-xs pl-2">{resInfo?.card?.card?.info?.totalRatings}+ ratings</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4 pt-2 max-w-[500px] md:max-w-[800px] overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {offerDetails?.card?.gridElements?.infoWithStyle?.offers?.map(offerItem => (
            <div key={offerItem.info.offerIds[0]} className="shrink-0 w-44">
              <div className="flex flex-col items-center border rounded-md border-zinc-300 w-44 h-12 justify-around ">
                <div className="flex flex-row text-sm text-[#686b70] font-bold justify-center items-center">
                  <img src={COUPON_URL + offerItem?.info?.offerLogo} alt="" className="w-4 h-4" />
                  {
                    offerItem?.info?.header
                  }
                </div>
                <div className="text-[#93959f] text-[9px] font-bold">
                  {
                    offerItem?.info?.couponCode + ' | ' + offerItem.info.description
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center w-full ">
          {
            restaurantMenu &&
            restaurantMenu.map((menu, i) => (
              menu.card.card["@type"] === TYPES.CardType.MenuVegFilterAndBadge ?
                <label key={i} className="relative inline-flex items-center cursor-pointer  border-b pb-4">
                  <input type="checkbox" value='' className="sr-only peer" checked={vegOnly} onChange={handleVegOnly} />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-700 mr-2">Veg Only</span>
                  <div className="w-[36px] h-[16px] bg-gray-50 rounded-sm peer dark:bg-gray-700 peer-checked:after:translate-x-full 
              peer-checked:after:border-gray-700 after:content-[''] after:absolute after:top-[2.8px] after:left-[66px] 
              peer-checked:after:left-[69px] after:bg-white after:border-gray-300 after:border after:rounded-sm 
              after:h-[15px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-green-700"></div>
                </label>
                : menu.card.card["@type"] === TYPES.CardType.MenuCarousel ? (
                  <>
                    <p className="font-bold text-xl pt-4">{menu.card.card.title}</p>
                    <MenuCarousel key={i} items={menu.card.card} />
                  </>
                )
                  : menu.card.card["@type"] === TYPES.CardType.ItemCategory ?
                    resId &&
                    <ItemCategory key={i} itemCard={menu.card.card} resId={resId} vegOnly={vegOnly} />
                    : menu.card.card["@type"] === TYPES.CardType.NestedItemCategory ?
                      resId &&
                      <NestedItemCategory key={i} nestedCategories={menu?.card?.card} resId={resId} vegOnly={vegOnly} />
                      : menu.card.card["@type"] === TYPES.CardType.RestaurantAddress ?
                        <RestaurantAddress key={i} itemCard={menu.card.card} />
                        : menu.card.card["@type"] === TYPES.CardType.RestaurantLicenseInfo ?
                          <RestaurantLicenseInfo key={i} itemCard={menu.card.card} />
                          : ''
            ))
          }

        </div>
      </div >
    </div>
  );
};

export default RestaurantMenu;
