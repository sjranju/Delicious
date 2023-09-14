import '../styles/body.css'
import { restaurantData } from '../utils/restaurant'
import RestaurantCard from './RestaurantCard'

const Body = () => {
    return (
        <div className='body'>
            <div className='main'>
                <div>
                    <label> Search
                        <input type='search' />
                    </label>
                </div>
                <div className='restaurant-card'>
                    {restaurantData.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body
