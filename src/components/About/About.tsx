import React from 'react'
import "./about.css"

const About:React.FC = () => {
  return (
    <div className='container mt-5  about'>
      <div className='intro  '>
      <h4 className='text-danger font-weight-bold mb-3'>
      Introduction
    </h4>
    <p className='para'>
    Start with a brief introduction to the restaurant,
     mentioning its name, location, and any unique selling points.
      For example: "Welcome to ABC Restaurant, located in the heart of XYZ city.
       We specialize in serving mouthwatering dishes prepared with locally sourced
        ingredients and a touch of international flavors."
    </p>

      </div>
      <div className='history '>
        <h4 className='mb-3 text-danger'>
          History

        </h4>
        <p className='para'>
        Provide a background story about the restaurant's establishment.
         Talk about the founders, their vision, and how the restaurant has evolved over the years.
          You can also mention any milestones or awards received. For example: "ABC Restaurant was founded in 2005
           by John Doe and Jane Smith, two passionate chefs with a dream of bringing culinary excellence to our community.
            Since then, we have been serving
         delicious meals to thousands of satisfied customers and have earned several accolades for our outstanding food and service."

        </p>
      </div>
      <div className='cuisines'>
        <h4 className='text-danger'>
        Cuisine and Specialties:
        </h4>
        <p className='para'>
        Highlight the type of cuisine your restaurant specializes in and the signature dishes that are a must-try.
         You can also mention any dietary options available, such as vegan or gluten-free.
         For example: "At ABC Restaurant, we are proud to offer a diverse menu featuring 
         a fusion of Mediterranean and Asian cuisines.
        </p>
      </div>
 

    </div>
  )
}

export default About
