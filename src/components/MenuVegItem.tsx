// import React, { useState } from "react"
// import useRestaurantMenu from "../utils/useRestaurantMenu"

// const MenuVegItem = () => {

//     const [isChecked, setIsChecked] = useState<boolean>(false)
//     const { topPicks, resInfo, restaurantMenu, offerDetails, setRestaurantMenu, setOfferDetails, setResInfo, setTopPicks, vegOnly, setVegOnly } = useRestaurantMenu(resId!)

//     const handleVegOnly = () => {
//         setIsChecked(!isChecked)
//         console.log('isChecked', isChecked)
//         if (!isChecked) {
//             console.log('isveg', restaurantMenu?.filter(menu => menu?.card?.card?.itemCards?.filter(item =>
//                 item?.card?.info?.isVeg === 1 || item?.card?.info?.itemAttribute.vegClassifier === 'VEG'
//             ))!)
//             setVegOnly(restaurantMenu?.filter(menu => menu?.card?.card?.itemCards?.filter(item =>
//                 item?.card?.info?.isVeg ? item?.card?.info?.isVeg >= 1 : ''))!)
//         } else {
//             setVegOnly(restaurantMenu!)
//         }
//     }

//     return (
//         <div className="">
//             <label key={i} className="relative inline-flex items-center cursor-pointer my-4">
//                 <input type="checkbox" value='' className="sr-only peer" checked={isChecked} onChange={handleVegOnly} />
//                 <span className="text-sm font-medium text-gray-900 dark:text-gray-700 mr-2">Veg Only</span>
//                 <div className="w-[36px] h-[16px] bg-gray-50 rounded-sm peer dark:bg-gray-700 peer-checked:after:translate-x-full
//             peer-checked:after:border-gray-700 after:content-[''] after:absolute after:top-[2.8px] after:left-[66px]
//             peer-checked:after:left-[69px] after:bg-white after:border-gray-300 after:border after:rounded-sm
//             after:h-[15px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-green-700"></div>
//             </label>
//         </div>
//     )
// }

// export default MenuVegItem