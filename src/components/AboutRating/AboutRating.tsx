import React from 'react'
import AboutRateOne from '../AboutRateOne/AboutRateOne'
import AboutRatingList from '../AboutRatingList/AboutRatingList'
import { poppins } from '@/utils/Helper/helper'

function AboutRating() {
  return (
    <section className={`${poppins.className}`}>
      <AboutRateOne/>
      <AboutRatingList/>
    </section>
  )
}

export default AboutRating
