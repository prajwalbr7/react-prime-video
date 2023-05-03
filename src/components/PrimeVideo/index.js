// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const ActionMovies = 'ACTION'
  const ComedeyMovies = 'COMEDY'
  const {moviesList} = props

  const ActionList = moviesList.filter(
    eachItem => eachItem.categoryId === ActionMovies,
  )
  const ComedyList = moviesList.filter(
    eachItem => eachItem.categoryId === ComedeyMovies,
  )
  const img = 'https://assets.ccbp.in/frontend/react-js/prime-video-img.png '
  return (
    <>
      <div className="container-prime">
        <img src={img} alt="prime video" className="img-sizing" />
        <div className="movie-container">
          <h1 className="heading-movie-style">Action Movies</h1>
          <MovieSlider MovieList={ActionList} />

          <h1 className="heading-movie-style">Comedy Movies</h1>
          <MovieSlider MovieList={ComedyList} />
        </div>
      </div>
    </>
  )
}
export default PrimeVideo
