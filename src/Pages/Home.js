import React from 'react'
import { default as Service} from '../Components/Home/Service/Index'
import { default as Price} from '../Components/Home/PricingPlan/Index'
import { default as ChooseUs} from '../Components/Home/ChooseUs/Index'
import { default as Testimonial} from '../Components/Home/Testimonial/Index'





export default function Home() {
    return (
        <div>
            <Service/>
            <Price/>
            <ChooseUs/>
            <Testimonial/>
        </div>
    )
}