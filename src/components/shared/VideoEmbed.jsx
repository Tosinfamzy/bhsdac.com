const VideoEmbed = ({ videoId, playlistId, title = "Video" }) => {
  const src = playlistId
    ? `https://www.youtube.com/embed/videoseries?list=${playlistId}`
    : `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="aspect-video w-full max-w-5xl">
      <iframe
        width="100%"
        height="100%"
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        className="w-full h-full rounded-card shadow-card"
      />
    </div>
  );
};

export default VideoEmbed;
