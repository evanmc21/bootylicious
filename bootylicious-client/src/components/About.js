import React from 'react';
import Bey from '../images/Bey.jpg'

const About = () => {
  return(
    <div>
    <h2>{"Exercise is an important contributing factor to a healthy lifestyle, but it doesn't need to be daunting. Bootylicious is the perfect tool to keep you motivated and active by tracking your workouts. After all, what would Beyonce do?"}</h2>
    <br></br>
    <img className="img" alt="700x300" src={Bey}/>
    </div>
  )
}

export default About
