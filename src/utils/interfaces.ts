export interface RestaurantType {
  info: {
    id: string;
    name: string;
    cloudinaryImageId: string;
    locality: string;
    areaName: string;
    costForTwo: string;
    cuisines: string[];
    avgRating: number;
    favourite: boolean;
    feeDetails: {
      restaurantId: string;
      fees: {
        name: string;
        fee?: number;
      }[];
      totalFee?: number;
    };
    parentId: string;
    avgRatingString: string;
    totalRatingsString: string;
    sla: {
      deliveryTime: number;
      lastMileTravel: number;
      serviceability: string;
      slaString: string;
      lastMileTravelString: string;
      iconType: string;
    };
    availability: {
      nextCloseTime: string;
      opened: boolean;
    };
    badges: any;
    select: boolean;
    isOpen: boolean;
    type: string;
    badgesV2: {
      entityBadges: {
        imageBased: any;
        textBased: any;
        textExtendedBadges: any;
      };
    };
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: string;
        logo: string;
      };
      freedelMessage: string;
    };
    orderabilityCommunication: {
      title: any;
      subTitle: any;
      message: any;
      customIcon: any;
    };
    differentiatedUi: {
      displayType: string;
      differentiatedUiMediaDetails: {
        mediaType: string;
        lottie: any;
        video: any;
      };
    };
    reviewsSummary: any;
    displayType: string;
    restaurantOfferPresentationInfo: any;
  };
  analytics: {
    context: string;
  };
  cta: {
    link: string;
    text: string;
    type: string;
  };
  widgetId: string;
}

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
  card: {
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
    };
  }
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
}


export interface MenuCarouselItem {
  type: string;
  subtype: string;
  bannerId: string;
  creativeId: string;
  title: string;
  description: string;
  fontColor: string;
  dish: {
    info: {
      id: string;
      name: string;
      category: string;
      description: string;
      imageId: string;
      inStock: number;
      isVeg: number;
      variants: {
        variantGroups: {
          groupId: string;
          name: string;
          variations: {
            name: string;
            price: number;
            default: number;
            id: string;
            inStock: number;
            isVeg: number;
            isEnabled: number;
          }[];
        }[];
      };
      variantsV2: {
        variantGroups: {
          groupId: string;
          name: string;
          variations: {
            name: string;
            price: number;
            id: string;
            inStock: number;
            isVeg: number;
            isEnabled: number;
          }[];
        }[];
      };
      pricingModels: {
        variations: {
          groupId: string;
          variationId: string;
        }[];
        price: number;
        addonCombinations: {
          groupId: string;
          addonId: string;
        }[];
      }[];
    };
    addons: {
      groupId: string;
      groupName: string;
      choices: {
        id: string;
        name: string;
        price: number;
        inStock: number;
        isVeg: number;
        isEnabled: number;
      }[];
      maxAddons: number;
      maxFreeAddons: number;
    }[];
    itemAttribute: {
      vegClassifier: string;
      portionSize: string;
    };
    defaultPrice: number;
    ribbon: Record<string, unknown>;
    itemBadge: Record<string, unknown>;
    badgesV2: Record<string, unknown>;
  };
  analytics: Record<string, unknown>;
  hideRestaurantDetails: boolean;
}

interface MenuCarousel {
  card: {
    "@type": string;
    title: string;
    carousel: MenuCarouselItem[];
  }
}

export interface MenuItemInfo {
  addons?: {
    groupId: string;
    groupName: string;
    choices: {
      id: string;
      name: string;
      price: number;
      inStock: number;
      isVeg: number;
      isEnabled: number;
    }[];
    maxAddons: number;
    maxFreeAddons: number;
  }[];
  badgesV2: Record<string, unknown>;
  category: string;
  defaultPrice: number;
  description: string;
  id: string;
  imageId: string;
  inStock: number;
  isBestseller?: boolean
  isVeg?: number;
  itemAttribute: {
    vegClassifier: string;
    portionSize: string;
    accompaniments: string;
  };
  itemBadge: Record<string, unknown>;
  name: string;
  offerTags?:
  {
    title: string,
    subTitle: string,
    textColor: string,
    backgroundColor: string
  }[]
  price: number;
  ratings: {
    aggregatedRating: {
      rating: string;
      ratingCount: string;
      ratingCountV2: string;
    }
  }
  ribbon: Record<string, unknown>;
  showImage?: boolean,
  type: string,
  variants: Record<string, unknown>; // You can specify a more detailed type here if needed
  variantsV2: {
    variantGroups: {
      groupId: string;
      name: string;
      variations: {
        name: string;
        default: number;
        id: string;
        inStock: number;
        isVeg: number;
        isEnabled: number;
        dependantVariation?: {
          groupId: string;
          variationId: string;
        };
      }[];
    };
    addons?: {
      groupId: string;
      groupName: string;
      choices: {
        id: string;
        name: string;
        price: number;
        inStock: number;
        isVeg: number;
        isEnabled: number;
      }[];
      maxAddons: number;
      maxFreeAddons: number;
    }[];
    defaultPrice: number;
    offerTags:
    {
      title: string,
      subTitle: string,
      textColor: string,
      backgroundColor: string
    }[]
  }[]
};

export type RestaurantMenuItem = {
  card: {
    "@type": string; // Should be "type.googleapis.com/swiggy.presentation.food.v2.Dish"
    analytics: Record<string, unknown>;
    hideRestaurantDetails: boolean;
    info: MenuItemInfo;
  }
}

export interface ItemCategoryType {
  card: {
    "@type": string;
    title: string;
    itemCards: RestaurantMenuItem[];
    type?: string;
    showDetails: boolean;
  }
}

interface RestaurantMenu {
  cards: ItemCategoryType[],
}

interface MenuVegFilterAndBadge {
  card: {
    "@type": string;
    badges: Record<string, unknown>;
    vegOnlyDetails: {
      imageId: string;
      title: string;
      description: string;
    };
    topRatedFilter: Record<string, unknown>;
  }
}

export enum CardType {
  MenuCarousel = "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
  MenuVegFilterAndBadge = "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
  ItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  RestaurantLicenseInfo = "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
  RestaurantAddress = "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
  NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
}

export type Card =
  {
    card: {
      card: {
        "@type": CardType.MenuVegFilterAndBadge;
        card: {
          "@type": string;
          badges: Record<string, unknown>;
          vegOnlyDetails: {
            imageId: string;
            title: string;
            description: string;
          };
          topRatedFilter: Record<string, unknown>;
        }
      }
    }
  } |
  {
    card: {
      card: {
        "@type": CardType.MenuCarousel;
        title: string;
        carousel: MenuCarouselItem[];
      }
    }
  } |
  {
    card: {
      card: {
        "@type": CardType.ItemCategory;
        itemCards: RestaurantMenuItem[],
        title: string,
        showDetails: boolean
      }
    }
  } |
  {
    card: {
      card: {
        "@type": CardType.NestedItemCategory
        categories: {
          itemCards: MenuItemInfo[],
          title: string
        }[]
        title: string,
        showDetails: boolean
      }
    }
  } |
  {
    card: {
      card: {
        "@type": CardType.RestaurantLicenseInfo,
        imageId: string,
        text: string[]
      }
    }
  } |
  {
    card: {
      card: {
        "@type": CardType.RestaurantAddress,
        area: string,
        completeAddress: string,
        name: string
      }
    }
  }