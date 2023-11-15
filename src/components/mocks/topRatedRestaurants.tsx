import * as TYPES from "../../utils/interfaces"

type Page = {
    restaurants: TYPES.RestaurantType[]
}

export const page1: Page = JSON.parse(JSON.stringify({
    "restaurants": [
        {
            "info": {
                "id": "583805",
                "name": "Olio - The Wood Fired Pizzeria",
                "cloudinaryImageId": "fm9i2awf97alfu0cfhdg",
                "locality": "1st Block",
                "areaName": "Rajajinagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian"
                ],
                "avgRating": 4,
                "feeDetails": {
                    "restaurantId": "583805",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 9600
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 9600
                },
                "parentId": "11633",
                "avgRatingString": "4.0",
                "totalRatingsString": "500+",
                "sla": {
                    "deliveryTime": 40,
                    "lastMileTravel": 7.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40 mins",
                    "lastMileTravelString": "7.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 05:00:00",
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
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
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
                "link": "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-1st-block-rajajinagar-bangalore-583805",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "583806",
                "name": "Crusto's - Cheese Burst Pizza",
                "cloudinaryImageId": "pm8xhyfuqozkzfhamxdp",
                "locality": "Dr Rajkumar Road",
                "areaName": "Rajajinagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                    "restaurantId": "583806",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 9800
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 9800
                },
                "parentId": "268955",
                "avgRatingString": "4.1",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 42,
                    "lastMileTravel": 7.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "42 mins",
                    "lastMileTravelString": "7.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 05:00:00",
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
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
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
                "link": "https://www.swiggy.com/restaurants/crustos-cheese-burst-pizza-dr-rajkumar-road-rajajinagar-bangalore-583806",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "762879",
                "name": "Namasthe Veg",
                "cloudinaryImageId": "3c4bab5e3385057d450bdfd8268d4eac",
                "locality": "Annapurneshwari Nagar",
                "areaName": "Basaveshwaranagar",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "South Indian"
                ],
                "avgRating": 5,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "762879",
                    "fees": [
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4500
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4500
                },
                "parentId": "450031",
                "avgRatingString": "5.0",
                "totalRatingsString": "20+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 03:00:00",
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
                "isNewlyOnboarded": true,
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/namasthe-veg-annapurneshwari-nagar-basaveshwaranagar-bangalore-762879",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "763175",
                "name": "The Celebration Cakes and Desserts",
                "cloudinaryImageId": "1416541125e85d830af9f3b2e5d921fe",
                "locality": "Sree Rama Nagara",
                "areaName": "Vijayanagar",
                "costForTwo": "₹175 for two",
                "cuisines": [
                    "Bakery"
                ],
                "avgRating": 4.7,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "763175",
                    "fees": [
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4500
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4500
                },
                "parentId": "308643",
                "avgRatingString": "4.7",
                "totalRatingsString": "10+",
                "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 3.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "31 mins",
                    "lastMileTravelString": "3.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-22 00:00:00",
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
                "isNewlyOnboarded": true,
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/the-celebration-cakes-and-desserts-sree-rama-nagara-vijayanagar-bangalore-763175",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "330252",
                "name": "RNR Biryani - Taste of 1953",
                "cloudinaryImageId": "qttero3z1hbtwi7auo8p",
                "locality": "Vinayaka Layout",
                "areaName": "Nagarbhavi",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Biryani",
                    "South Indian",
                    "Kebabs"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "330252",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4200
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4200
                },
                "parentId": "11620",
                "avgRatingString": "4.2",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 2.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20 mins",
                    "lastMileTravelString": "2.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 01:00:00",
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
                "link": "https://www.swiggy.com/restaurants/rnr-biryani-taste-of-1953-vinayaka-layout-nagarbhavi-bangalore-330252",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "537531",
                "name": "Madras Meal Company",
                "cloudinaryImageId": "vtzzom9mm6p08mhupbrz",
                "locality": "Vijayanagar",
                "areaName": "Hoodi",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "South Indian"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                    "restaurantId": "537531",
                    "fees": [
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4500
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4500
                },
                "parentId": "128893",
                "avgRatingString": "4.1",
                "totalRatingsString": "20+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 3.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "lastMileTravelString": "3.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 01:00:00",
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
                "link": "https://www.swiggy.com/restaurants/madras-meal-company-vijayanagar-hoodi-bangalore-537531",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "558765",
                "name": "HRX by EatFit",
                "cloudinaryImageId": "d8d85afa5c5e92461d30ff2ca867a587",
                "locality": "Rajajinagar Industrial Town",
                "areaName": "Rajajinagar",
                "costForTwo": "₹450 for two",
                "cuisines": [
                    "Healthy Food",
                    "Salads",
                    "Keto"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                    "restaurantId": "558765",
                    "fees": [
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 9100
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 9100
                },
                "parentId": "335529",
                "avgRatingString": "4.3",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 7.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30 mins",
                    "lastMileTravelString": "7.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 01:00:00",
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
                "link": "https://www.swiggy.com/restaurants/hrx-by-eatfit-industrial-town-rajajinagar-bangalore-558765",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "577792",
                "name": "ITC Fabelle Chocolates",
                "cloudinaryImageId": "6f6d8daae5477dc213feeb87bd893926",
                "locality": "Lingadeeranhalli",
                "areaName": "Employees Layout",
                "costForTwo": "₹600 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts"
                ],
                "avgRating": 4.6,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "577792",
                    "fees": [
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 5300
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 5300
                },
                "parentId": "11024",
                "avgRatingString": "4.6",
                "totalRatingsString": "20+",
                "sla": {
                    "deliveryTime": 23,
                    "lastMileTravel": 4.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "23 mins",
                    "lastMileTravelString": "4.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 02:00:00",
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
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
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
                "link": "https://www.swiggy.com/restaurants/itc-fabelle-chocolates-lingadeeranhalli-employees-layout-bangalore-577792",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "787256",
                "name": "Seoul Fried Chicken",
                "cloudinaryImageId": "b76ed695e98af0127d588171d34795fd",
                "locality": "Priyadarshini Layout",
                "areaName": "Basaveshwaranagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "American",
                    "Fast Food",
                    "Snacks",
                    "Korean",
                    "Burgers",
                    "Beverages"
                ],
                "avgRating": 4.4,
                "feeDetails": {
                    "restaurantId": "787256",
                    "fees": [
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4500
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4500
                },
                "parentId": "468084",
                "avgRatingString": "4.4",
                "totalRatingsString": "3",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 3.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "lastMileTravelString": "3.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 03:00:00",
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
                "isNewlyOnboarded": true,
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/seoul-fried-chicken-priyadarshini-layout-basaveshwaranagar-bangalore-787256",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "594271",
                "name": "Taco Bell",
                "cloudinaryImageId": "d3b3db238b6448c3f297c851e9d0b96b",
                "locality": "Rajarajeshwari Nagar",
                "areaName": "Rajarajeshwari Nagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Mexican"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                    "restaurantId": "594271",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 9600
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 9600
                },
                "parentId": "1557",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 54,
                    "lastMileTravel": 7.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "54 mins",
                    "lastMileTravelString": "7.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 01:00:00",
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
                    "header": "ITEMS",
                    "subHeader": "AT ₹149"
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
                "link": "https://www.swiggy.com/restaurants/taco-bell-rajarajeshwari-nagar-bangalore-594271",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "374288",
                "name": "Big Bites",
                "cloudinaryImageId": "dsdyehmjuc9n6zjuol0k",
                "locality": "Byraveshwara Nagar",
                "areaName": "Vijay Nagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Street Food",
                    "Fast Food",
                    "Tex-Mex"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                    "restaurantId": "374288",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4500
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4500
                },
                "parentId": "45509",
                "avgRatingString": "4.3",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 3.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "lastMileTravelString": "3.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 01:00:00",
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
                "link": "https://www.swiggy.com/restaurants/big-bites-byraveshwara-nagar-vijay-nagar-bangalore-374288",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "692550",
                "name": "Kadegowda Military Hotel",
                "cloudinaryImageId": "a0192c837933561adfd8fc23ad06daaa",
                "locality": "Rajajinagara",
                "areaName": "Basaveshwaranagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "South Indian",
                    "Indian"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                    "restaurantId": "692550",
                    "fees": [
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 7100
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 7100
                },
                "parentId": "414877",
                "avgRatingString": "4.3",
                "totalRatingsString": "10+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 5.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "26 mins",
                    "lastMileTravelString": "5.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 01:00:00",
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
                "link": "https://www.swiggy.com/restaurants/kadegowda-military-hotel-rajajinagara-basaveshwaranagar-bangalore-692550",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "433630",
                "name": "Celebration Special by CakeZone",
                "cloudinaryImageId": "8ce7230b4f2d901d21c9ea424002bf7a",
                "locality": "Lingadeeranhalli",
                "areaName": "Employees Layout",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Desserts",
                    "Snacks",
                    "Bakery",
                    "Beverages"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "433630",
                    "fees": [
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 5300
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 5300
                },
                "parentId": "424059",
                "avgRatingString": "4.3",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 4.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "24 mins",
                    "lastMileTravelString": "4.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-16 02:00:00",
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
                "link": "https://www.swiggy.com/restaurants/celebration-special-by-cakezone-lingadeeranhalli-employees-layout-bangalore-433630",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "622161",
                "name": "MOJO Pizza - 2X Toppings",
                "cloudinaryImageId": "59b64f9bb67234987652437f21d379c2",
                "locality": "VV Puram",
                "areaName": "Basavanagudi",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Fast Food",
                    "Desserts"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "622161",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 8800
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 8800
                },
                "parentId": "11329",
                "avgRatingString": "4.2",
                "totalRatingsString": "100+",
                "sla": {
                    "lastMileTravel": 6.5,
                    "serviceability": "NON_SERVICEABLE",
                    "lastMileTravelString": "6.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextOpenTimeMessage": "Does not deliver to selected location",
                    "nextCloseTime": "2023-11-16 01:00:00",
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
                    "subHeader": "ABOVE ₹399",
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
                "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-vv-puram-basavanagudi-bangalore-622161",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "425576",
                "name": "NH1 Bowls - Highway To North",
                "cloudinaryImageId": "94654fdf308764cd0faf83dba35bcdc3",
                "locality": "Azad Nagar",
                "areaName": "Mysore Road",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "North Indian",
                    "Punjabi",
                    "Home Food"
                ],
                "avgRating": 4.4,
                "feeDetails": {
                    "restaurantId": "425576",
                    "fees": [
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 8100
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 8100
                },
                "parentId": "22452",
                "avgRatingString": "4.4",
                "totalRatingsString": "100+",
                "sla": {
                    "lastMileTravel": 6.5,
                    "serviceability": "NON_SERVICEABLE",
                    "lastMileTravelString": "6.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextOpenTimeMessage": "Does not deliver to selected location",
                    "nextCloseTime": "2023-11-16 01:00:00",
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
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
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
                "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-azad-nagar-mysore-road-bangalore-425576",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
    ],
}))

export const page2: Page = JSON.parse(JSON.stringify(
    {
        "restaurants": [
            {
                "info": {
                    "id": "732919",
                    "name": "Barbecue by Punjab Grill",
                    "cloudinaryImageId": "596359faed3f8b42bd882233e11c6075",
                    "locality": "Orion Mall",
                    "areaName": "Malleshwaram",
                    "costForTwo": "₹900 for two",
                    "cuisines": [
                        "North Indian",
                        "Kebabs",
                        "Biryani",
                        "Mughlai"
                    ],
                    "avgRating": 4.1,
                    "feeDetails": {
                        "restaurantId": "732919",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 10100
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 10100
                    },
                    "parentId": "382763",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "8",
                    "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 8.3,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "42 mins",
                        "lastMileTravelString": "8.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 11:30 am, today"
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
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
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
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
                    "link": "https://www.swiggy.com/restaurants/barbecue-by-punjab-grill-orion-mall-malleshwaram-bangalore-732919",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "49067",
                    "name": "Annakuta",
                    "cloudinaryImageId": "rldww3ndbpt9fgmqhfbs",
                    "locality": "Chord Road, 1st R Block",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Indian"
                    ],
                    "avgRating": 4.7,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "49067",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 10100
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 10100
                    },
                    "parentId": "11975",
                    "avgRatingString": "4.7",
                    "totalRatingsString": "500+",
                    "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 8.6,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "37 mins",
                        "lastMileTravelString": "8.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 8:45 am, today"
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
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
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹749",
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
                    "link": "https://www.swiggy.com/restaurants/annakuta-chord-road-1st-r-block-rajajinagar-bangalore-49067",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "180686",
                    "name": "Neelanjanam",
                    "cloudinaryImageId": "lowkgdj8qmnkl91qasgl",
                    "locality": "Govindaraja Nagar Ward",
                    "areaName": "Vijayanagar",
                    "costForTwo": "₹220 for two",
                    "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Sweets",
                        "Snacks"
                    ],
                    "avgRating": 4.1,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "180686",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5300
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5300
                    },
                    "parentId": "21261",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "35 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 11:30 am, today"
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "aggregatedDiscountInfoV2": {},
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
                    "link": "https://www.swiggy.com/restaurants/neelanjanam-govindaraja-nagar-ward-vijayanagar-bangalore-180686",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "629119",
                    "name": "Lion King",
                    "cloudinaryImageId": "r8sckehiejezweqdwk58",
                    "locality": "Rajkumar Road",
                    "areaName": "Malleshwaram",
                    "costForTwo": "₹150 for two",
                    "cuisines": [
                        "Chinese",
                        "Seafood"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "629119",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 9100
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 9100
                    },
                    "parentId": "125280",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "10+",
                    "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 7.7,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "36 mins",
                        "lastMileTravelString": "7.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 11:30 am, today"
                    },
                    "badges": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹399",
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
                    "link": "https://www.swiggy.com/restaurants/lion-king-rajkumar-road-malleshwaram-bangalore-629119",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "574162",
                    "name": "Juice And Chats",
                    "cloudinaryImageId": "bkzvnoe7mg13zofjzsa5",
                    "locality": "Maruthi Mandhir Service Road",
                    "areaName": "Vijayanagar",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Beverages"
                    ],
                    "avgRating": 4.1,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "574162",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5300
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5300
                    },
                    "parentId": "344593",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "6",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "35 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 10 am, today"
                    },
                    "badges": {},
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
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
                    "link": "https://www.swiggy.com/restaurants/juice-and-chats-maruthi-mandhir-service-road-vijayanagar-bangalore-574162",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "625924",
                    "name": "Saawariya",
                    "cloudinaryImageId": "upb3fk6tlc4xywcfov2s",
                    "locality": "RPC Layout",
                    "areaName": "Vijayanagar",
                    "costForTwo": "₹150 for two",
                    "cuisines": [
                        "North Indian",
                        "Snacks",
                        "Chaat"
                    ],
                    "avgRating": 4.8,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "625924",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7100
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7100
                    },
                    "parentId": "275246",
                    "avgRatingString": "4.8",
                    "totalRatingsString": "6",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 5.5,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "34 mins",
                        "lastMileTravelString": "5.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 9:30 am, today"
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "aggregatedDiscountInfoV2": {},
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
                    "link": "https://www.swiggy.com/restaurants/saawariya-rpc-layout-vijayanagar-bangalore-625924",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "526074",
                    "name": "SIRI NAATI STYLE HOTEL VIJAYANAGAR",
                    "cloudinaryImageId": "qputt1y67rvlncuhw06f",
                    "locality": "2nd Stage",
                    "areaName": "Vijayanagar",
                    "costForTwo": "₹450 for two",
                    "cuisines": [
                        "North Indian",
                        "Biryani",
                        "South Indian",
                        "Snacks"
                    ],
                    "avgRating": 4.1,
                    "feeDetails": {
                        "restaurantId": "526074",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5800
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5800
                    },
                    "parentId": "316345",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "20+",
                    "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "39 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Temporarily closed for delivery"
                    },
                    "badges": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "ABOVE ₹1000",
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
                    "link": "https://www.swiggy.com/restaurants/siri-naati-style-hotel-vijayanagar-2nd-stage-vijayanagar-bangalore-526074",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "221597",
                    "name": "Davanagere Benne Dose Hut",
                    "cloudinaryImageId": "lmi86aoiio1d6yetqy9g",
                    "locality": "Avalahalli",
                    "areaName": "Banashankari",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "South Indian"
                    ],
                    "avgRating": 4.1,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "221597",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 10100
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 10100
                    },
                    "parentId": "68799",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 8.1,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "37 mins",
                        "lastMileTravelString": "8.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 7:30 am, today"
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "aggregatedDiscountInfoV2": {},
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
                    "link": "https://www.swiggy.com/restaurants/davanagere-benne-dose-hut-avalahalli-banashankari-bangalore-221597",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "23239",
                    "name": "The Higher Taste Restaurant",
                    "cloudinaryImageId": "krm5mscsh71e6yalcdhk",
                    "locality": "Rajajinagar",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "North Indian"
                    ],
                    "avgRating": 4.5,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "23239",
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
                    "parentId": "209564",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 8.6,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "36 mins",
                        "lastMileTravelString": "8.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 12 noon, today"
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "aggregatedDiscountInfoV2": {},
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
                    "link": "https://www.swiggy.com/restaurants/the-higher-taste-restaurant-rajajinagar-bangalore-23239",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "541635",
                    "name": "Appu Donne Biriyani",
                    "cloudinaryImageId": "ra3vumy9ceprzznptlyj",
                    "locality": "Telecom Colony",
                    "areaName": "Vijayanagar",
                    "costForTwo": "₹120 for two",
                    "cuisines": [
                        "Biryani",
                        "Indian"
                    ],
                    "avgRating": 4,
                    "feeDetails": {
                        "restaurantId": "541635",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 9100
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 9100
                    },
                    "parentId": "309405",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "20+",
                    "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 7.6,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "36 mins",
                        "lastMileTravelString": "7.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 12 noon, today"
                    },
                    "badges": {},
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
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
                    "link": "https://www.swiggy.com/restaurants/appu-donne-biriyani-telecom-colony-vijayanagar-bangalore-541635",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "713299",
                    "name": "Magadis Biriyani",
                    "cloudinaryImageId": "a1804a64759270301e5e8be9f214952c",
                    "locality": "Magadi Main Rd",
                    "areaName": "Vijayanagar",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "Biryani"
                    ],
                    "avgRating": 5,
                    "feeDetails": {
                        "restaurantId": "713299",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 8100
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 8100
                    },
                    "parentId": "425837",
                    "avgRatingString": "5.0",
                    "totalRatingsString": "5",
                    "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 6.3,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "37 mins",
                        "lastMileTravelString": "6.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 12:30 pm, today"
                    },
                    "badges": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹150",
                        "discountTag": "SAVE BIG"
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
                    "link": "https://www.swiggy.com/restaurants/magadis-biriyani-magadi-main-rd-vijayanagar-bangalore-713299",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "404735",
                    "name": "Sri Sideeshwara Mess",
                    "cloudinaryImageId": "cdw49hu6tx4iis3s6h5s",
                    "locality": "Iyyannashetty layout",
                    "areaName": "Mysore Road",
                    "costForTwo": "₹450 for two",
                    "cuisines": [
                        "South Indian",
                        "Biryani"
                    ],
                    "avgRating": 4.9,
                    "feeDetails": {
                        "restaurantId": "404735",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 8100
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 8100
                    },
                    "parentId": "256148",
                    "avgRatingString": "4.9",
                    "totalRatingsString": "9",
                    "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 6.8,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "39 mins",
                        "lastMileTravelString": "6.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 7:30 am, today"
                    },
                    "badges": {},
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
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
                    "link": "https://www.swiggy.com/restaurants/sri-sideeshwara-mess-iyyannashetty-layout-mysore-road-bangalore-404735",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "717635",
                    "name": "Basava Bhojanalaya",
                    "cloudinaryImageId": "ad83be9585d1fb0e122874e3eb45d5e6",
                    "locality": "Sangeetha Mobiles",
                    "areaName": "Vijayanagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "South Indian",
                        "Mangalorean"
                    ],
                    "avgRating": 4.3,
                    "veg": true,
                    "feeDetails": {
                        "restaurantId": "717635",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7100
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7100
                    },
                    "parentId": "428008",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "10+",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "34 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 12 noon, today"
                    },
                    "badges": {},
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
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
                    "link": "https://www.swiggy.com/restaurants/basava-bhojanalaya-sangeetha-mobiles-vijayanagar-bangalore-717635",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "501217",
                    "name": "Mystique Palate",
                    "cloudinaryImageId": "ut7wyalxbbes6m9ny0dc",
                    "locality": "2nd Stage",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Chinese",
                        "Italian",
                        "Combo",
                        "Thai",
                        "Tibetan"
                    ],
                    "avgRating": 4.3,
                    "feeDetails": {
                        "restaurantId": "501217",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 9800
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 9800
                    },
                    "parentId": "142801",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "100+",
                    "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 7.5,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "38 mins",
                        "lastMileTravelString": "7.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 12 noon, today"
                    },
                    "badges": {},
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
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
                    "link": "https://www.swiggy.com/restaurants/mystique-palate-2nd-stage-rajajinagar-bangalore-501217",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                "info": {
                    "id": "770743",
                    "name": "Eleven Bakehouse",
                    "cloudinaryImageId": "0306cad2c2ec1f0fffd1e516ddb79a37",
                    "locality": "Dr.Rajkumar road",
                    "areaName": "Rajajinagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts"
                    ],
                    "avgRating": 4.2,
                    "feeDetails": {
                        "restaurantId": "770743",
                        "fees": [
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 10100
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 10100
                    },
                    "parentId": "460131",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "10+",
                    "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 8.3,
                        "serviceability": "SERVICEABLE_WITH_BANNER",
                        "slaString": "39 mins",
                        "lastMileTravelString": "8.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextOpenTimeMessage": "Opens next at 10 am, today"
                    },
                    "badges": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹250 OFF",
                        "subHeader": "ABOVE ₹999",
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
                    "link": "https://www.swiggy.com/restaurants/eleven-bakehouse-dr-rajkumar-road-rajajinagar-bangalore-770743",
                    "text": "RESTAURANT_MENU",
                    "type": "WEBLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            }
        ],
    }
))