import { useEffect, useState } from "react";
import axios from "axios";

const fetchChannelVideos = async (channelId) => {
  try {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          channelId: channelId,
          type: "video",
          order: "date",
          maxResults: 10, // Adjust the number of results as needed
          key: apiKey,
        },
      }
    );

    if (response.data.items.length > 0) {
      return response.data.items[0];
    } else {
      throw new Error("No videos found");
    }
  } catch (error) {
    console.error("Error fetching channel videos:", error);
    throw error;
  }
};

const LatestYoutubeVideo = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getChannelVideos = async () => {
      try {
        const channelId = "UC6SAu5a25gmJOQE8gEWq3oA";
        const videos = await fetchChannelVideos(channelId);
        setVideos(videos.id.videoId);
      } catch (error) {
        console.error("Error fetching channel videos:", error);
      }
    };

    getChannelVideos();
  }, []);

  return (
    <div>
      {videos ? (
        <iframe
          width="900"
          height="506"
          src={`https://www.youtube.com/embed/${videos}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Latest YouTube Video"
          className="aspect-video rounded-md"
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LatestYoutubeVideo;
