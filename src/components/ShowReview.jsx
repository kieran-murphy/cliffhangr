import React from 'react'

const ShowReview = ({review}) => {
  return (
    <div>{review.name}: {review.text}</div>
  )
}

export default ShowReview