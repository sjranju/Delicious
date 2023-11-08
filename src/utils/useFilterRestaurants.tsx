import { useRef } from "react";
import * as TYPES from "./interfaces"
import { FILTERS, GET_MORE_RESTAURANTS } from "./constants";

interface LoadMoreRestaurantsReturnType {
    data: {
        cards: {
            card: {
                card: {
                    id: TYPES.MainCardID.restaurant_grid_listing
                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                    layout: {}
                    gridElements: {
                        infoWithStyle: {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                            restaurants: TYPES.RestaurantType[]
                            theme: string
                        }
                    }
                }
            }
        }[]
    }
}

const useFilterRestaurants = () => {

    const LIMIT = 15; // Number of items to load in one page
    const pageNo = useRef(10)

    const fetchRestaurantsInfinite = async (): Promise<TYPES.RestaurantType[]> => {
        const response = await fetch(`${GET_MORE_RESTAURANTS}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lat: 12.979568962372062,
                    lng: 77.50290893018244,
                    nextOffset: 'COVCELQ4KIDYjY+izN/eaDCnEw==',
                    // nextOffset: 'COVCELQ4KIDI+/+bvYaXIjCnEzgD',
                    seoParams: {
                        apiName: "FoodHomePage",
                        pageType: "FOOD_HOMEPAGE",
                        seoUrl: "https://www.swiggy.com/",
                    },
                    widgetOffset: {
                        "NewListingView_Topical_Fullbleed": "",
                        "NewListingView_Topical_Version2": "",
                        "NewListingView_category_bar_chicletranking_TwoRows": "",
                        "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
                        "Restaurant_Group_WebView_PB_Theme": "",
                        "Restaurant_Group_WebView_SEO_PB_Theme": "",
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": String(pageNo.current),
                        "inlineFacetFilter": "",
                        "restaurantCountWidget": ""
                    },
                    // _csrf: 'IDAIJflyb28a-dDXleh4DhODHKj1_M3fUXd4JWTI'
                    _csrf: '6x6Vpr2CpXc1-Ot7wrNbpkMhMQv_yM0AuCXcEQFU'
                }),
            });
        pageNo.current = pageNo.current + LIMIT
        const jsonValue: LoadMoreRestaurantsReturnType = await response.json() as LoadMoreRestaurantsReturnType;
        return jsonValue.data.cards[0].card.card.gridElements.infoWithStyle.restaurants
    };

    const fetchTopRatedRestaurantsInfinite = async (pageParam: string): Promise<TYPES.RestaurantType[]> => {
        const response = await fetch(`${GET_MORE_RESTAURANTS}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    filters: pageParam === 'topRated' ? FILTERS.TOP_RATED : pageParam === 'pureVeg' && FILTERS.PURE_VEG,
                    lat: 12.979568962372062,
                    lng: 77.50290893018244,
                    nextOffset: 'COVCELQ4KIDYjY+izN/eaDCnEw==',
                    // nextOffset: 'COVCELQ4KIDI+/+bvYaXIjCnEzgD',
                    seoParams: {
                        apiName: "FoodHomePage",
                        pageType: "FOOD_HOMEPAGE",
                        seoUrl: "https://www.swiggy.com/",
                    },
                    widgetOffset: {
                        "NewListingView_Topical_Fullbleed": "",
                        "NewListingView_Topical_Version2": "",
                        "NewListingView_category_bar_chicletranking_TwoRows": "",
                        "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
                        "Restaurant_Group_WebView_PB_Theme": "",
                        "Restaurant_Group_WebView_SEO_PB_Theme": "",
                        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": String(pageNo.current),
                        "inlineFacetFilter": "",
                        "restaurantCountWidget": ""
                    },
                    // _csrf: 'IDAIJflyb28a-dDXleh4DhODHKj1_M3fUXd4JWTI'
                    _csrf: '6x6Vpr2CpXc1-Ot7wrNbpkMhMQv_yM0AuCXcEQFU'
                }),
            });
        pageNo.current = pageNo.current + LIMIT
        const jsonValue: LoadMoreRestaurantsReturnType = await response.json() as LoadMoreRestaurantsReturnType;
        return jsonValue.data.cards[0].card.card.gridElements.infoWithStyle.restaurants
    };

    return { fetchRestaurantsInfinite, fetchTopRatedRestaurantsInfinite }
}

export default useFilterRestaurants

