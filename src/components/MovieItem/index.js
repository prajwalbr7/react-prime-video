// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {Details} = props
  const {thumbnailUrl, videoUrl} = Details
  return (
    <div>
      <Popup
        modal
        trigger={
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            className="img-sizing-thumbnail"
          />
        }
        className="popup-container"
      >
        {close => (
          <>
            <div className="button-right">
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose size="20" />
              </button>
            </div>
            <div className="video-center">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
