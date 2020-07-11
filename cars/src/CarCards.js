import React, { Component } from 'react';

class CarCards extends Component {
    static defaultProps = [
        {
            price: `$113,540 msrp`,
            carName: 'Nissan GTR',
            maxSpeed: `215 mph`,
            timeTo60: `2.9 seconds`,
            horsePower: 565,
            image: 'https://cdn.motor1.com/images/mgl/8LAjo/s1/2020-nissan-gt-r-nismo.jpg'

        },
        {
            price: `$157,500 msrp`,
            carName: 'Acura NSX',
            maxSpeed: `191 mph`,
            timeTo60: `2.7 seconds`,
            horsePower: 573,
            image: 'https://www.kbb.com/wp-content/uploads/2019/11/05-2019-acura-nsx-oem-1.jpg'

        },
        {
            price: `$97,000 msrp`,
            carName: 'Porsche 911 Carerra',
            maxSpeed: `183 mph`,
            timeTo60: `4.0 seconds`,
            horsePower: 379,
            image: 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/08/28184307/2020-porsche-911-carrera-fd-red-11.jpg'

        },
        {
            price:`$256,500 msrp`,
            carName: 'McLaren 600LT',
            maxSpeed: `204 mph`,
            timeTo60: `2.8 seconds`,
            horsePower: 592,
            image: 'https://cdn.motor1.com/images/mgl/W308o/s1/mclaren-mso-600lt-coupe.jpg'

        },
        {
            price: `$417,826 msrp`,
            carName: 'Lamborghini Aventador SVJ',
            maxSpeed: `217 mph`,
            timeTo60: `2.6 seconds`,
            horsePower: 729,
            image: 'https://images.hgmsites.net/hug/lamborghini-aventador_100667008_h.jpg'

        },
    ]
    render() {
        const renderCars = this.props.map(function(car, idx) {
            return (
                <div className='car-card'>
                <img src={car.image} alt={car.carName}/>
                <div className='card-container'>
                <h4><b>{car.carName}</b></h4>
                <p>{car.price}</p>
                <p>{car.maxSpeed}</p>
                <p>{car.timeTo60} </p>
                <p>{car.horsePower} </p>
                </div>
            </div>
            )
        })

        return (
            <div> {renderCars} 
            </div>
        )
    }
}

export default CarCards;