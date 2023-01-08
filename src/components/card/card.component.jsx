import './card.style.css'

const Card = ({ cars }) => {
    const { car ,car_model,car_color , car_model_year, price} = cars;
    return (
        <div className="card-container">
            <h1>{car}</h1>
            <p>Model : {car_model}</p>
            <div className='carcolor'>
                <p>Color : {car_color}</p> 
                <p>Model Year :{car_model_year}</p>
                <p>Price {price}</p>
            </div>
           
        </div>
    )
}
export default Card;