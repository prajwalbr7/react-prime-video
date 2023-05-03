// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {MovieList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
      <Slider {...settings}>
        {MovieList.map(eachItem => (
          <MovieItem Details={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </>
  )
}

export default MovieSlider
