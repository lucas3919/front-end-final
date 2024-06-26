const Review = ({reviewer, text}) => {
  return (
    <div className="review">
      <p>{text}</p>
      <p>{reviewer}</p>
    </div>
  )
}

export default Review;