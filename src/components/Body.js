import { useState } from 'react'
import '../styles/body.css'
import { restaurantData } from '../utils/restaurant'
import RestaurantCard from './RestaurantCard'

const Body = () => {

    const [restaurantList, setRestaurantList] = useState(restaurantData)

    return (
        <div className='body'>
            <div className='main'>
                {/* <div>
                    <label> Search
                        <input type='search' />
                    </label>
                </div> */}
                <div>
                    <button className='top-rated' onClick={() => {
                        let fileteredList = restaurantData.filter(rest => rest.info.avgRating > 4)
                        setRestaurantList(fileteredList)
                    }}>Top rated</button>
                </div>
                <div className='restaurant-card'>
                    {restaurantList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body
