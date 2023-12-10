import React, { useState } from 'react'
import people from './assets/data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import '../src/App.css'

function App() {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const handlePreBtn = () => {
    setIndex((index-1+people.length)%people.length)
  }
  const handleNextBtn = () => {
    setIndex((index+1)%people.length)
  }
  return (
    <article>
      <h2 className='title'>Reviews</h2>
      <div className='review'>
        <div className='img-container'>
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
          <img src={image} alt={name} className='person-image' />
        </div>
        <h4 className='author'>{name}</h4>
        <h6 className='job'>{job}</h6>
        <p className='info'>{text}</p>
        <div className='btn'>
          <FaChevronLeft className='pre-btn' onClick={handlePreBtn} />
          <FaChevronRight className='next-btn' onClick={handleNextBtn} />
        </div>
      </div>
    </article>
  )
}

export default App
