import { findByLabelText } from '@testing-library/react'
import React from 'react'
import HeadBar from './HeadBar.js';

const AboutUs = () => {
  return (
    <div>
        <h1 style={{align:"center"}}> About Us</h1>
        <h4>Welcome to The Pawfect Match – Where Every Pet Finds Their Forever Home </h4>
<p>
At The Pawfect Match, we believe that every pet deserves a loving home and a second chance at life. Founded on the principles of compassion, care, and community, we strive to connect rescued animals with families who are ready to give them the love they need and deserve.
</p>
<h6>Our Mission </h6>
<p>Our mission is simple: to save lives. We work tirelessly to rescue pets from shelters, the streets, and other difficult circumstances, providing them with the care they need to be happy, healthy, and ready for adoption. Through our platform, we aim to make it easy for you to find the perfect furry friend, whether you're looking for a playful puppy, a relaxed older cat, or anything in between. </p>

<h6>What We Do </h6>
<p>At The Pawfect Match, we partner with local shelters, foster networks, and rescue organizations to provide a comprehensive pet adoption experience. We offer: </p>
<dl>
<dt>A safe platform for adopting pets:</dt>
<dd> Browse profiles of adoptable pets, complete with their story, personality traits, and adoption status.</dd>
<dt>Support and guidance:</dt>
<dd> We’re here to help you every step of the way, from matching with the right pet to providing tips on care and training.</dd>
<dt>Education on responsible pet ownership: </dt>
<dd>Our goal is to ensure that every pet goes to a loving and committed home, so we provide resources on pet care, health, and training.</dd>
</dl>
<h6>Our Values</h6>
<dl>
<dt>Compassion: </dt>
<dd>Every animal deserves love, no matter their past. We’re dedicated to finding forever homes for pets of all ages, breeds, and backgrounds.</dd>
<dt>Transparency:</dt>
<dd> We provide detailed information on each pet's health, history, and personality to help you make an informed decision.</dd>
<dt>Community:</dt>
<dd>We believe in the power of a caring community, and we’re proud to partner with local shelters, volunteers, and foster families who share our passion for animals.</dd> 
</dl>
<h6>Our Team</h6>
Our team is made up of passionate animal lovers, many of whom have adopted pets themselves. We understand how important it is to find the right companion, and we are here to make that process as smooth and fulfilling as possible. Click <a href="www.google.com">here</a> to know more.

Thank you for visiting Pawfect Match! We’re excited to help you find your next best friend.
    </div>
  )
}

export default AboutUs