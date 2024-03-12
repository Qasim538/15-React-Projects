import React, { useState } from 'react'
import people from './data'
import {FachevronLeft, FachevronRight, FaQuoteRight } from 'react-icons/fa'

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const {name, job, text} = people[index]
  return (
    <article className='review'>
      
    </article>
  )
}

export default Reviews
