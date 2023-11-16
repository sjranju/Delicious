import * as TYPES from "../../utils/interfaces"

type Page = {
    pages: TYPES.RestaurantType[][],
    pageParams: TYPES.RestaurantType[]
}

export const page1 = [
    {
        info: {
            id: "583805",
            name: "Olio - The Wood Fired Pizzeria",
            cloudinaryImageId: "fm9i2awf97alfu0cfhdg",
            locality: "1st Block",
            areaName: "Rajajinagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "Pizzas",
                "Italian"
            ],
            avgRating: 4,
            feeDetails: {
                restaurantId: "583805",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 9600
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 9600
            },
            parentId: "11633",
            avgRatingString: "4.0",
            totalRatingsString: "500+",
            sla: {
                deliveryTime: 40,
                lastMileTravel: 7.5,
                serviceability: "SERVICEABLE",
                slaString: "40 mins",
                lastMileTravelString: "7.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 05:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "newg.png",
                        description: "Gourmet"
                    }
                ],
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-1st-block-rajajinagar-bangalore-583805",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "RanjanacollectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "583806",
            name: "Crusto's - Cheese Burst Pizza",
            cloudinaryImageId: "pm8xhyfuqozkzfhamxdp",
            locality: "Dr Rajkumar Road",
            areaName: "Rajajinagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "Pizzas",
                "Italian"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "583806",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 9800
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 9800
            },
            parentId: "268955",
            avgRatingString: "4.1",
            totalRatingsString: "100+",
            sla: {
                deliveryTime: 42,
                lastMileTravel: 7.5,
                serviceability: "SERVICEABLE",
                slaString: "42 mins",
                lastMileTravelString: "7.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 05:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/crustos-cheese-burst-pizza-dr-rajkumar-road-rajajinagar-bangalore-583806",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "762879",
            name: "Namasthe Veg",
            cloudinaryImageId: "3c4bab5e3385057d450bdfd8268d4eac",
            locality: "Annapurneshwari Nagar",
            areaName: "Basaveshwaranagar",
            costForTwo: "₹200 for two",
            cuisines: [
                "South Indian"
            ],
            avgRating: 5,
            veg: true,
            feeDetails: {
                restaurantId: "762879",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 4500
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4500
            },
            parentId: "450031",
            avgRatingString: "5.0",
            totalRatingsString: "20+",
            sla: {
                deliveryTime: 20,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "20 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 03:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹349",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/namasthe-veg-annapurneshwari-nagar-basaveshwaranagar-bangalore-762879",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "763175",
            name: "The Celebration Cakes and Desserts",
            cloudinaryImageId: "1416541125e85d830af9f3b2e5d921fe",
            locality: "Sree Rama Nagara",
            areaName: "Vijayanagar",
            costForTwo: "₹175 for two",
            cuisines: [
                "Bakery"
            ],
            avgRating: 4.7,
            veg: true,
            feeDetails: {
                restaurantId: "763175",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 4500
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4500
            },
            parentId: "308643",
            avgRatingString: "4.7",
            totalRatingsString: "10+",
            sla: {
                deliveryTime: 31,
                lastMileTravel: 3.9,
                serviceability: "SERVICEABLE",
                slaString: "31 mins",
                lastMileTravelString: "3.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-22 00:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹349",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/the-celebration-cakes-and-desserts-sree-rama-nagara-vijayanagar-bangalore-763175",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "330252",
            name: "RNR Biryani - Taste of 1953",
            cloudinaryImageId: "qttero3z1hbtwi7auo8p",
            locality: "Vinayaka Layout",
            areaName: "Nagarbhavi",
            costForTwo: "₹350 for two",
            cuisines: [
                "Biryani",
                "South Indian",
                "Kebabs"
            ],
            avgRating: 4.2,
            feeDetails: {
                restaurantId: "330252",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 4200
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4200
            },
            parentId: "11620",
            avgRatingString: "4.2",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 20,
                lastMileTravel: 2.9,
                serviceability: "SERVICEABLE",
                slaString: "20 mins",
                lastMileTravelString: "2.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/rnr-biryani-taste-of-1953-vinayaka-layout-nagarbhavi-bangalore-330252",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "537531",
            name: "Madras Meal Company",
            cloudinaryImageId: "vtzzom9mm6p08mhupbrz",
            locality: "Vijayanagar",
            areaName: "Hoodi",
            costForTwo: "₹350 for two",
            cuisines: [
                "South Indian"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "537531",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 4500
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4500
            },
            parentId: "128893",
            avgRatingString: "4.1",
            totalRatingsString: "20+",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 3.6,
                serviceability: "SERVICEABLE",
                slaString: "25 mins",
                lastMileTravelString: "3.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹349",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/madras-meal-company-vijayanagar-hoodi-bangalore-537531",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "558765",
            name: "HRX by EatFit",
            cloudinaryImageId: "d8d85afa5c5e92461d30ff2ca867a587",
            locality: "Rajajinagar Industrial Town",
            areaName: "Rajajinagar",
            costForTwo: "₹450 for two",
            cuisines: [
                "Healthy Food",
                "Salads",
                "Keto"
            ],
            avgRating: 4.3,
            feeDetails: {
                restaurantId: "558765",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 9100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 9100
            },
            parentId: "335529",
            avgRatingString: "4.3",
            totalRatingsString: "100+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 7.5,
                serviceability: "SERVICEABLE",
                slaString: "30 mins",
                lastMileTravelString: "7.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹349",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/hrx-by-eatfit-industrial-town-rajajinagar-bangalore-558765",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "577792",
            name: "ITC Fabelle Chocolates",
            cloudinaryImageId: "6f6d8daae5477dc213feeb87bd893926",
            locality: "Lingadeeranhalli",
            areaName: "Employees Layout",
            costForTwo: "₹600 for two",
            cuisines: [
                "Bakery",
                "Desserts"
            ],
            avgRating: 4.6,
            veg: true,
            feeDetails: {
                restaurantId: "577792",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 5300
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 5300
            },
            parentId: "11024",
            avgRatingString: "4.6",
            totalRatingsString: "20+",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 4.3,
                serviceability: "SERVICEABLE",
                slaString: "23 mins",
                lastMileTravelString: "4.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 02:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "newg.png",
                        description: "Gourmet"
                    }
                ],
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/itc-fabelle-chocolates-lingadeeranhalli-employees-layout-bangalore-577792",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "787256",
            name: "Seoul Fried Chicken",
            cloudinaryImageId: "b76ed695e98af0127d588171d34795fd",
            locality: "Priyadarshini Layout",
            areaName: "Basaveshwaranagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "American",
                "Fast Food",
                "Snacks",
                "Korean",
                "Burgers",
                "Beverages"
            ],
            avgRating: 4.4,
            feeDetails: {
                restaurantId: "787256",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 4500
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4500
            },
            parentId: "468084",
            avgRatingString: "4.4",
            totalRatingsString: "3",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 3.5,
                serviceability: "SERVICEABLE",
                slaString: "25 mins",
                lastMileTravelString: "3.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 03:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/seoul-fried-chicken-priyadarshini-layout-basaveshwaranagar-bangalore-787256",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "594271",
            name: "Taco Bell",
            cloudinaryImageId: "d3b3db238b6448c3f297c851e9d0b96b",
            locality: "Rajarajeshwari Nagar",
            areaName: "Rajarajeshwari Nagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "Mexican"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "594271",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 9600
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 9600
            },
            parentId: "1557",
            avgRatingString: "4.1",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 54,
                lastMileTravel: 7.1,
                serviceability: "SERVICEABLE",
                slaString: "54 mins",
                lastMileTravelString: "7.1 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹149"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/taco-bell-rajarajeshwari-nagar-bangalore-594271",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "374288",
            name: "Big Bites",
            cloudinaryImageId: "dsdyehmjuc9n6zjuol0k",
            locality: "Byraveshwara Nagar",
            areaName: "Vijay Nagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "Street Food",
                "Fast Food",
                "Tex-Mex"
            ],
            avgRating: 4.3,
            feeDetails: {
                restaurantId: "374288",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 4500
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 4500
            },
            parentId: "45509",
            avgRatingString: "4.3",
            totalRatingsString: "100+",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 3.6,
                serviceability: "SERVICEABLE",
                slaString: "25 mins",
                lastMileTravelString: "3.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹349",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/big-bites-byraveshwara-nagar-vijay-nagar-bangalore-374288",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "692550",
            name: "Kadegowda Military Hotel",
            cloudinaryImageId: "a0192c837933561adfd8fc23ad06daaa",
            locality: "Rajajinagara",
            areaName: "Basaveshwaranagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "South Indian",
                "Indian"
            ],
            avgRating: 4.3,
            feeDetails: {
                restaurantId: "692550",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 7100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 7100
            },
            parentId: "414877",
            avgRatingString: "4.3",
            totalRatingsString: "10+",
            sla: {
                deliveryTime: 26,
                lastMileTravel: 5.6,
                serviceability: "SERVICEABLE",
                slaString: "26 mins",
                lastMileTravelString: "5.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹349",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/kadegowda-military-hotel-rajajinagara-basaveshwaranagar-bangalore-692550",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "433630",
            name: "Celebration Special by CakeZone",
            cloudinaryImageId: "8ce7230b4f2d901d21c9ea424002bf7a",
            locality: "Lingadeeranhalli",
            areaName: "Employees Layout",
            costForTwo: "₹300 for two",
            cuisines: [
                "Desserts",
                "Snacks",
                "Bakery",
                "Beverages"
            ],
            avgRating: 4.3,
            veg: true,
            feeDetails: {
                restaurantId: "433630",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 5300
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 5300
            },
            parentId: "424059",
            avgRatingString: "4.3",
            totalRatingsString: "100+",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 4.3,
                serviceability: "SERVICEABLE",
                slaString: "24 mins",
                lastMileTravelString: "4.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-11-16 02:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/celebration-special-by-cakezone-lingadeeranhalli-employees-layout-bangalore-433630",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "622161",
            name: "MOJO Pizza - 2X Toppings",
            cloudinaryImageId: "59b64f9bb67234987652437f21d379c2",
            locality: "VV Puram",
            areaName: "Basavanagudi",
            costForTwo: "₹250 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Fast Food",
                "Desserts"
            ],
            avgRating: 4.2,
            feeDetails: {
                restaurantId: "622161",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 8800
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 8800
            },
            parentId: "11329",
            avgRatingString: "4.2",
            totalRatingsString: "100+",
            sla: {
                lastMileTravel: 6.5,
                serviceability: "NON_SERVICEABLE",
                lastMileTravelString: "6.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Does not deliver to selected location",
                nextCloseTime: "2023-11-16 01:00:00",
                opened: true
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C"
                    }
                ]
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available"
                                }
                            }
                        ]
                    }
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹399",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-vv-puram-basavanagudi-bangalore-622161",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "425576",
            name: "NH1 Bowls - Highway To North",
            cloudinaryImageId: "94654fdf308764cd0faf83dba35bcdc3",
            locality: "Azad Nagar",
            areaName: "Mysore Road",
            costForTwo: "₹250 for two",
            cuisines: [
                "North Indian",
                "Punjabi",
                "Home Food"
            ],
            avgRating: 4.4,
            feeDetails: {
                restaurantId: "425576",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 8100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 8100
            },
            parentId: "22452",
            avgRatingString: "4.4",
            totalRatingsString: "100+",
            sla: {
                lastMileTravel: 6.5,
                serviceability: "NON_SERVICEABLE",
                lastMileTravelString: "6.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Does not deliver to selected location",
                nextCloseTime: "2023-11-16 01:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-azad-nagar-mysore-road-bangalore-425576",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

export const page2 = [
    {
        info: {
            id: "732919",
            name: "Barbecue by Punjab Grill",
            cloudinaryImageId: "596359faed3f8b42bd882233e11c6075",
            locality: "Orion Mall",
            areaName: "Malleshwaram",
            costForTwo: "₹900 for two",
            cuisines: [
                "North Indian",
                "Kebabs",
                "Biryani",
                "Mughlai"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "732919",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 10100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 10100
            },
            parentId: "382763",
            avgRatingString: "4.1",
            totalRatingsString: "8",
            sla: {
                deliveryTime: 42,
                lastMileTravel: 8.3,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "42 mins",
                lastMileTravelString: "8.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 11:30 am, today"
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "newg.png",
                        description: "Gourmet"
                    }
                ]
            },
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/barbecue-by-punjab-grill-orion-mall-malleshwaram-bangalore-732919",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "49067",
            name: "Annakuta",
            cloudinaryImageId: "rldww3ndbpt9fgmqhfbs",
            locality: "Chord Road, 1st R Block",
            areaName: "Rajajinagar",
            costForTwo: "₹250 for two",
            cuisines: [
                "North Indian",
                "South Indian",
                "Indian"
            ],
            avgRating: 4.7,
            veg: true,
            feeDetails: {
                restaurantId: "49067",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 10100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 10100
            },
            parentId: "11975",
            avgRatingString: "4.7",
            totalRatingsString: "500+",
            sla: {
                deliveryTime: 37,
                lastMileTravel: 8.6,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "37 mins",
                lastMileTravelString: "8.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 8:45 am, today"
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ]
            },
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹100 OFF",
                subHeader: "ABOVE ₹749",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/annakuta-chord-road-1st-r-block-rajajinagar-bangalore-49067",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "180686",
            name: "Neelanjanam",
            cloudinaryImageId: "lowkgdj8qmnkl91qasgl",
            locality: "Govindaraja Nagar Ward",
            areaName: "Vijayanagar",
            costForTwo: "₹220 for two",
            cuisines: [
                "South Indian",
                "North Indian",
                "Sweets",
                "Snacks"
            ],
            avgRating: 4.1,
            veg: true,
            feeDetails: {
                restaurantId: "180686",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 5300
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 5300
            },
            parentId: "21261",
            avgRatingString: "4.1",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 35,
                lastMileTravel: 4.8,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "35 mins",
                lastMileTravelString: "4.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 11:30 am, today"
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ]
            },
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/neelanjanam-govindaraja-nagar-ward-vijayanagar-bangalore-180686",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "629119",
            name: "Lion King",
            cloudinaryImageId: "r8sckehiejezweqdwk58",
            locality: "Rajkumar Road",
            areaName: "Malleshwaram",
            costForTwo: "₹150 for two",
            cuisines: [
                "Chinese",
                "Seafood"
            ],
            avgRating: 4.3,
            feeDetails: {
                restaurantId: "629119",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 9100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 9100
            },
            parentId: "125280",
            avgRatingString: "4.3",
            totalRatingsString: "10+",
            sla: {
                deliveryTime: 36,
                lastMileTravel: 7.7,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "36 mins",
                lastMileTravelString: "7.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 11:30 am, today"
            },
            badges: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹100 OFF",
                subHeader: "ABOVE ₹399",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/lion-king-rajkumar-road-malleshwaram-bangalore-629119",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "574162",
            name: "Juice And Chats",
            cloudinaryImageId: "bkzvnoe7mg13zofjzsa5",
            locality: "Maruthi Mandhir Service Road",
            areaName: "Vijayanagar",
            costForTwo: "₹200 for two",
            cuisines: [
                "Beverages"
            ],
            avgRating: 4.1,
            veg: true,
            feeDetails: {
                restaurantId: "574162",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 5300
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 5300
            },
            parentId: "344593",
            avgRatingString: "4.1",
            totalRatingsString: "6",
            sla: {
                deliveryTime: 35,
                lastMileTravel: 4.8,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "35 mins",
                lastMileTravelString: "4.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 10 am, today"
            },
            badges: {},
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/juice-and-chats-maruthi-mandhir-service-road-vijayanagar-bangalore-574162",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "625924",
            name: "Saawariya",
            cloudinaryImageId: "upb3fk6tlc4xywcfov2s",
            locality: "RPC Layout",
            areaName: "Vijayanagar",
            costForTwo: "₹150 for two",
            cuisines: [
                "North Indian",
                "Snacks",
                "Chaat"
            ],
            avgRating: 4.8,
            veg: true,
            feeDetails: {
                restaurantId: "625924",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 7100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 7100
            },
            parentId: "275246",
            avgRatingString: "4.8",
            totalRatingsString: "6",
            sla: {
                deliveryTime: 34,
                lastMileTravel: 5.5,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "34 mins",
                lastMileTravelString: "5.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 9:30 am, today"
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ]
            },
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/saawariya-rpc-layout-vijayanagar-bangalore-625924",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "526074",
            name: "SIRI NAATI STYLE HOTEL VIJAYANAGAR",
            cloudinaryImageId: "qputt1y67rvlncuhw06f",
            locality: "2nd Stage",
            areaName: "Vijayanagar",
            costForTwo: "₹450 for two",
            cuisines: [
                "North Indian",
                "Biryani",
                "South Indian",
                "Snacks"
            ],
            avgRating: 4.1,
            feeDetails: {
                restaurantId: "526074",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 5800
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 5800
            },
            parentId: "316345",
            avgRatingString: "4.1",
            totalRatingsString: "20+",
            sla: {
                deliveryTime: 39,
                lastMileTravel: 4.9,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "39 mins",
                lastMileTravelString: "4.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Temporarily closed for delivery"
            },
            badges: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "10% OFF",
                subHeader: "ABOVE ₹1000",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/siri-naati-style-hotel-vijayanagar-2nd-stage-vijayanagar-bangalore-526074",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "221597",
            name: "Davanagere Benne Dose Hut",
            cloudinaryImageId: "lmi86aoiio1d6yetqy9g",
            locality: "Avalahalli",
            areaName: "Banashankari",
            costForTwo: "₹200 for two",
            cuisines: [
                "South Indian"
            ],
            avgRating: 4.1,
            veg: true,
            feeDetails: {
                restaurantId: "221597",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 10100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 10100
            },
            parentId: "68799",
            avgRatingString: "4.1",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 37,
                lastMileTravel: 8.1,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "37 mins",
                lastMileTravelString: "8.1 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 7:30 am, today"
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ]
            },
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/davanagere-benne-dose-hut-avalahalli-banashankari-bangalore-221597",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "23239",
            name: "The Higher Taste Restaurant",
            cloudinaryImageId: "krm5mscsh71e6yalcdhk",
            locality: "Rajajinagar",
            areaName: "Rajajinagar",
            costForTwo: "₹500 for two",
            cuisines: [
                "North Indian"
            ],
            avgRating: 4.5,
            veg: true,
            feeDetails: {
                restaurantId: "23239",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 10800
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 10800
            },
            parentId: "209564",
            avgRatingString: "4.5",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 36,
                lastMileTravel: 8.6,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "36 mins",
                lastMileTravelString: "8.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 12 noon, today"
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg"
                    }
                ]
            },
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/the-higher-taste-restaurant-rajajinagar-bangalore-23239",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "541635",
            name: "Appu Donne Biriyani",
            cloudinaryImageId: "ra3vumy9ceprzznptlyj",
            locality: "Telecom Colony",
            areaName: "Vijayanagar",
            costForTwo: "₹120 for two",
            cuisines: [
                "Biryani",
                "Indian"
            ],
            avgRating: 4,
            feeDetails: {
                restaurantId: "541635",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 9100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 9100
            },
            parentId: "309405",
            avgRatingString: "4.0",
            totalRatingsString: "20+",
            sla: {
                deliveryTime: 36,
                lastMileTravel: 7.6,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "36 mins",
                lastMileTravelString: "7.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 12 noon, today"
            },
            badges: {},
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/appu-donne-biriyani-telecom-colony-vijayanagar-bangalore-541635",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "713299",
            name: "Magadis Biriyani",
            cloudinaryImageId: "a1804a64759270301e5e8be9f214952c",
            locality: "Magadi Main Rd",
            areaName: "Vijayanagar",
            costForTwo: "₹350 for two",
            cuisines: [
                "Biryani"
            ],
            avgRating: 5,
            feeDetails: {
                restaurantId: "713299",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 8100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 8100
            },
            parentId: "425837",
            avgRatingString: "5.0",
            totalRatingsString: "5",
            sla: {
                deliveryTime: 37,
                lastMileTravel: 6.3,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "37 mins",
                lastMileTravelString: "6.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 12:30 pm, today"
            },
            badges: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹150",
                discountTag: "SAVE BIG"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/magadis-biriyani-magadi-main-rd-vijayanagar-bangalore-713299",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "404735",
            name: "Sri Sideeshwara Mess",
            cloudinaryImageId: "cdw49hu6tx4iis3s6h5s",
            locality: "Iyyannashetty layout",
            areaName: "Mysore Road",
            costForTwo: "₹450 for two",
            cuisines: [
                "South Indian",
                "Biryani"
            ],
            avgRating: 4.9,
            feeDetails: {
                restaurantId: "404735",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 8100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 8100
            },
            parentId: "256148",
            avgRatingString: "4.9",
            totalRatingsString: "9",
            sla: {
                deliveryTime: 39,
                lastMileTravel: 6.8,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "39 mins",
                lastMileTravelString: "6.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 7:30 am, today"
            },
            badges: {},
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/sri-sideeshwara-mess-iyyannashetty-layout-mysore-road-bangalore-404735",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "717635",
            name: "Basava Bhojanalaya",
            cloudinaryImageId: "ad83be9585d1fb0e122874e3eb45d5e6",
            locality: "Sangeetha Mobiles",
            areaName: "Vijayanagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "South Indian",
                "Mangalorean"
            ],
            avgRating: 4.3,
            veg: true,
            feeDetails: {
                restaurantId: "717635",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 7100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 7100
            },
            parentId: "428008",
            avgRatingString: "4.3",
            totalRatingsString: "10+",
            sla: {
                deliveryTime: 34,
                lastMileTravel: 5,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "34 mins",
                lastMileTravelString: "5.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 12 noon, today"
            },
            badges: {},
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/basava-bhojanalaya-sangeetha-mobiles-vijayanagar-bangalore-717635",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "501217",
            name: "Mystique Palate",
            cloudinaryImageId: "ut7wyalxbbes6m9ny0dc",
            locality: "2nd Stage",
            areaName: "Rajajinagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "Chinese",
                "Italian",
                "Combo",
                "Thai",
                "Tibetan"
            ],
            avgRating: 4.3,
            feeDetails: {
                restaurantId: "501217",
                fees: [
                    {
                        name: "BASE_DISTANCE",
                        fee: 9800
                    },
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 9800
            },
            parentId: "142801",
            avgRatingString: "4.3",
            totalRatingsString: "100+",
            sla: {
                deliveryTime: 38,
                lastMileTravel: 7.5,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "38 mins",
                lastMileTravelString: "7.5 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 12 noon, today"
            },
            badges: {},
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/mystique-palate-2nd-stage-rajajinagar-bangalore-501217",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "770743",
            name: "Eleven Bakehouse",
            cloudinaryImageId: "0306cad2c2ec1f0fffd1e516ddb79a37",
            locality: "Dr.Rajkumar road",
            areaName: "Rajajinagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "Bakery",
                "Desserts"
            ],
            avgRating: 4.2,
            feeDetails: {
                restaurantId: "770743",
                fees: [
                    {
                        name: "BASE_TIME"
                    },
                    {
                        name: "BASE_DISTANCE",
                        fee: 10100
                    },
                    {
                        name: "ANCILLARY_SURGE_FEE"
                    }
                ],
                totalFee: 10100
            },
            parentId: "460131",
            avgRatingString: "4.2",
            totalRatingsString: "10+",
            sla: {
                deliveryTime: 39,
                lastMileTravel: 8.3,
                serviceability: "SERVICEABLE_WITH_BANNER",
                slaString: "39 mins",
                lastMileTravelString: "8.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextOpenTimeMessage: "Opens next at 10 am, today"
            },
            badges: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "₹250 OFF",
                subHeader: "ABOVE ₹999",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/eleven-bakehouse-dr-rajkumar-road-rajajinagar-bangalore-770743",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]


export const allPage: Page = JSON.parse(JSON.stringify({
    "pages": [
        [
            {
                "info": {
                    "id": "54451",
                    "name": "La Heaven",
                    "cloudinaryImageId": "vqjwzgfieely2noma0or",
                    "locality": "Sampige Road",
                    "areaName": "Malleshwaram",
                    "costForTwo": "₹384 for two",
                    "cuisines": [
                        "Desserts",
                        "Bakery",
                        "Beverages"
                    ],
                    "avgRating": 4.4,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "54451",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 9300
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 9300
                    },
                    "parentId": "7455",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 76,
                        "lastMileTravel": 10,
                        "serviceability": "SERVICEABLE",
                        "slaString": "76 mins",
                        "lastMileTravelString": "10.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 22:15:00",
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
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/la-heaven-sampige-road-malleshwaram-bangalore-54451",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "350025",
                    "name": "1522 - The Pub",
                    "cloudinaryImageId": "zjljj1mpbgqeephmw5nw",
                    "locality": "Raja Rajeswari Nagar",
                    "areaName": "Rajarajeshwari Nagar",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                        "Chinese",
                        "North Indian",
                        "Continental",
                        "Beverages",
                        "Seafood",
                        "Hyderabadi"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "350025",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7300
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7300
                    },
                    "parentId": "22885",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 58,
                        "lastMileTravel": 7.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "58 mins",
                        "lastMileTravelString": "7.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/1522-the-pub-raja-rajeswari-nagar-rajarajeshwari-nagar-bangalore-350025",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "708760",
                    "name": "K C Das",
                    "cloudinaryImageId": "82d66b90554a59d340159fe81d882069",
                    "locality": "Halagevaderahalli",
                    "areaName": "Rajarajeshwari Nagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Snacks",
                        "Sweets"
                    ],
                    "avgRating": 3.8,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "708760",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 8600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 8600
                    },
                    "parentId": "406001",
                    "avgRatingString": "3.8",
                    "totalRatingsString": "20+",
                    "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 9.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "46 mins",
                        "lastMileTravelString": "9.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 22:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/k-c-das-halagevaderahalli-rajarajeshwari-nagar-bangalore-708760",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "71943",
                    "name": "Dilli Da Dhaba",
                    "cloudinaryImageId": "tkilsjhy7e3zczhpiinp",
                    "locality": "Mailasandra",
                    "areaName": "Kengeri",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Chinese",
                        "North Indian",
                        "Desserts",
                        "Fast Food",
                        "Punjabi",
                        "Hyderabadi"
                    ],
                    "avgRating": 4,
                    "feeDetails": {
                        "restaurantId": "71943",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 10100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 10100
                    },
                    "parentId": "20159",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "10K+",
                    "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 10.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "49 mins",
                        "lastMileTravelString": "10.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:45:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/dilli-da-dhaba-mailasandra-kengeri-bangalore-71943",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "403588",
                    "name": "Taiki",
                    "cloudinaryImageId": "4297ba5a19e9a14ec72ac2b41cd8ee96",
                    "locality": "Dr Rajkumar Rd",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹800 for two",
                    "cuisines": [
                        "Pan-Asian",
                        "Japanese",
                        "Korean",
                        "Sushi",
                        "Asian"
                    ],
                    "avgRating": 4,
                    "feeDetails": {
                        "restaurantId": "403588",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 8100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 8100
                    },
                    "parentId": "11264",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "500+",
                    "sla": {
                        "deliveryTime": 80,
                        "lastMileTravel": 8.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "80 mins",
                        "lastMileTravelString": "8.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 22:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
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
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/taiki-dr-rajkumar-rd-rajajinagar-bangalore-403588",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "562892",
                    "name": "Park Street",
                    "cloudinaryImageId": "d6748b17effcf8c0116ac58a375a5a88",
                    "locality": "M S R Nagar",
                    "areaName": "New BEL Road",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Indian",
                        "North Indian"
                    ],
                    "avgRating": 4.1,
                    "feeDetails": {
                        "restaurantId": "562892",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 10100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 10100
                    },
                    "parentId": "155717",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 68,
                        "lastMileTravel": 10.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "68 mins",
                        "lastMileTravelString": "10.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 21:31:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/park-street-m-s-r-nagar-new-bel-road-bangalore-562892",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "591680",
                    "name": "Paris Panini - Gourmet Sandwiches & Wraps",
                    "cloudinaryImageId": "toyz8hejwke7p37zpgod",
                    "locality": "1st Block",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Continental",
                        "Pastas",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Fast Food",
                        "French"
                    ],
                    "avgRating": 4.4,
                    "feeDetails": {
                        "restaurantId": "591680",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7300
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7300
                    },
                    "parentId": "21019",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 7.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50 mins",
                        "lastMileTravelString": "7.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ],
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
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
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹100"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/paris-panini-gourmet-sandwiches-and-wraps-1st-block-rajajinagar-bangalore-591680",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "591426",
                    "name": "The Pizza Bakery",
                    "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
                    "locality": "1st Block",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹700 for two",
                    "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Continental"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "591426",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7300
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7300
                    },
                    "parentId": "11108",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 7.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50 mins",
                        "lastMileTravelString": "7.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ],
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
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
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹100"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/the-pizza-bakery-1st-block-rajajinagar-bangalore-591426",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "413638",
                    "name": "CakeZone",
                    "cloudinaryImageId": "2857960242f8d1d4d390dc22a38c530e",
                    "locality": "Lingadeeranhalli",
                    "areaName": "Employees Layout",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Sweets",
                        "Ice Cream"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "413638",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 4800
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 4800
                    },
                    "parentId": "7003",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "37 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/cakezone-lingadeeranhalli-employees-layout-bangalore-413638",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "498325",
                    "name": "Istah - The Mediterranean Way",
                    "cloudinaryImageId": "67d4a416bf932f850b0a15ad33aae762",
                    "locality": "Ganesha Block",
                    "areaName": "Yeshwanthpur",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Mediterranean",
                        "Snacks",
                        "Biryani",
                        "Grill",
                        "Kebabs",
                        "Arabian",
                        "Lebanese",
                        "Beverages",
                        "Desserts",
                        "Italian",
                        "Turkish"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "498325",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6600
                    },
                    "parentId": "3518",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 7.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "46 mins",
                        "lastMileTravelString": "7.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                "description": "OnlyOnSwiggy"
                            }
                        ],
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
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
                                            "description": "OnlyOnSwiggy",
                                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹110"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-ganesha-block-yeshwanthpur-bangalore-498325",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "286574",
                    "name": "Chai Point",
                    "cloudinaryImageId": "cjmbqxgund7syshvymj7",
                    "locality": "Rajajinagar Industrial Town",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹150 for two",
                    "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American",
                        "North Indian",
                        "Fast Food",
                        "Desserts",
                        "Cafe",
                        "Healthy Food",
                        "Home Food"
                    ],
                    "avgRating": 4.2,
                    "feeDetails": {
                        "restaurantId": "286574",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6000
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6000
                    },
                    "parentId": "1607",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 6.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "49 mins",
                        "lastMileTravelString": "6.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 03:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "25% OFF",
                        "subHeader": "UPTO ₹125"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/chai-point-industrial-town-rajajinagar-bangalore-286574",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "413324",
                    "name": "Starbucks Coffee",
                    "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
                    "locality": "Binnipete",
                    "areaName": "Basaveshwaranagar",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Bakery",
                        "Ice Cream"
                    ],
                    "avgRating": 4.2,
                    "feeDetails": {
                        "restaurantId": "413324",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 8100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 8100
                    },
                    "parentId": "195515",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "100+",
                    "sla": {
                        "deliveryTime": 52,
                        "lastMileTravel": 8.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "52 mins",
                        "lastMileTravelString": "8.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/starbucks-coffee-binnipete-basaveshwaranagar-bangalore-413324",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "746586",
                    "name": "Uncle Peter's Pancakes",
                    "cloudinaryImageId": "a06715b3035935ddbf5d0a3a57900857",
                    "locality": "RPC Layout",
                    "areaName": "Vijayanagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "American",
                        "Continental",
                        "Desserts"
                    ],
                    "avgRating": 3.9,
                    "feeDetails": {
                        "restaurantId": "746586",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5400
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5400
                    },
                    "parentId": "11863",
                    "avgRatingString": "3.9",
                    "totalRatingsString": "50+",
                    "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "39 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
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
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/uncle-peters-pancakes-rpc-layout-vijayanagar-bangalore-746586",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "577696",
                    "name": "Myfroyoland - Premium Frozen Yogurt",
                    "cloudinaryImageId": "xmosr86kkp0nfcb0nlwq",
                    "locality": "Nehru Nagar",
                    "areaName": "Seshadripuram",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Keto"
                    ],
                    "avgRating": 4.3,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "577696",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 10100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 10100
                    },
                    "parentId": "442929",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "50+",
                    "sla": {
                        "deliveryTime": 71,
                        "lastMileTravel": 10.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "71 mins",
                        "lastMileTravelString": "10.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 00:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
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
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/myfroyoland-premium-frozen-yogurt-nehru-nagar-seshadripuram-bangalore-577696",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "452278",
                    "name": "Third Wave Coffee",
                    "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
                    "locality": "Margosa Road",
                    "areaName": "Malleshwaram",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Beverages",
                        "Bakery",
                        "Continental"
                    ],
                    "avgRating": 4.6,
                    "feeDetails": {
                        "restaurantId": "452278",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 9100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 9100
                    },
                    "parentId": "274773",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "500+",
                    "sla": {
                        "deliveryTime": 59,
                        "lastMileTravel": 9.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "59 mins",
                        "lastMileTravelString": "9.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 01:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/third-wave-coffee-margosa-road-malleshwaram-bangalore-452278",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            }
        ],
        [
            {
                "info": {
                    "id": "455002",
                    "name": "Chicking",
                    "cloudinaryImageId": "86f52324ecee5fc94cbf63c4a568b672",
                    "locality": "Binnipete",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "American",
                        "Grill",
                        "Fast Food",
                        "Snacks",
                        "Pizzas",
                        "Mexican",
                        "Beverages"
                    ],
                    "avgRating": 4,
                    "feeDetails": {
                        "restaurantId": "455002",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7600
                    },
                    "parentId": "251",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 59,
                        "lastMileTravel": 8.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "59 mins",
                        "lastMileTravelString": "8.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/chicking-binnipete-rajajinagar-bangalore-455002",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "111681",
                    "name": "New Agarwal Bhavan",
                    "cloudinaryImageId": "e03610fb60dc1f1c6773b96ea72baaf2",
                    "locality": "Dasarahalli",
                    "areaName": "Jalahalli",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Sweets",
                        "Snacks",
                        "Beverages",
                        "Punjabi"
                    ],
                    "avgRating": 4.4,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "111681",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7600
                    },
                    "parentId": "7440",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "5K+",
                    "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 8.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "48 mins",
                        "lastMileTravelString": "8.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/new-agarwal-bhavan-dasarahalli-jalahalli-bangalore-111681",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "747636",
                    "name": "Lo! - Low Carb And Keto Foods",
                    "cloudinaryImageId": "ae5e472f1ed25de6a008fee881fa7a35",
                    "locality": "BBMP West",
                    "areaName": "Basaveshwaranagar",
                    "costForTwo": "₹150 for two",
                    "cuisines": [
                        "Healthy Food",
                        "North Indian",
                        "Continental"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "747636",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5400
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5400
                    },
                    "parentId": "8282",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "20+",
                    "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "37 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
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
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/lo-low-carb-and-keto-foods-bbmp-west-basaveshwaranagar-bangalore-747636",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "747638",
                    "name": "Protein Chef",
                    "cloudinaryImageId": "d457cbdfd1a87fd890c2e658e84d184d",
                    "locality": "BBMP West",
                    "areaName": "Basaveshwaranagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Indian",
                        "Fast Food",
                        "Snacks"
                    ],
                    "avgRating": 4.2,
                    "feeDetails": {
                        "restaurantId": "747638",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5400
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5400
                    },
                    "parentId": "341825",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "20+",
                    "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "37 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
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
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/protein-chef-bbmp-west-basaveshwaranagar-bangalore-747638",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "252618",
                    "name": "Al-Bek",
                    "cloudinaryImageId": "teg1rujhfwroaoig95qs",
                    "locality": "6th Block",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Arabian",
                        "Tandoor",
                        "Biryani"
                    ],
                    "avgRating": 4,
                    "feeDetails": {
                        "restaurantId": "252618",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6600
                    },
                    "parentId": "9911",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "5K+",
                    "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "42 mins",
                        "lastMileTravelString": "7.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 03:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/al-bek-6th-block-rajajinagar-bangalore-252618",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "449047",
                    "name": "Soul Rasa",
                    "cloudinaryImageId": "hfwvfneewb1e05ildjti",
                    "locality": "3rd Stage",
                    "areaName": "Banashankari",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Indian",
                        "Healthy Food",
                        "Home Food",
                        "South Indian",
                        "North Indian"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "449047",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 8600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 8600
                    },
                    "parentId": "239281",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 52,
                        "lastMileTravel": 9.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "52 mins",
                        "lastMileTravelString": "9.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                "description": "OnlyOnSwiggy"
                            }
                        ],
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "brand",
                                "fontColor": "#7E808C"
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
                                            "description": "OnlyOnSwiggy",
                                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "brand"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹110"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/soul-rasa-3rd-stage-banashankari-bangalore-449047",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "666036",
                    "name": "Byg Brewski Brewing Company",
                    "cloudinaryImageId": "89af99208ad863b738c610c4ed625214",
                    "locality": "Tumkur Road",
                    "areaName": "Yeshwanthpur",
                    "costForTwo": "₹850 for two",
                    "cuisines": [
                        "Pizzas",
                        "Burgers",
                        "Pan-Asian",
                        "North Indian",
                        "Pastas",
                        "Grill",
                        "Biryani",
                        "Mexican"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "666036",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 9300
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 9300
                    },
                    "parentId": "7382",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 52,
                        "lastMileTravel": 9.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "52 mins",
                        "lastMileTravelString": "9.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 00:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/byg-brewski-brewing-company-tumkur-road-yeshwanthpur-bangalore-666036",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "85333",
                    "name": "Imperial Restaurant Since 1954",
                    "cloudinaryImageId": "bc2f7e70b995b4095617b21adcde553b",
                    "locality": "Byataranyapura",
                    "areaName": "Mysore Road",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Chinese",
                        "South Indian",
                        "North Indian",
                        "Tandoor",
                        "Kerala",
                        "Beverages"
                    ],
                    "avgRating": 4.1,
                    "feeDetails": {
                        "restaurantId": "85333",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6600
                    },
                    "parentId": "7399",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "10K+",
                    "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 7.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40 mins",
                        "lastMileTravelString": "7.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 01:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/imperial-restaurant-since-1954-byataranyapura-mysore-road-bangalore-85333",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "690552",
                    "name": "Narmada Chain of Restaurant",
                    "cloudinaryImageId": "3bf711cdef6072ae50c099c7e353497e",
                    "locality": "Modi Hospital Road",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Andhra",
                        "Biryani",
                        "South Indian"
                    ],
                    "avgRating": 4.4,
                    "feeDetails": {
                        "restaurantId": "690552",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6000
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6000
                    },
                    "parentId": "410569",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 6.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "41 mins",
                        "lastMileTravelString": "6.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/narmada-chain-of-restaurant-modi-hospital-road-rajajinagar-bangalore-690552",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "461240",
                    "name": "Kapoor's Cafe",
                    "cloudinaryImageId": "qpyp67abz4q1jitm7dti",
                    "locality": "Dr Rajkumar Road",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "North Indian"
                    ],
                    "avgRating": 4.2,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "461240",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6600
                    },
                    "parentId": "114900",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 52,
                        "lastMileTravel": 7.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "52 mins",
                        "lastMileTravelString": "7.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 22:50:00",
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
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/kapoors-cafe-dr-rajkumar-road-rajajinagar-bangalore-461240",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "510627",
                    "name": "Lulu Hypermarket",
                    "cloudinaryImageId": "usvu7jwfx9t47z3y3lkh",
                    "locality": "Mysore Deviation Road",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "Arabian",
                        "Continental",
                        "North Indian",
                        "Chinese"
                    ],
                    "avgRating": 4,
                    "feeDetails": {
                        "restaurantId": "510627",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7600
                    },
                    "parentId": "19980",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 65,
                        "lastMileTravel": 8.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "65 mins",
                        "lastMileTravelString": "8.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 22:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/lulu-hypermarket-mysore-deviation-road-rajajinagar-bangalore-510627",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "562526",
                    "name": "Ambur Star Briyani Since 1890",
                    "cloudinaryImageId": "phkfr8ubjaca5ybl4ap1",
                    "locality": "Channasandra",
                    "areaName": "Rajarajeshwari Nagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Biryani",
                        "Chettinad",
                        "Andhra",
                        "Beverages",
                        "Seafood"
                    ],
                    "avgRating": 4.2,
                    "feeDetails": {
                        "restaurantId": "562526",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 10800
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 10800
                    },
                    "parentId": "21400",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 52,
                        "lastMileTravel": 10.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "52 mins",
                        "lastMileTravelString": "10.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:30:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-channasandra-rajarajeshwari-nagar-bangalore-562526",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "40227",
                    "name": "Le Arabia",
                    "cloudinaryImageId": "s2tcja1qsmkhkxkcly7z",
                    "locality": "Basaveshwara Nagar",
                    "areaName": "Basaveshwara Nagar",
                    "costForTwo": "₹570 for two",
                    "cuisines": [
                        "Arabian",
                        "Beverages",
                        "Biryani",
                        "Chinese",
                        "Desserts",
                        "Seafood",
                        "Hyderabadi",
                        "Ice Cream",
                        "Afghani",
                        "Grill",
                        "Tandoor"
                    ],
                    "avgRating": 3.6,
                    "feeDetails": {
                        "restaurantId": "40227",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6000
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6000
                    },
                    "parentId": "7457",
                    "avgRatingString": "3.6",
                    "totalRatingsString": "10K+",
                    "sla": {
                        "deliveryTime": 44,
                        "lastMileTravel": 6.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "44 mins",
                        "lastMileTravelString": "6.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 00:30:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/le-arabia-basaveshwara-nagar-bangalore-40227",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "24700",
                    "name": "Toscano",
                    "cloudinaryImageId": "gpwzj6nlriideeckzsji",
                    "locality": "Rajajinagar",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹800 for two",
                    "cuisines": [
                        "Italian",
                        "Pizzas",
                        "Pastas",
                        "Continental",
                        "Desserts",
                        "Bakery"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "24700",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 8300
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 8300
                    },
                    "parentId": "22481",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "5K+",
                    "sla": {
                        "deliveryTime": 67,
                        "lastMileTravel": 8.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "67 mins",
                        "lastMileTravelString": "8.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
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
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/toscano-rajajinagar-bangalore-24700",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "180963",
                    "name": "New Krishna Sagar",
                    "cloudinaryImageId": "ozq1fkuzvfa02dmgxzyv",
                    "locality": "2nd Stage",
                    "areaName": "Peenya",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Chinese"
                    ],
                    "avgRating": 4,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "180963",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5400
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5400
                    },
                    "parentId": "8912",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "100+",
                    "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "37 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 22:00:00",
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
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/new-krishna-sagar-2nd-stage-peenya-bangalore-180963",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            }
        ]
    ],
    "pageParams": [
        null,
        [
            {
                "info": {
                    "id": "54451",
                    "name": "La Heaven",
                    "cloudinaryImageId": "vqjwzgfieely2noma0or",
                    "locality": "Sampige Road",
                    "areaName": "Malleshwaram",
                    "costForTwo": "₹384 for two",
                    "cuisines": [
                        "Desserts",
                        "Bakery",
                        "Beverages"
                    ],
                    "avgRating": 4.4,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "54451",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 9300
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 9300
                    },
                    "parentId": "7455",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 76,
                        "lastMileTravel": 10,
                        "serviceability": "SERVICEABLE",
                        "slaString": "76 mins",
                        "lastMileTravelString": "10.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 22:15:00",
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
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/la-heaven-sampige-road-malleshwaram-bangalore-54451",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "350025",
                    "name": "1522 - The Pub",
                    "cloudinaryImageId": "zjljj1mpbgqeephmw5nw",
                    "locality": "Raja Rajeswari Nagar",
                    "areaName": "Rajarajeshwari Nagar",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                        "Chinese",
                        "North Indian",
                        "Continental",
                        "Beverages",
                        "Seafood",
                        "Hyderabadi"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "350025",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7300
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7300
                    },
                    "parentId": "22885",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 58,
                        "lastMileTravel": 7.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "58 mins",
                        "lastMileTravelString": "7.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/1522-the-pub-raja-rajeswari-nagar-rajarajeshwari-nagar-bangalore-350025",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "708760",
                    "name": "K C Das",
                    "cloudinaryImageId": "82d66b90554a59d340159fe81d882069",
                    "locality": "Halagevaderahalli",
                    "areaName": "Rajarajeshwari Nagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Snacks",
                        "Sweets"
                    ],
                    "avgRating": 3.8,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "708760",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 8600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 8600
                    },
                    "parentId": "406001",
                    "avgRatingString": "3.8",
                    "totalRatingsString": "20+",
                    "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 9.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "46 mins",
                        "lastMileTravelString": "9.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 22:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/k-c-das-halagevaderahalli-rajarajeshwari-nagar-bangalore-708760",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "71943",
                    "name": "Dilli Da Dhaba",
                    "cloudinaryImageId": "tkilsjhy7e3zczhpiinp",
                    "locality": "Mailasandra",
                    "areaName": "Kengeri",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Chinese",
                        "North Indian",
                        "Desserts",
                        "Fast Food",
                        "Punjabi",
                        "Hyderabadi"
                    ],
                    "avgRating": 4,
                    "feeDetails": {
                        "restaurantId": "71943",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 10100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 10100
                    },
                    "parentId": "20159",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "10K+",
                    "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 10.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "49 mins",
                        "lastMileTravelString": "10.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:45:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/dilli-da-dhaba-mailasandra-kengeri-bangalore-71943",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "403588",
                    "name": "Taiki",
                    "cloudinaryImageId": "4297ba5a19e9a14ec72ac2b41cd8ee96",
                    "locality": "Dr Rajkumar Rd",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹800 for two",
                    "cuisines": [
                        "Pan-Asian",
                        "Japanese",
                        "Korean",
                        "Sushi",
                        "Asian"
                    ],
                    "avgRating": 4,
                    "feeDetails": {
                        "restaurantId": "403588",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 8100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 8100
                    },
                    "parentId": "11264",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "500+",
                    "sla": {
                        "deliveryTime": 80,
                        "lastMileTravel": 8.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "80 mins",
                        "lastMileTravelString": "8.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 22:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
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
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/taiki-dr-rajkumar-rd-rajajinagar-bangalore-403588",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "562892",
                    "name": "Park Street",
                    "cloudinaryImageId": "d6748b17effcf8c0116ac58a375a5a88",
                    "locality": "M S R Nagar",
                    "areaName": "New BEL Road",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Indian",
                        "North Indian"
                    ],
                    "avgRating": 4.1,
                    "feeDetails": {
                        "restaurantId": "562892",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 10100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 10100
                    },
                    "parentId": "155717",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 68,
                        "lastMileTravel": 10.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "68 mins",
                        "lastMileTravelString": "10.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 21:31:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/park-street-m-s-r-nagar-new-bel-road-bangalore-562892",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "591680",
                    "name": "Paris Panini - Gourmet Sandwiches & Wraps",
                    "cloudinaryImageId": "toyz8hejwke7p37zpgod",
                    "locality": "1st Block",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Continental",
                        "Pastas",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Fast Food",
                        "French"
                    ],
                    "avgRating": 4.4,
                    "feeDetails": {
                        "restaurantId": "591680",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7300
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7300
                    },
                    "parentId": "21019",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 7.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50 mins",
                        "lastMileTravelString": "7.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ],
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
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
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹100"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/paris-panini-gourmet-sandwiches-and-wraps-1st-block-rajajinagar-bangalore-591680",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "591426",
                    "name": "The Pizza Bakery",
                    "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
                    "locality": "1st Block",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹700 for two",
                    "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Continental"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "591426",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7300
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7300
                    },
                    "parentId": "11108",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 7.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50 mins",
                        "lastMileTravelString": "7.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ],
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
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
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹100"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/the-pizza-bakery-1st-block-rajajinagar-bangalore-591426",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "413638",
                    "name": "CakeZone",
                    "cloudinaryImageId": "2857960242f8d1d4d390dc22a38c530e",
                    "locality": "Lingadeeranhalli",
                    "areaName": "Employees Layout",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Sweets",
                        "Ice Cream"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "413638",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 4800
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 4800
                    },
                    "parentId": "7003",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "37 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/cakezone-lingadeeranhalli-employees-layout-bangalore-413638",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "498325",
                    "name": "Istah - The Mediterranean Way",
                    "cloudinaryImageId": "67d4a416bf932f850b0a15ad33aae762",
                    "locality": "Ganesha Block",
                    "areaName": "Yeshwanthpur",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Mediterranean",
                        "Snacks",
                        "Biryani",
                        "Grill",
                        "Kebabs",
                        "Arabian",
                        "Lebanese",
                        "Beverages",
                        "Desserts",
                        "Italian",
                        "Turkish"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "498325",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6600
                    },
                    "parentId": "3518",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 7.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "46 mins",
                        "lastMileTravelString": "7.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                "description": "OnlyOnSwiggy"
                            }
                        ],
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
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
                                            "description": "OnlyOnSwiggy",
                                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹110"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-ganesha-block-yeshwanthpur-bangalore-498325",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "286574",
                    "name": "Chai Point",
                    "cloudinaryImageId": "cjmbqxgund7syshvymj7",
                    "locality": "Rajajinagar Industrial Town",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹150 for two",
                    "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American",
                        "North Indian",
                        "Fast Food",
                        "Desserts",
                        "Cafe",
                        "Healthy Food",
                        "Home Food"
                    ],
                    "avgRating": 4.2,
                    "feeDetails": {
                        "restaurantId": "286574",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6000
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6000
                    },
                    "parentId": "1607",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 6.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "49 mins",
                        "lastMileTravelString": "6.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 03:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "25% OFF",
                        "subHeader": "UPTO ₹125"
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/chai-point-industrial-town-rajajinagar-bangalore-286574",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "413324",
                    "name": "Starbucks Coffee",
                    "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
                    "locality": "Binnipete",
                    "areaName": "Basaveshwaranagar",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Bakery",
                        "Ice Cream"
                    ],
                    "avgRating": 4.2,
                    "feeDetails": {
                        "restaurantId": "413324",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 8100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 8100
                    },
                    "parentId": "195515",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "100+",
                    "sla": {
                        "deliveryTime": 52,
                        "lastMileTravel": 8.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "52 mins",
                        "lastMileTravelString": "8.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/starbucks-coffee-binnipete-basaveshwaranagar-bangalore-413324",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "746586",
                    "name": "Uncle Peter's Pancakes",
                    "cloudinaryImageId": "a06715b3035935ddbf5d0a3a57900857",
                    "locality": "RPC Layout",
                    "areaName": "Vijayanagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "American",
                        "Continental",
                        "Desserts"
                    ],
                    "avgRating": 3.9,
                    "feeDetails": {
                        "restaurantId": "746586",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5400
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5400
                    },
                    "parentId": "11863",
                    "avgRatingString": "3.9",
                    "totalRatingsString": "50+",
                    "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "39 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-16 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
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
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/uncle-peters-pancakes-rpc-layout-vijayanagar-bangalore-746586",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "577696",
                    "name": "Myfroyoland - Premium Frozen Yogurt",
                    "cloudinaryImageId": "xmosr86kkp0nfcb0nlwq",
                    "locality": "Nehru Nagar",
                    "areaName": "Seshadripuram",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Keto"
                    ],
                    "avgRating": 4.3,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "577696",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 10100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 10100
                    },
                    "parentId": "442929",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "50+",
                    "sla": {
                        "deliveryTime": 71,
                        "lastMileTravel": 10.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "71 mins",
                        "lastMileTravelString": "10.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 00:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
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
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/myfroyoland-premium-frozen-yogurt-nehru-nagar-seshadripuram-bangalore-577696",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "452278",
                    "name": "Third Wave Coffee",
                    "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
                    "locality": "Margosa Road",
                    "areaName": "Malleshwaram",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Beverages",
                        "Bakery",
                        "Continental"
                    ],
                    "avgRating": 4.6,
                    "feeDetails": {
                        "restaurantId": "452278",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 9100
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 9100
                    },
                    "parentId": "274773",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "500+",
                    "sla": {
                        "deliveryTime": 59,
                        "lastMileTravel": 9.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "59 mins",
                        "lastMileTravelString": "9.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 01:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
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
                "analytics": {},
                "cta": {
                    "link": "https://www.swiggy.com/restaurants/third-wave-coffee-margosa-road-malleshwaram-bangalore-452278",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            }
        ]
    ]
}))