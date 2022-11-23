import { useState, Fragment, FC } from 'react'
import './Youtube.scss'

interface YoutubeProps {
  videoId: string
}
const Youtube: FC<YoutubeProps> = ({ videoId }) => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <Fragment>
      {showVideo ? (
        <iframe
          id='iframe'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&showinfo=0`}
          frameBorder='0'
          allowFullScreen
        />
      ) : (
        <div id='placeHolderContainer'
          onClick={() => setShowVideo(true)}
        >
          <div id='imageContainer'
            style={{ background: `url("https://img.youtube.com/vi/${videoId}/mqdefault.jpg") no-repeat`, backgroundSize: 'cover' }}
          />

          <div id='playButtonContainer'>
            <div id='playButton'>
              <svg width="56px" height="56px" viewBox="0 -38 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" stroke="transparent" className='inline' >
                <g>
                  <path d="M250.346231,28.0746923 C247.358133,17.0320558 238.732098,8.40602109 227.689461,5.41792308 C207.823743,0 127.868333,0 127.868333,0 C127.868333,0 47.9129229,0.164179487 28.0472049,5.58210256 C17.0045684,8.57020058 8.37853373,17.1962353 5.39043571,28.2388718 C-0.618533519,63.5374615 -2.94988224,117.322662 5.5546152,151.209308 C8.54271322,162.251944 17.1687479,170.877979 28.2113844,173.866077 C48.0771024,179.284 128.032513,179.284 128.032513,179.284 C128.032513,179.284 207.987923,179.284 227.853641,173.866077 C238.896277,170.877979 247.522312,162.251944 250.51041,151.209308 C256.847738,115.861464 258.801474,62.1091 250.346231,28.0746923 Z" fill="#FF0000"></path>
                  <polygon fill="#FFFFFF" points="102.420513 128.06 168.749025 89.642 102.420513 51.224"></polygon>
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export { Youtube }