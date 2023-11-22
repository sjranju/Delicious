import * as TYPES from "../../utils/interfaces"

type Page = {
    pages: TYPES.RestaurantType[][],
    pageParams: TYPES.RestaurantType[]
}

export const mockJson = {
    "statusCode": 1,
    "data": {
        "statusMessage": "mockJsondone successfully",
        "pageOffset": {
            "nextOffset": "COVCELQ4KICg+5vD3KuRPDCnEw==",
            "widgetOffset": {
                "NewListingView_category_bar_chicletranking_TwoRows": "",
                "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
                "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "0",
                "inlineFacetFilter": "",
                "restaurantCountWidget": ""
            }
        },
        "cards": [
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "layout": {
                            "columns": 4
                        },
                        "id": "restaurant_grid_listing",
                        "gridElements": {
                            "infoWithStyle": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                                "restaurants": [
                                    {
                                        "info": {
                                            "id": "437369",
                                            "name": "Ghar Ki Rasoi",
                                            "cloudinaryImageId": "xig2adse3dotmouvksfu",
                                            "locality": "Chikkamaranahalli",
                                            "areaName": "New BEL Road",
                                            "costForTwo": "₹10 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "South Indian",
                                                "Biryani",
                                                "Desserts",
                                                "Snacks",
                                                "Kerala"
                                            ],
                                            "avgRating": 3.5,
                                            "feeDetails": {
                                                "restaurantId": "437369",
                                                "fees": [
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 12500
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 12500
                                            },
                                            "parentId": "10211",
                                            "avgRatingString": "3.5",
                                            "totalRatingsString": "500+",
                                            "sla": {
                                                "deliveryTime": 41,
                                                "lastMileTravel": 10.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "41 mins",
                                                "lastMileTravelString": "10.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-18 11:59:00",
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
                                            "link": "https://www.swiggy.com/restaurants/ghar-ki-rasoi-chikkamaranahalli-new-bel-road-bangalore-437369",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "402714",
                                            "name": "Indiana Burgers",
                                            "cloudinaryImageId": "lflq8ulpskdypnl2gbak",
                                            "locality": "Millars Road",
                                            "areaName": "Vasanth Nagar",
                                            "costForTwo": "₹150 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "American",
                                                "Fast Food",
                                                "Beverages",
                                                "Desserts"
                                            ],
                                            "avgRating": 3.6,
                                            "feeDetails": {
                                                "restaurantId": "402714",
                                                "fees": [
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 15500
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 15500
                                            },
                                            "parentId": "5714",
                                            "avgRatingString": "3.6",
                                            "totalRatingsString": "100+",
                                            "sla": {
                                                "deliveryTime": 44,
                                                "lastMileTravel": 12.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "44 mins",
                                                "lastMileTravelString": "12.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-25 00:00:00",
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
                                            "link": "https://www.swiggy.com/restaurants/indiana-burgers-millars-road-vasanth-nagar-bangalore-402714",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "402710",
                                            "name": "WarmOven Cake & Desserts",
                                            "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
                                            "locality": "Millars Road",
                                            "areaName": "Vasanth Nagar",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Desserts",
                                                "Ice Cream",
                                                "Beverages"
                                            ],
                                            "avgRating": 3.8,
                                            "feeDetails": {
                                                "restaurantId": "402710",
                                                "fees": [
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 16200
                                                    },
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 16200
                                            },
                                            "parentId": "9696",
                                            "avgRatingString": "3.8",
                                            "totalRatingsString": "500+",
                                            "sla": {
                                                "deliveryTime": 54,
                                                "lastMileTravel": 12.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "54 mins",
                                                "lastMileTravelString": "12.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-25 00:00:00",
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
                                            "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-millars-road-vasanth-nagar-bangalore-402710",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "567207",
                                            "name": "NOTO - Ice Creams & Desserts",
                                            "cloudinaryImageId": "544f9e6dce1efb7054e4ac5d98aba049",
                                            "locality": "Guddadahalli",
                                            "areaName": "Hebbal",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "feeDetails": {
                                                "restaurantId": "567207",
                                                "fees": [
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 19200
                                                    },
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 19200
                                            },
                                            "parentId": "468478",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "100+",
                                            "sla": {
                                                "deliveryTime": 45,
                                                "lastMileTravel": 14.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45 mins",
                                                "lastMileTravelString": "14.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-18 05:55:00",
                                                "opened": true
                                            },
                                            "badges": {
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
                                                    "imageBased": {},
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
                                            "link": "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-guddadahalli-hebbal-bangalore-567207",
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
                                                        "fee": 9700
                                                    },
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 9700
                                            },
                                            "parentId": "268955",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "100+",
                                            "sla": {
                                                "deliveryTime": 49,
                                                "lastMileTravel": 7.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "49 mins",
                                                "lastMileTravelString": "7.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-18 05:00:00",
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
                                            "id": "536015",
                                            "name": "Rollsking",
                                            "cloudinaryImageId": "rrozfuykh1lumwcg23dp",
                                            "locality": "New BEL  Road",
                                            "areaName": "New BEL Road",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Fast Food",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.1,
                                            "feeDetails": {
                                                "restaurantId": "536015",
                                                "fees": [
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 14000
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 14000
                                            },
                                            "parentId": "4697",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "1K+",
                                            "sla": {
                                                "deliveryTime": 37,
                                                "lastMileTravel": 11.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "37 mins",
                                                "lastMileTravelString": "11.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-18 06:00:00",
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
                                            "link": "https://www.swiggy.com/restaurants/rollsking-new-bel-road-bangalore-536015",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "781699",
                                            "name": "Warm Begin",
                                            "cloudinaryImageId": "cbb5211d6a05ffc14af5aaece12f7ddf",
                                            "locality": "Vijayanagar",
                                            "areaName": "Basaveshwaranagar",
                                            "costForTwo": "₹150 for two",
                                            "cuisines": [
                                                "Bakery"
                                            ],
                                            "veg": true,
                                            "feeDetails": {
                                                "restaurantId": "781699",
                                                "fees": [
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 4400
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 4400
                                            },
                                            "parentId": "409681",
                                            "avgRatingString": "NEW",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 3.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30 mins",
                                                "lastMileTravelString": "3.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-25 00:00:00",
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
                                            "link": "https://www.swiggy.com/restaurants/warm-begin-vijayanagar-basaveshwaranagar-bangalore-781699",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "561866",
                                            "name": "The Meals Junction",
                                            "cloudinaryImageId": "kgnhjyhxljmgzyxchn7w",
                                            "locality": "Chikkamaranhalli",
                                            "areaName": "Sanjay Nagar",
                                            "costForTwo": "₹10 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Beverages",
                                                "Chinese",
                                                "Desserts"
                                            ],
                                            "avgRating": 3.2,
                                            "feeDetails": {
                                                "restaurantId": "561866",
                                                "fees": [
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 12500
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 12500
                                            },
                                            "parentId": "211345",
                                            "avgRatingString": "3.2",
                                            "totalRatingsString": "50+",
                                            "sla": {
                                                "deliveryTime": 39,
                                                "lastMileTravel": 10.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "39 mins",
                                                "lastMileTravelString": "10.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-25 00:00:00",
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
                                            "link": "https://www.swiggy.com/restaurants/the-meals-junction-chikkamaranhalli-sanjay-nagar-bangalore-561866",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "485771",
                                            "name": "Sree Banashankari Donne Biryani",
                                            "cloudinaryImageId": "hrn5r5ghcl7m3piog5iy",
                                            "locality": "2nd block",
                                            "areaName": "Basaveshwara Nagar",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "South Indian",
                                                "Indian",
                                                "Chinese",
                                                "Grill",
                                                "Kebabs",
                                                "Beverages"
                                            ],
                                            "avgRating": 3.8,
                                            "feeDetails": {
                                                "restaurantId": "485771",
                                                "fees": [
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 8000
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 8000
                                            },
                                            "parentId": "291485",
                                            "avgRatingString": "3.8",
                                            "totalRatingsString": "500+",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 6.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "24 mins",
                                                "lastMileTravelString": "6.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-18 06:00:00",
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
                                            "link": "https://www.swiggy.com/restaurants/sree-banashankari-donne-biryani-2nd-block-basaveshwara-nagar-bangalore-485771",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "110425",
                                            "name": "Om meals and paratha junction",
                                            "cloudinaryImageId": "qoztwkeh7e7crgsobs09",
                                            "locality": "A.K.Colony",
                                            "areaName": "New BEL Road",
                                            "costForTwo": "₹5 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Thalis",
                                                "Chinese",
                                                "South Indian",
                                                "Beverages",
                                                "Snacks",
                                                "Biryani",
                                                "Kerala",
                                                "American"
                                            ],
                                            "avgRating": 3.8,
                                            "feeDetails": {
                                                "restaurantId": "110425",
                                                "fees": [
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 12500
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 12500
                                            },
                                            "parentId": "21651",
                                            "avgRatingString": "3.8",
                                            "totalRatingsString": "1K+",
                                            "sla": {
                                                "deliveryTime": 38,
                                                "lastMileTravel": 10.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "38 mins",
                                                "lastMileTravelString": "10.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-25 00:00:00",
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
                                            "link": "https://www.swiggy.com/restaurants/om-meals-and-paratha-junction-a-k-colony-new-bel-road-bangalore-110425",
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
                                                        "fee": 4400
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 4400
                                            },
                                            "parentId": "450031",
                                            "avgRatingString": "5.0",
                                            "totalRatingsString": "20+",
                                            "sla": {
                                                "deliveryTime": 32,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "32 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-19 03:00:00",
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
                                            "id": "762085",
                                            "name": "The Pastry Zone",
                                            "cloudinaryImageId": "9822d3dcbe0c5e7d6abd57b1808ec3f6",
                                            "locality": "Gaadi Muddanna Road",
                                            "areaName": "Vijayanagar",
                                            "costForTwo": "₹150 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Cakes and Pastries"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "feeDetails": {
                                                "restaurantId": "762085",
                                                "fees": [
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 4400
                                                    },
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 4400
                                            },
                                            "parentId": "212397",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "20+",
                                            "sla": {
                                                "deliveryTime": 28,
                                                "lastMileTravel": 3.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "28 mins",
                                                "lastMileTravelString": "3.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-25 00:00:00",
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
                                            "link": "https://www.swiggy.com/restaurants/the-pastry-zone-gaadi-muddanna-road-vijayanagar-bangalore-762085",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "690384",
                                            "name": "The Cheesecake Co",
                                            "cloudinaryImageId": "d931abf9f1b568e26513c2ebe26e89ca",
                                            "locality": "Indira Gandhi Circle",
                                            "areaName": "JP Nagar",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Beverages",
                                                "Ice Cream",
                                                "European",
                                                "Bakery",
                                                "Juices",
                                                "Waffle",
                                                "Sweets"
                                            ],
                                            "avgRating": 3.5,
                                            "feeDetails": {
                                                "restaurantId": "690384",
                                                "fees": [
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 15500
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 15500
                                            },
                                            "parentId": "410474",
                                            "avgRatingString": "3.5",
                                            "totalRatingsString": "20+",
                                            "sla": {
                                                "deliveryTime": 40,
                                                "lastMileTravel": 12.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40 mins",
                                                "lastMileTravelString": "12.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-18 05:00:00",
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
                                            "link": "https://www.swiggy.com/restaurants/the-cheesecake-co-indira-gandhi-circle-jp-nagar-bangalore-690384",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "720688",
                                            "name": "Maggie World",
                                            "cloudinaryImageId": "53d952b4e56a01b6774bb2f522d709c3",
                                            "locality": "Prakash Nagar",
                                            "areaName": "Basaveshwaranagar",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "Snacks",
                                                "Fast Food",
                                                "Beverages",
                                                "Burgers"
                                            ],
                                            "avgRating": 3.6,
                                            "feeDetails": {
                                                "restaurantId": "720688",
                                                "fees": [
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 10000
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 10000
                                            },
                                            "parentId": "325459",
                                            "avgRatingString": "3.6",
                                            "totalRatingsString": "20+",
                                            "sla": {
                                                "deliveryTime": 48,
                                                "lastMileTravel": 8.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "48 mins",
                                                "lastMileTravelString": "8.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-18 23:59:00",
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
                                            "link": "https://www.swiggy.com/restaurants/maggie-world-prakash-nagar-basaveshwaranagar-bangalore-720688",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "690345",
                                            "name": "Bite Me Cupcakes",
                                            "cloudinaryImageId": "074ed13bca5fd2ee7c69b0ca0149635e",
                                            "locality": "Indira Gandhi Circle",
                                            "areaName": "JP Nagar",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Beverages",
                                                "Ice Cream"
                                            ],
                                            "avgRating": 4,
                                            "veg": true,
                                            "feeDetails": {
                                                "restaurantId": "690345",
                                                "fees": [
                                                    {
                                                        "name": "BASE_TIME"
                                                    },
                                                    {
                                                        "name": "BASE_DISTANCE",
                                                        "fee": 15500
                                                    },
                                                    {
                                                        "name": "ANCILLARY_SURGE_FEE"
                                                    }
                                                ],
                                                "totalFee": 15500
                                            },
                                            "parentId": "47437",
                                            "avgRatingString": "4.0",
                                            "totalRatingsString": "100+",
                                            "sla": {
                                                "deliveryTime": 41,
                                                "lastMileTravel": 12.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "41 mins",
                                                "lastMileTravelString": "12.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2023-11-18 05:00:00",
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
                                            "link": "https://www.swiggy.com/restaurants/bite-me-cupcakes-indira-gandhi-circle-jp-nagar-bangalore-690345",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    }
                                ],
                                "theme": "SeoRestaurantListingGridWidget"
                            }
                        }
                    }
                }
            }
        ],
        "nextFetch": 3
    },
    "tid": "9b649305-14e9-4518-a83f-02bacb8e7bef",
    "sid": "ais83447-32cc-4a9c-9a4f-319ced136a5f",
    "deviceId": "b7ccd23c-3533-3df8-85f4-fdfb9e1efb92",
    "csrfToken": null
}

export const mockPage = {
    "pages": [
        {
            "statusCode": 0,
            "data": {
                "statusMessage": "mockPagedone successfully",
                "pageOffset": {
                    "nextOffset": "COVCELQ4KICg+5vD3KuRPDCnEw==",
                    "widgetOffset": {
                        "NewListingView_category_bar_chicletranking_TwoRows": "",
                        "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "25",
                        "inlineFacetFilter": "",
                        "restaurantCountWidget": ""
                    }
                },
                "cards": [
                    {
                        "card": {
                            "card": {
                                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                                "layout": {
                                    "columns": 4
                                },
                                "id": "restaurant_grid_listing",
                                "gridElements": {
                                    "infoWithStyle": {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                                        "restaurants": [
                                            {
                                                "info": {
                                                    "id": "437369",
                                                    "name": "Ghar Ki Rasoi",
                                                    "cloudinaryImageId": "xig2adse3dotmouvksfu",
                                                    "locality": "Chikkamaranahalli",
                                                    "areaName": "New BEL Road",
                                                    "costForTwo": "₹10 for two",
                                                    "cuisines": [
                                                        "North Indian",
                                                        "South Indian",
                                                        "Biryani",
                                                        "Desserts",
                                                        "Snacks",
                                                        "Kerala"
                                                    ],
                                                    "avgRating": 3.5,
                                                    "feeDetails": {
                                                        "restaurantId": "437369",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 12500
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 12500
                                                    },
                                                    "parentId": "10211",
                                                    "avgRatingString": "3.5",
                                                    "totalRatingsString": "500+",
                                                    "sla": {
                                                        "deliveryTime": 41,
                                                        "lastMileTravel": 10.1,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "41 mins",
                                                        "lastMileTravelString": "10.1 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-18 11:59:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/ghar-ki-rasoi-chikkamaranahalli-new-bel-road-bangalore-437369",
                                                    "text": "RESTAURANT_MENU",
                                                    "type": "WEBLINK"
                                                },
                                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                            },
                                            {
                                                "info": {
                                                    "id": "402714",
                                                    "name": "Indiana Burgers",
                                                    "cloudinaryImageId": "lflq8ulpskdypnl2gbak",
                                                    "locality": "Millars Road",
                                                    "areaName": "Vasanth Nagar",
                                                    "costForTwo": "₹150 for two",
                                                    "cuisines": [
                                                        "Burgers",
                                                        "American",
                                                        "Fast Food",
                                                        "Beverages",
                                                        "Desserts"
                                                    ],
                                                    "avgRating": 3.6,
                                                    "feeDetails": {
                                                        "restaurantId": "402714",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 15500
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 15500
                                                    },
                                                    "parentId": "5714",
                                                    "avgRatingString": "3.6",
                                                    "totalRatingsString": "100+",
                                                    "sla": {
                                                        "deliveryTime": 44,
                                                        "lastMileTravel": 12.2,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "44 mins",
                                                        "lastMileTravelString": "12.2 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-25 00:00:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/indiana-burgers-millars-road-vasanth-nagar-bangalore-402714",
                                                    "text": "RESTAURANT_MENU",
                                                    "type": "WEBLINK"
                                                },
                                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                            },
                                            {
                                                "info": {
                                                    "id": "402710",
                                                    "name": "WarmOven Cake & Desserts",
                                                    "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
                                                    "locality": "Millars Road",
                                                    "areaName": "Vasanth Nagar",
                                                    "costForTwo": "₹200 for two",
                                                    "cuisines": [
                                                        "Bakery",
                                                        "Desserts",
                                                        "Ice Cream",
                                                        "Beverages"
                                                    ],
                                                    "avgRating": 3.8,
                                                    "feeDetails": {
                                                        "restaurantId": "402710",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 16200
                                                            },
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 16200
                                                    },
                                                    "parentId": "9696",
                                                    "avgRatingString": "3.8",
                                                    "totalRatingsString": "500+",
                                                    "sla": {
                                                        "deliveryTime": 54,
                                                        "lastMileTravel": 12.2,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "54 mins",
                                                        "lastMileTravelString": "12.2 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-25 00:00:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-millars-road-vasanth-nagar-bangalore-402710",
                                                    "text": "RESTAURANT_MENU",
                                                    "type": "WEBLINK"
                                                },
                                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                            },
                                            {
                                                "info": {
                                                    "id": "567207",
                                                    "name": "NOTO - Ice Creams & Desserts",
                                                    "cloudinaryImageId": "544f9e6dce1efb7054e4ac5d98aba049",
                                                    "locality": "Guddadahalli",
                                                    "areaName": "Hebbal",
                                                    "costForTwo": "₹250 for two",
                                                    "cuisines": [
                                                        "Ice Cream",
                                                        "Desserts"
                                                    ],
                                                    "avgRating": 4.3,
                                                    "veg": true,
                                                    "feeDetails": {
                                                        "restaurantId": "567207",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 19200
                                                            },
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 19200
                                                    },
                                                    "parentId": "468478",
                                                    "avgRatingString": "4.3",
                                                    "totalRatingsString": "100+",
                                                    "sla": {
                                                        "deliveryTime": 45,
                                                        "lastMileTravel": 14.9,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "45 mins",
                                                        "lastMileTravelString": "14.9 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-18 05:55:00",
                                                        "opened": true
                                                    },
                                                    "badges": {
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
                                                            "imageBased": {},
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
                                                    "link": "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-guddadahalli-hebbal-bangalore-567207",
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
                                                                "fee": 9700
                                                            },
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 9700
                                                    },
                                                    "parentId": "268955",
                                                    "avgRatingString": "4.1",
                                                    "totalRatingsString": "100+",
                                                    "sla": {
                                                        "deliveryTime": 49,
                                                        "lastMileTravel": 7.5,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "49 mins",
                                                        "lastMileTravelString": "7.5 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-18 05:00:00",
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
                                                    "id": "536015",
                                                    "name": "Rollsking",
                                                    "cloudinaryImageId": "rrozfuykh1lumwcg23dp",
                                                    "locality": "New BEL  Road",
                                                    "areaName": "New BEL Road",
                                                    "costForTwo": "₹250 for two",
                                                    "cuisines": [
                                                        "North Indian",
                                                        "Fast Food",
                                                        "Beverages"
                                                    ],
                                                    "avgRating": 4.1,
                                                    "feeDetails": {
                                                        "restaurantId": "536015",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 14000
                                                            },
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 14000
                                                    },
                                                    "parentId": "4697",
                                                    "avgRatingString": "4.1",
                                                    "totalRatingsString": "1K+",
                                                    "sla": {
                                                        "deliveryTime": 37,
                                                        "lastMileTravel": 11.5,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "37 mins",
                                                        "lastMileTravelString": "11.5 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-18 06:00:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/rollsking-new-bel-road-bangalore-536015",
                                                    "text": "RESTAURANT_MENU",
                                                    "type": "WEBLINK"
                                                },
                                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                            },
                                            {
                                                "info": {
                                                    "id": "781699",
                                                    "name": "Warm Begin",
                                                    "cloudinaryImageId": "cbb5211d6a05ffc14af5aaece12f7ddf",
                                                    "locality": "Vijayanagar",
                                                    "areaName": "Basaveshwaranagar",
                                                    "costForTwo": "₹150 for two",
                                                    "cuisines": [
                                                        "Bakery"
                                                    ],
                                                    "veg": true,
                                                    "feeDetails": {
                                                        "restaurantId": "781699",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 4400
                                                            },
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 4400
                                                    },
                                                    "parentId": "409681",
                                                    "avgRatingString": "NEW",
                                                    "sla": {
                                                        "deliveryTime": 31,
                                                        "lastMileTravel": 3.9,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "31 mins",
                                                        "lastMileTravelString": "3.9 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-25 00:00:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/warm-begin-vijayanagar-basaveshwaranagar-bangalore-781699",
                                                    "text": "RESTAURANT_MENU",
                                                    "type": "WEBLINK"
                                                },
                                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                            },
                                            {
                                                "info": {
                                                    "id": "561866",
                                                    "name": "The Meals Junction",
                                                    "cloudinaryImageId": "kgnhjyhxljmgzyxchn7w",
                                                    "locality": "Chikkamaranhalli",
                                                    "areaName": "Sanjay Nagar",
                                                    "costForTwo": "₹10 for two",
                                                    "cuisines": [
                                                        "North Indian",
                                                        "Beverages",
                                                        "Chinese",
                                                        "Desserts"
                                                    ],
                                                    "avgRating": 3.2,
                                                    "feeDetails": {
                                                        "restaurantId": "561866",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 12500
                                                            },
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 12500
                                                    },
                                                    "parentId": "211345",
                                                    "avgRatingString": "3.2",
                                                    "totalRatingsString": "50+",
                                                    "sla": {
                                                        "deliveryTime": 39,
                                                        "lastMileTravel": 10.1,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "39 mins",
                                                        "lastMileTravelString": "10.1 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-25 00:00:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/the-meals-junction-chikkamaranhalli-sanjay-nagar-bangalore-561866",
                                                    "text": "RESTAURANT_MENU",
                                                    "type": "WEBLINK"
                                                },
                                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                            },
                                            {
                                                "info": {
                                                    "id": "485771",
                                                    "name": "Sree Banashankari Donne Biryani",
                                                    "cloudinaryImageId": "hrn5r5ghcl7m3piog5iy",
                                                    "locality": "2nd block",
                                                    "areaName": "Basaveshwara Nagar",
                                                    "costForTwo": "₹250 for two",
                                                    "cuisines": [
                                                        "Biryani",
                                                        "South Indian",
                                                        "Indian",
                                                        "Chinese",
                                                        "Grill",
                                                        "Kebabs",
                                                        "Beverages"
                                                    ],
                                                    "avgRating": 3.8,
                                                    "feeDetails": {
                                                        "restaurantId": "485771",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 8000
                                                            },
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 8000
                                                    },
                                                    "parentId": "291485",
                                                    "avgRatingString": "3.8",
                                                    "totalRatingsString": "500+",
                                                    "sla": {
                                                        "deliveryTime": 24,
                                                        "lastMileTravel": 6.1,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "24 mins",
                                                        "lastMileTravelString": "6.1 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-18 06:00:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/sree-banashankari-donne-biryani-2nd-block-basaveshwara-nagar-bangalore-485771",
                                                    "text": "RESTAURANT_MENU",
                                                    "type": "WEBLINK"
                                                },
                                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                            },
                                            {
                                                "info": {
                                                    "id": "110425",
                                                    "name": "Om meals and paratha junction",
                                                    "cloudinaryImageId": "qoztwkeh7e7crgsobs09",
                                                    "locality": "A.K.Colony",
                                                    "areaName": "New BEL Road",
                                                    "costForTwo": "₹5 for two",
                                                    "cuisines": [
                                                        "North Indian",
                                                        "Thalis",
                                                        "Chinese",
                                                        "South Indian",
                                                        "Beverages",
                                                        "Snacks",
                                                        "Biryani",
                                                        "Kerala",
                                                        "American"
                                                    ],
                                                    "avgRating": 3.8,
                                                    "feeDetails": {
                                                        "restaurantId": "110425",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 12500
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 12500
                                                    },
                                                    "parentId": "21651",
                                                    "avgRatingString": "3.8",
                                                    "totalRatingsString": "1K+",
                                                    "sla": {
                                                        "deliveryTime": 38,
                                                        "lastMileTravel": 10.1,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "38 mins",
                                                        "lastMileTravelString": "10.1 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-25 00:00:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/om-meals-and-paratha-junction-a-k-colony-new-bel-road-bangalore-110425",
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
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 4400
                                                            },
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 4400
                                                    },
                                                    "parentId": "450031",
                                                    "avgRatingString": "5.0",
                                                    "totalRatingsString": "20+",
                                                    "sla": {
                                                        "deliveryTime": 29,
                                                        "lastMileTravel": 3,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "29 mins",
                                                        "lastMileTravelString": "3.0 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-19 03:00:00",
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
                                                    "id": "762085",
                                                    "name": "The Pastry Zone",
                                                    "cloudinaryImageId": "9822d3dcbe0c5e7d6abd57b1808ec3f6",
                                                    "locality": "Gaadi Muddanna Road",
                                                    "areaName": "Vijayanagar",
                                                    "costForTwo": "₹150 for two",
                                                    "cuisines": [
                                                        "Bakery",
                                                        "Cakes and Pastries"
                                                    ],
                                                    "avgRating": 4.2,
                                                    "veg": true,
                                                    "feeDetails": {
                                                        "restaurantId": "762085",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 4400
                                                            },
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 4400
                                                    },
                                                    "parentId": "212397",
                                                    "avgRatingString": "4.2",
                                                    "totalRatingsString": "20+",
                                                    "sla": {
                                                        "deliveryTime": 27,
                                                        "lastMileTravel": 3.9,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "27 mins",
                                                        "lastMileTravelString": "3.9 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-25 00:00:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/the-pastry-zone-gaadi-muddanna-road-vijayanagar-bangalore-762085",
                                                    "text": "RESTAURANT_MENU",
                                                    "type": "WEBLINK"
                                                },
                                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                            },
                                            {
                                                "info": {
                                                    "id": "690384",
                                                    "name": "The Cheesecake Co",
                                                    "cloudinaryImageId": "d931abf9f1b568e26513c2ebe26e89ca",
                                                    "locality": "Indira Gandhi Circle",
                                                    "areaName": "JP Nagar",
                                                    "costForTwo": "₹400 for two",
                                                    "cuisines": [
                                                        "Desserts",
                                                        "Beverages",
                                                        "Ice Cream",
                                                        "European",
                                                        "Bakery",
                                                        "Juices",
                                                        "Waffle",
                                                        "Sweets"
                                                    ],
                                                    "avgRating": 3.5,
                                                    "feeDetails": {
                                                        "restaurantId": "690384",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 15500
                                                            },
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 15500
                                                    },
                                                    "parentId": "410474",
                                                    "avgRatingString": "3.5",
                                                    "totalRatingsString": "20+",
                                                    "sla": {
                                                        "deliveryTime": 40,
                                                        "lastMileTravel": 12.8,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "40 mins",
                                                        "lastMileTravelString": "12.8 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-18 05:00:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/the-cheesecake-co-indira-gandhi-circle-jp-nagar-bangalore-690384",
                                                    "text": "RESTAURANT_MENU",
                                                    "type": "WEBLINK"
                                                },
                                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                            },
                                            {
                                                "info": {
                                                    "id": "720688",
                                                    "name": "Maggie World",
                                                    "cloudinaryImageId": "53d952b4e56a01b6774bb2f522d709c3",
                                                    "locality": "Prakash Nagar",
                                                    "areaName": "Basaveshwaranagar",
                                                    "costForTwo": "₹500 for two",
                                                    "cuisines": [
                                                        "Snacks",
                                                        "Fast Food",
                                                        "Beverages",
                                                        "Burgers"
                                                    ],
                                                    "avgRating": 3.6,
                                                    "feeDetails": {
                                                        "restaurantId": "720688",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 10000
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 10000
                                                    },
                                                    "parentId": "325459",
                                                    "avgRatingString": "3.6",
                                                    "totalRatingsString": "20+",
                                                    "sla": {
                                                        "deliveryTime": 50,
                                                        "lastMileTravel": 8.3,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "50 mins",
                                                        "lastMileTravelString": "8.3 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-18 23:59:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/maggie-world-prakash-nagar-basaveshwaranagar-bangalore-720688",
                                                    "text": "RESTAURANT_MENU",
                                                    "type": "WEBLINK"
                                                },
                                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                            },
                                            {
                                                "info": {
                                                    "id": "690345",
                                                    "name": "Bite Me Cupcakes",
                                                    "cloudinaryImageId": "074ed13bca5fd2ee7c69b0ca0149635e",
                                                    "locality": "Indira Gandhi Circle",
                                                    "areaName": "JP Nagar",
                                                    "costForTwo": "₹200 for two",
                                                    "cuisines": [
                                                        "Desserts",
                                                        "Beverages",
                                                        "Ice Cream"
                                                    ],
                                                    "avgRating": 4,
                                                    "veg": true,
                                                    "feeDetails": {
                                                        "restaurantId": "690345",
                                                        "fees": [
                                                            {
                                                                "name": "BASE_DISTANCE",
                                                                "fee": 15500
                                                            },
                                                            {
                                                                "name": "BASE_TIME"
                                                            },
                                                            {
                                                                "name": "ANCILLARY_SURGE_FEE"
                                                            }
                                                        ],
                                                        "totalFee": 15500
                                                    },
                                                    "parentId": "47437",
                                                    "avgRatingString": "4.0",
                                                    "totalRatingsString": "100+",
                                                    "sla": {
                                                        "deliveryTime": 41,
                                                        "lastMileTravel": 12.8,
                                                        "serviceability": "SERVICEABLE",
                                                        "slaString": "41 mins",
                                                        "lastMileTravelString": "12.8 km",
                                                        "iconType": "ICON_TYPE_EMPTY"
                                                    },
                                                    "availability": {
                                                        "nextCloseTime": "2023-11-18 05:00:00",
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
                                                    "link": "https://www.swiggy.com/restaurants/bite-me-cupcakes-indira-gandhi-circle-jp-nagar-bangalore-690345",
                                                    "text": "RESTAURANT_MENU",
                                                    "type": "WEBLINK"
                                                },
                                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                            }
                                        ],
                                        "theme": "SeoRestaurantListingGridWidget"
                                    }
                                }
                            }
                        }
                    }
                ],
                "nextFetch": 3
            },
            "tid": "925d2b9d-3774-4126-afac-870b767f18b3",
            "sid": "ais84ea5-75aa-4bdf-a638-9879f6dd3e7f",
            "deviceId": "46d00325-ffb7-8408-c767-d2a85dff9cc3",
            "csrfToken": null
        }
    ],
    "pageParams": [
        null
    ]
}

export const mockPageOffset =
{
    "nextOffset": "mockPageOffsetCOVCELQ4KIC4vOLGtuvYHzCnEw==",
    "widgetOffset": {
        "NewListingView_category_bar_chicletranking_TwoRows": "",
        "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "10",
        "inlineFacetFilter": "",
        "restaurantCountWidget": ""
    }
}

export const mockPageOffsetForRestaurantList = {
    "nextOffset": "mockPageOffsetForRestaurantListCOVCELQ4KIDYjY+izN/eaDCnEw==",
    "widgetOffset": {
        "NewListingView_Topical_Fullbleed": "",
        "NewListingView_Topical_Version2": "",
        "NewListingView_category_bar_chicletranking_TwoRows": "",
        "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
        "Restaurant_Group_WebView_PB_Theme": "",
        "Restaurant_Group_WebView_SEO_PB_Theme": "",
        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "10",
        "inlineFacetFilter": "",
        "restaurantCountWidget": ""
    }
}