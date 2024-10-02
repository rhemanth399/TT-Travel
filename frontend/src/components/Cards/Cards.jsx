import './Cards.css';

const Cards = ({ vehicle }) => {
  return (
    <div className="Cards-main">
      <div>
        <img src={vehicle.image} alt={vehicle.name} className='swiftcar' />
      </div>
      <p className='vehicle-heading'>{vehicle.name}</p>
      <div className='vehicle-desc'>
        <p className='vehicle-descs'>Rate per Kilometer : Rs. {vehicle.ratePerKilometer}/-</p>
        <hr />
        <p className='vehicle-descs'>Max People : {vehicle.maxPeople}</p>
        <hr />
        <p className='vehicle-descs'>Transmission : {vehicle.transmission}</p>
        <hr />
        <p className='vehicle-descs'>Air Conditioned : {vehicle.airConditioned ? 'Yes' : 'No'}</p>
        <hr />
        <p className='vehicle-descs'>Driver Allowance: Rs. {vehicle.driverAllowance}/-</p>
        <hr />
      </div>
      <div>
        <a href={`tel:${vehicle.phoneNumber}`}>
          <button className='btn'>Book Now</button>
        </a>
      </div>
    </div>
  );
}

export default Cards;
