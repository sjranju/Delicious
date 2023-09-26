import React from "react";
import { useParams } from "react-router-dom";
import { CLOUDINARY_URL, COUPON_URL } from "../utils/constants";
import { AiFillStar } from 'react-icons/ai'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { MdOutlineTimelapse } from 'react-icons/md'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import * as TYPES from '../utils/interfaces'
import cloneDeep from 'clone-deep'
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { topPicks, resInfo, restaurantMenu, offerDetails, setRestaurantMenu, setOfferDetails, setResInfo, setTopPicks } = useRestaurantMenu(resId!)

  const handleCategoryClick = (title: string) => {
    let restaurantMenuClone: TYPES.RestaurantMenu = cloneDeep(restaurantMenu)
    restaurantMenuClone?.cards?.find(card => card?.card?.card?.title === title)?.card?.card?.showDetails === true ?
      restaurantMenuClone.cards.find(card => card.card.card.title === title)!.card.card.showDetails = false
      : restaurantMenuClone.cards.find(card => card.card.card.title === title)!.card.card.showDetails = true
    setRestaurantMenu(restaurantMenuClone)
  }

  // console.log(resInfo)

  return (
    <div className="h-screen w-full bg-slate-50 ">
      <div className="flex flex-col items-center space-y-6 justify-around max-w-[800px] mx-auto divide-y-2 divide-dashed divide-gray-300">
        <div className="flex flex-row justify-around items-center bg-sky-50 w-full pt-10 pb-2">
          <div>
            <img src={CLOUDINARY_URL + resInfo?.card?.card?.info?.cloudinaryImageId}
              className="w-52 h-48 rounded-sm" />
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
        <div className="flex flex-row items-center justify-between overflow-x-auto space-x-4 pt-2 max-w-[800px]">
          {offerDetails?.card?.gridElements?.infoWithStyle?.offers?.map(offerItem => (
            <div key={offerItem.info.offerIds[0]} className="">
              <div className="flex flex-col items-center border rounded-md border-zinc-400 w-44 h-12 justify-around ">
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
        <div className="flex flex-col justify-center w-full space-y-2">
          {
            restaurantMenu?.cards?.map((card, i) => (
              <div key={i} className="space-y-4">
                <button className="font-bold text-neutral-700 flex flex-row items-center justify-between w-full px-6 py-4 bg-slate-200 rounded-lg"
                  onClick={() => handleCategoryClick(card?.card?.card?.title)}>
                  {card?.card?.card?.title ?
                    <><div className="">
                      {card?.card?.card?.title + '(' + card?.card?.card?.itemCards?.length + ')'}
                    </div><span className="">
                        {card?.card?.card?.showDetails === true ?
                          <IoIosArrowUp size={22} />
                          : <IoIosArrowDown size={22} />}
                      </span></>
                    : ''
                  }
                </button>
                {card?.card?.card?.showDetails === true ?
                  card?.card?.card?.itemCards?.map(item => (
                    <div key={item?.card?.info?.id} className="px-6">
                      {
                        item?.card?.info?.name
                      }
                    </div>
                  ))
                  : ''
                }
              </div>
            ))
          }

        </div>
      </div >
    </div>
  );
};

export default RestaurantMenu;
