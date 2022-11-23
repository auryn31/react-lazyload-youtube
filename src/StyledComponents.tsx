import styled from 'styled-components';

const PlaceHolderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`

const PlayButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const PlayButton = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;`

const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;`

export { PlaceHolderContainer, ImageContainer, PlayButton, PlayButtonContainer, VideoFrame }