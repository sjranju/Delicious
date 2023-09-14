import '../styles/body.css'
import { restaurantData } from '../utils/restaurant'
import RestaurantCard from './RestaurantCard'

const Body = () => {
    return (
        <div className='body'>
            <label> Search
                <input type='search' />
            </label>
            <div className='restaurant-card'>
                {restaurantData.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body
