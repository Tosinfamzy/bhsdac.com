import useYouTubeVideos from "../hooks/useYouTubeVideos";

const LatestYoutubeVideo = () => {
  const { data: videos, isLoading } = useYouTubeVideos({ maxResults: 1 });
  const videoId = videos?.[0]?.id?.videoId;

  if (isLoading) {
    return <p className="text-gray-600">Loading...</p>;
  }

  if (!videoId) return null;

  return (
    <div className="w-full">
      <div className="aspect-video w-full max-w-5xl mx-auto">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Latest YouTube Video"
          className="w-full h-full rounded-card shadow-card"
        />
      </div>
    </div>
  );
};

export default LatestYoutubeVideo;
