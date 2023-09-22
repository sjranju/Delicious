type Offer = {
    info: {
      header: string;
      offerTag?: string;
      offerTagColor: string;
      offerIds: string[];
      expiryTime: string;
      couponCode: string;
      description: string;
      offerType: string;
      restId: string;
      offerLogo: string;
      descriptionTextColor: string;
    };
    cta: {
      type: string;
    };
  };
  
  type OfferInfoWithStyle = {
    "@type": string;
    offers: Offer[];
    habitMilestoneInfo: {
      callout: any; // Define a specific type for this if possible
    };
  };
  
  export type OfferCards = {
    card:{
    "@type": string;
    layout: {
      rows: number;
      columns: number;
      horizontalScrollEnabled: boolean;
      itemSpacing: number;
      lineSpacing: number;
      widgetPadding: Record<string, any>;
      containerStyle: {
        containerPadding: {
          left: number;
          right: number;
          bottom: number;
        };
      };
      scrollBar: Record<string, any>;
    };
    id: string;
    gridElements: {
      infoWithStyle: OfferInfoWithStyle;
    };}
  };
  
  
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

  export interface RestaurantDataItem {
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