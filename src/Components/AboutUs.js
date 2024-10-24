import { findByLabelText } from '@testing-library/react'
import React from 'react'

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
<br/>
<br/>

<div style={{ display: 'flex' ,flexDirection: 'row'}}>
<div style={{alignItems:'center'}}>
  <svg fill="#000000" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M437.019,74.981C388.667,26.628,324.379,0,256,0S123.333,26.628,74.981,74.981C26.628,123.333,0,187.621,0,256s26.628,132.667,74.981,181.019C123.333,485.372,187.621,512,256,512s132.667-26.628,181.019-74.981S512,324.379,512,256S485.372,123.333,437.019,74.981z M256,495.832C123.756,495.832,16.168,388.244,16.168,256S123.756,16.168,256,16.168S495.832,123.756,495.832,256S388.244,495.832,256,495.832z"></path>
    <path d="M347.845,97.011H164.155c-37.024,0-67.144,30.121-67.144,67.144v183.692c0,37.022,30.121,67.143,67.144,67.143h183.692c37.022,0,67.143-30.121,67.143-67.144V164.155C414.989,127.131,384.869,97.011,347.845,97.011z M398.821,347.845c0,28.108-22.868,50.976-50.976,50.976H164.155c-28.108,0-50.976-22.868-50.976-50.976V164.155c0-28.108,22.868-50.976,50.976-50.976h183.692c28.107,0,50.975,22.868,50.975,50.976V347.845z"></path>
    <path d="M339.402,251.22c-2.391-42.533-37.002-76.75-79.558-78.669c-49.108-2.214-89.535,38.232-87.292,87.346c1.945,42.56,36.19,77.154,78.728,79.51c17.951,0.995,34.762-3.727,48.803-12.494c4.374-2.731,5.087-8.814,1.441-12.459c-0.039-0.039-0.077-0.077-0.115-0.115c-2.657-2.658-6.778-3.059-9.971-1.075c-10.491,6.519-22.892,10.241-36.158,10.102c-37.455-0.394-67.676-31.844-66.621-69.286c1.061-37.681,33.215-67.721,71.657-65.312c33.126,2.076,60.09,28.49,62.819,61.569c1.111,13.475-1.787,26.206-7.61,37.157c-1.667,3.136-1.153,6.982,1.358,9.493c0.041,0.041,0.083,0.083,0.124,0.124c3.773,3.773,10.154,2.886,12.675-1.816C336.664,282.269,340.301,267.197,339.402,251.22z"></path>
    <circle cx="342.232" cy="158.989" r="21.558"></circle>
  </svg>
</div>
</div>
    </div>
  )
}

export default AboutUs