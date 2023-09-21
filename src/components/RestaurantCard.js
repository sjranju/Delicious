import { AiFillStar } from 'react-icons/ai'

export const RestaurantCard = (props) => {
    const { resData } = props
    const { name, avgRating, cuisines, areaName, cloudinaryImageId } = resData?.info
    return (
        <div className="flex flex-col justify-center items-start hover:transition hover:duration-250 hover:ease-in-out hover:scale-95">
            <img className='w-44 h-40 rounded-lg mb-1'
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt='restaurant-food' />
            <div className='font-medium truncate max-w-2xs'>{name}</div>
            <div className='flex items-center'><AiFillStar color='green' className='mr-1/2' />{avgRating}</div>
            <div className='truncate max-w-3xs text-sm text-slate-600'>{cuisines.join(',')}</div>
            <div className='truncate max-w-3xs text-sm text-slate-600'>{areaName}</div>
        </div>
    )

}

export default RestaurantCard