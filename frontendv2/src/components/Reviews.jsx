import Review from './Review.jsx';

const Reviews = () => {
  return (
    <div className="reviews">
      <h1>Avaliacoes</h1>
      <div className="list-reviews">
        <Review
          reviewer="Eduardo Calabria"
          text="Serviços bons, com uma plataforma bem estruturada."
        />
        <Review
          reviewer="Silvio Meira"
          text="Essa empresa ficou bom. Investiria sempre que fosse possível."
        />
      </div>
    </div>
  )
}

export default Reviews;