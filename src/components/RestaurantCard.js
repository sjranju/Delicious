import '../styles/restaurantCard.css'

const RestaurantCard = (props) => {
    const { resData } = props
    const { name, avgRating, cuisines, areaName, cloudinaryImageId } = resData?.info
    return (
        <div className="restaurant-item">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt='restaurant-food' />
            <div>{name}</div>
            <div>{avgRating}</div>
            <div className='cuisine'>{cuisines.join(',')}</div>
            <div className='cuisine'>{areaName}</div>
        </div>
    )

}

export default RestaurantCard