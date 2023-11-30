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
    favourite?: boolean;
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
    badges: {
      textExtendedBadges?: {
        iconId: string;
        shortDescription: string;
        fontColor: string;
      }[],
      imageBadges?: {
        description: string,
        imageId: string
      }[]
    };
    select?: boolean;
    isOpen: boolean;
    type: string;
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: {
            attributes: {
              description: string,
              imageId: string,
            }
          }[]
        }
        textBased: Record<string, never>;
        textExtendedBadges: {
          badgeObject: {
            attributes: {
              description: string;
              fontColor: string;
              iconId: string;
              shortDescription: string;
            };
          }[];
        };
      };
    };
    aggregatedDiscountInfoV3: {
      header: string;
      subHeader: string;
      discountTag: string;
    };
    loyaltyDiscoverPresentationInfo?: {
      logoCtx: {
        text: string;
        logo: string;
      };
      freedelMessage: string;
    };
    orderabilityCommunication?: {
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
    reviewsSummary?: any;
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
  widgetId?: string;
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
    }
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
  price?: number;
  quantity?: number;
  ratings: {
    aggregatedRating: {
      rating: string;
      ratingCount: string;
      ratingCountV2: string;
    }
  };
  restaurantName?: string,
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
    isPureVeg?: boolean
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

export type restaurantMenuCards =
  {
    card: {
      card: {
        "@type": CardType.MenuVegFilterAndBadge;
        badges: Record<string, unknown>;
        isPureVeg?: boolean
        vegOnlyDetails: {
          imageId: string;
          title: string;
          description: string;
        };
        topRatedFilter: Record<string, unknown>;
      }
      |
      {
        "@type": CardType.MenuCarousel;
        title: string;
        carousel: MenuCarouselItem[];
      } |
      {
        "@type": CardType.ItemCategory;
        itemCards: RestaurantMenuItem[],
        title: string,
        showDetails: boolean
      } |
      {
        "@type": CardType.NestedItemCategory
        categories: {
          itemCards: RestaurantMenuItem[],
          title: string
          showDetails: boolean
        }[]
        title: string,
      } |
      {
        "@type": CardType.RestaurantLicenseInfo,
        imageId?: string,
        text: string[]
      } |
      {
        "@type": CardType.RestaurantAddress,
        area: string,
        completeAddress: string,
        name: string
      }
    }
  }

export type Card = {
  groupedCard: {
    cardGroupMap: {
      REGULAR: {
        cards: restaurantMenuCards[]
      }
    }
  }
}


export type TopicalImageBanner = {
  info: {
    id: string;
    imageId: string;
    action: {
      link: string;
      text: string;
      type: string;
    };
    entityType: string;
    accessibility: {
      altText: string;
      altTextCta: string;
    };
    entityId: string;
    frequencyCapping: {
      cappingEnabled: boolean;
      cappingMode: string;
    };
    isManualAds?: boolean;
  }[];
  style: {
    width: {
      type: string;
      value: number;
      reference: string;
    };
    height: {
      type: string;
      value: number;
      reference: string;
    };
  };
}

type TopicalGridElements = {
  infoWithStyle: {
    "@type": string;
    info: {
      id: string;
      imageId: string;
      action: {
        link: string;
        text: string;
        type: string;
      };
      entityType: string;
      accessibility: {
        altText: string;
        altTextCta: string;
      };
      entityId: string;
      frequencyCapping: {
        cappingEnabled: boolean;
        cappingMode: string;
      };
      isManualAds?: boolean;
    }[];
    style: {
      width: {
        type: string;
        value: number;
        reference: string;
      };
      height: {
        type: string;
        value: number;
        reference: string;
      };
    };
  };
}

export enum MainCardID {
  topical_banner = "topical_banner",
  whats_on_your_mind = "whats_on_your_mind",
  top_brands_for_you = "top_brands_for_you",
  popular_restaurants_title = "popular_restaurants_title",
  restaurant_grid_listing = "restaurant_grid_listing",
  show_more_button = "show_more_button",
  restaurant_near_me_links = "restaurant_near_me_links",
}

export type PageOffset = {
  nextOffset: string,
  widgetOffset: {
    NewListingView_Topical_Fullbleed?: string,
    NewListingView_Topical_Version2?: string,
    NewListingView_category_bar_chicletranking_TwoRows: string,
    NewListingView_category_bar_chicletranking_TwoRows_Rendition: string,
    Restaurant_Group_WebView_PB_Theme?: string,
    Restaurant_Group_WebView_SEO_PB_Theme?: string,
    collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: string,
    inlineFacetFilter: string,
    restaurantCountWidget: string
  }
}

export type MainContent = {
  data: {
    cards: {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          header: {},
          id: MainCardID.topical_banner,
          layout: {},
          imageGridCards: TopicalImageBanner
          gridElements: TopicalGridElements
        }
        |
        {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          id: MainCardID.whats_on_your_mind,
          header: {
            title: string
          }
          layout: {}
          imageGridCards: TopicalImageBanner,
          gridElements: TopicalGridElements

        }
        |
        {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          header: {
            title: string
          }
          id: MainCardID.top_brands_for_you
          layout: {},
          gridElements: RestaurantType[]
        }
        |
        {
          "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
          id: MainCardID.popular_restaurants_title
          title: string
        }
        |
        {
          id: MainCardID.restaurant_grid_listing
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          layout: {}
          gridElements: {
            infoWithStyle: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
              restaurants: RestaurantType[]
              theme: string
            }
          }
        }
      }
    }[],
    nextFetch: number,
    pageOffset: PageOffset
  }
}

export type UPDATED_RESTAURANTS_LIST = {
  data: {
    cards: {
      card: {
        card: {
          id: MainCardID.restaurant_grid_listing
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          layout: {}
          gridElements: {
            infoWithStyle: {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
              restaurants: RestaurantType[]
              theme: string
            }
          }
        }
      }
    }[],
    nextFetch: number,
    pageOffset: PageOffset
  }
}


export type PreSearch = {
  data: {
    cards: {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.RecentSearches",
          id: "recentSearchesWidget",
          title: "Recent Searches",
          minItemsToDisplay: number,
          maxItemsToDisplay: number
        }
        |
        {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          header: {},
          layout: {},
          imageGridCards: TopicalImageBanner,
          "id": "PopularCuisinessearchpage",
          gridElements: TopicalGridElements,
        }
      }
    }[]
  }
}