import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_ITEM } from "../utils/constants";

interface RestaurantInfo {
  id: string;
  name: string;
  city: string;
  slugs: {
    restaurant: string;
    city: string;
  };
  uniqueId: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  costForTwoMessage: string;
  cuisines: string[];
  avgRating: number;
  feeDetails: {
    restaurantId: string;
    fees: {
      name: string;
      fee?: number;
    }[];
    totalFee: number;
    icon: string;
    message: string;
  };
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: {
    restaurantId: string;
    deliveryTime: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    lastMileTravel: number;
    serviceability: string;
    stressFactor: number;
    rainMode: string;
    longDistance: string;
    zoneId: number;
    slaString: string;
    lastMileTravelString: string;
    iconType: string;
  };
  availability: {
    nextCloseTime: string;
    visibility: boolean;
    opened: boolean;
    restaurantClosedMeta: Record<string, any>; // Define this more precisely if needed
  };
  aggregatedDiscountInfo: {
    header: string;
    shortDescriptionList: {
      meta: string;
      discountType: string;
      operationType: string;
    }[];
    descriptionList: {
      meta: string;
      discountType: string;
      operationType: string;
    }[];
    visible: boolean;
  };
  badges: Record<string, any>; // Define this more precisely if needed
  slugString: string;
  multiOutlet: boolean;
  isOpen: boolean;
  labels: {
    title: string;
    message: string;
  }[];
  logo: string;
  totalRatings: number;
  aggregatedDiscountInfoV2: {
    header: string;
    shortDescriptionList: {
      meta: string;
      discountType: string;
      operationType: string;
    }[];
    descriptionList: {
      meta: string;
      discountType: string;
      operationType: string;
    }[];
    couponDetailsCta: string;
  };
  type: string;
  nudgeBanners: {
    minValue: number;
    maxValue: number;
    priority: number;
    couponCode: string;
    discountInfo: {
      discountType: string;
      value: number;
    };
    lockedMessage: string;
    unlockedMessage: string;
    logoCtx: Record<string, any>; // Define this more precisely if needed
  }[];
  headerBanner: {
    url: string;
  };
  expectationNotifiers: {
    text: string;
    icon: {
      imageId: string;
    };
    popup: {
      cta: Record<string, any>; // Define this more precisely if needed
    };
    type: string;
    enrichedText: string;
    halfCardPopup: {
      halfCardPopupHeader: Record<string, any>; // Define this more precisely if needed
    };
  }[];
  generalPurposeInfoListV2: {
    cta: {
      info: {
        recordings: Record<string, any>; // Define this more precisely if needed
      };
      linkCta: Record<string, any>; // Define this more precisely if needed
    };
  }[];
  loyaltyDiscoverPresentationInfo: {
    logoCtx: {
      logo: string;
    };
    freedelMessage: string;
  };
  ratingSlab: string;
  orderabilityCommunication: {
    title: Record<string, any>; // Define this more precisely if needed
    subTitle: Record<string, any>; // Define this more precisely if needed
    message: Record<string, any>; // Define this more precisely if needed
    customIcon: Record<string, any>; // Define this more precisely if needed
  };
  hasBestsellerItems: boolean;
  hasGuiltfreeItems: boolean;
  cartOrderabilityNudgeBanner: {
    parameters: Record<string, any>; // Define this more precisely if needed
    presentation: Record<string, any>; // Define this more precisely if needed
  };
  latLong: string;
}

interface RestaurantDataItem {
  card: {
    "@type": string;
    info: RestaurantInfo;
    analytics: Record<string, any>; // Define this more precisely if needed
  };
  relevance: {
    type: string;
    sectionId: string;
  };
}

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] =
    useState<RestaurantDataItem | null>(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    let result = await fetch(RESTAURANT_ITEM + resId);
    let data = await result.json();
    console.log(data)
    setRestaurantData(data.data.cards[0].card);
  };

  // const { name, cuisines, areaName, costForTwo, locality, avgRating, cloudinaryImageId } = restaurantData?.data?.cards[0]?.card?.card?.info

  return (
    <div className="h-screen bg-slate-50">
      <div className="flex justify-center items-center px-20 py-10 ">
        <div className="flex flex-col items-start ">
          <h1 className="font-medium text-lg">{restaurantData?.card?.info?.name}</h1>
          {/* <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/+${cloudinaryImageId}`}></img> */}
          <div className="text-sm text-neutral-600">
            <p className="">{restaurantData?.card?.info?.cuisines?.join(", ")}</p>
            <p className="">
              {restaurantData?.card?.info?.locality},
              {restaurantData?.card?.info?.areaName}
            </p>
            {/* <p>Cost for Two: {restaurantData?.card?.info?.costForTwo / 100}</p> */}
            <p>Rating: {restaurantData?.card?.info?.avgRating} </p>
          </div>
        </div>
      </div >
    </div>
  );
};

export default RestaurantMenu;
