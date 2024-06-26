import introImage from '../assets/images/IntroPicture.png';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-text">
        <span>O mais completo servico da America Latina.</span>
      </div>
      <img src={introImage} />
    </div>
  )
}

export default Intro;