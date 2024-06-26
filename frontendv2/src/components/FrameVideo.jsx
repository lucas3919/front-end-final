const FrameVideo = ({height, width}) => {
  return (
    <div className="frame-video">
      <iframe width={width} height={height} />
    </div>
  )
}

export default FrameVideo;